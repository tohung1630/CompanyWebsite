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
  dataDetail: {},
  status: 0,
};

// ACTIONS TYPE
const actionType = Object.freeze({
  setData: 'userNew/setData',
  setLoading: 'userNew/setLoading',
  setError: 'userNew/setError',
  setCurrentPage: 'userNew/setCurrentPage',
  setCurrentId: 'userNew/setCurrentId',
  setPopularData: 'userNew/setPopularData',
  setPopularError: 'userNew/setPopularError',
  setDataArticles: 'userNew/setDataArticles',
  setDataDetail: 'userNew/setDataNewDetail',
});

//ACTIONS
export const setData = (data) => ({ type: actionType.setData, payload: data });

export const setLoading = (data) => ({ type: actionType.setLoading, payload: data });

export const setError = (data) => ({ type: actionType.setError, payload: data });

export const setCurrentPage = (data) => ({ type: actionType.setCurrentPage, payload: data });

export const setCurrentId = (data) => ({ type: actionType.setCurrentId, payload: data });

export const setPopularData = (data) => ({ type: actionType.setPopularData, payload: data });

export const setArticlesData = (data) => ({ type: actionType.setDataArticles, payload: data });

export const setPopularError = (data) => ({ type: actionType.setPopularError, payload: data });

export const setDataDetail = (data) => ({ type: actionType.setDataDetail, payload: data });

//THUNK ACTIONS
export const getUserNew = () => async (dispatch, getState) => {
  const state = getState().userNew;
  try {
    dispatch(setLoading(true));
    const data = await requestUser.get('new', {
      params: {
        per_page: 5,
        page: state.currentPage,
      },
    });
    console.log(data);
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getPopularNew =
  (currentPagePopular = 1) =>
  async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const data = await requestUser.get('new-popular', {
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

////get data detail
export const getNewDetail = (id) => async (dispatch, getState) => {
  try {
    const data = await requestUser.get(`new/${id}`);
    dispatch(setDataDetail(data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const userNewReducer = (state = initState, action) => {
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
    case actionType.setDataDetail:
      newState.dataDetail = action.payload;
      return newState;
    default:
      return state;
  }
};
