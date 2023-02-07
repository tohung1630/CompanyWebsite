import { requestUser } from '../../utils/httpUser';

//  INITIAL STATE
const initState = {
  data: {},
  loading: true,
  error: {},
  currentPage: 1,
  currentId: 0,
  dataPopular: {},
  dataArticles: {},
  errorPopular: {},
  errorDetail: {},
  dataDetail: {},
  dataBottomDetail: {}
};

// ACTIONS TYPE
const actionType = Object.freeze({
  setData: 'userBlog/setData',
  setLoading: 'userBlog/setLoading',
  setError: 'userBlog/setError',
  setCurrentPage: 'userBlog/setCurrentPage',
  setCurrentId: 'userBlog/setCurrentId',
  setPopularData: 'userBlog/setPopularData',
  setPopularError: 'userBlog/setPopularError',
  setDataArticles: 'userBlog/setDataArticles',

  setDetailError: 'userBlog/setDetailError',
  setDataDetail: 'userBlog/setDataBlogDetail',
  setDataBottomDetail:'userBlog/setDataBottomDetail'
});

//ACTIONS
export const setData = (data) => ({ type: actionType.setData, payload: data });

export const setLoading = (data) => ({ type: actionType.setLoading, payload: data });

export const setError = (data) => ({ type: actionType.setError, payload: data });

export const setCurrentPage = (data) => ({ type: actionType.setCurrentPage, payload: data });

export const setCurrentId = (data) => ({ type: actionType.setCurrentId, payload: data });

export const setPopularData = (data) => ({ type: actionType.setPopularData, payload: data });

export const setArticlesData = (data) => ({ type: actionType.setDataArticles, payload: data });

export const setDetailData = (data) => ({ type: actionType.setDataDetail, payload: data });

export const setPopularError = (data) => ({ type: actionType.setPopularError, payload: data });

export const setDetailError = (data) => ({ type: actionType.setDetailError, payload: data });

export const setDataBottomDetail = (data) => ({ type: actionType.setDataBottomDetail, payload: data });

//THUNK ACTIONS
export const getUserBlog = () => async (dispatch, getState) => {
  const state = getState().userBlog;
  try {
    dispatch(setLoading(true));
    const data = await requestUser.get('blog', {
      params: {
        per_page: 11,
        page: state.currentPage,
      },
    });
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getPopularBlog =
  (currentPagePopular = 1) =>
  async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const data = await requestUser.get('blog-popular', {
        params: {
          per_page: 5,
          page: currentPagePopular,
        },
      });
      currentPagePopular === 1 ? dispatch(setPopularData(data)) : dispatch(setArticlesData(data));
    } catch (error) {
      dispatch(setPopularError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
  // bottom detail
export const getDataBottomDetail =
  (currentPagePopular = 2) =>
  async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const data = await requestUser.get('blog-popular', {
        params: {
          per_page: 4,
          page: currentPagePopular,
        },
      });
      dispatch(setDataBottomDetail(data))
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };



////get data detail
export const getBlogDetail = (id) => async (dispatch, getState) => {
  try {
    const data = await requestUser.get(`blog/${id}`);
    dispatch(setDetailData(data));
  } catch (error) {
    dispatch(setDetailError(error));
  } finally {
    dispatch(setLoading(false));
  }
};



export const userBlogReducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionType.setData:
      newState.data = action.payload;
      return newState;
    case actionType.setLoading:
      newState.loading = action.payload;
      return newState;
    case actionType.setError:
      newState.error = action.payload;
      return newState;
    case actionType.setCurrentPage:
      newState.currentPage = action.payload;
      return newState;
    case actionType.setCurrentId:
      newState.currentId = action.payload;
      return newState;
    case actionType.setPopularError:
      newState.errorPopular = action.payload;
      return newState;
    case actionType.setPopularData:
      newState.dataPopular = action.payload;
      return newState;
    case actionType.setDataArticles:
      newState.dataArticles = action.payload;
      return newState;
    case actionType.setDetailError:
      newState.errorDetail = action.payload;
      return newState;
    case actionType.setDataDetail:
      newState.dataDetail = action.payload;
      return newState;
    case actionType.setDataBottomDetail:
      newState.dataBottomDetail= action.payload;
      return newState;
    default:
      return state;
  }
};
