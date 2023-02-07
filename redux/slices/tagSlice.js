import { getCookie } from 'cookies-next';
import { requestAdmin, get, post, deletes } from '../../utils/httpAdmin';

const actionTypes = Object.freeze({
  // Action Type
  ADD_APITAG: 'DATABTAG',
  SORT_API: 'DATABLOGSORT',
  SEARCH: 'setSearchStringTag',
  EDITDATA: 'handleEditTag',
  SETPAGE: 'product/setCurrentPage',
  SETLOADING: 'handleJSX/loadingtags',
});

const initState = {
  handleJSX: {
    uploatIMG: '',
    loading: true,
    returnTags: false,
    page: 1,
  },
  dataTag: {},
  dataUpdate: {},
  searchString: '',
  sortTag: '',
};

// Actions
export const addApi = (data) => {
  return {
    type: actionTypes.ADD_APITAG,
    payload: data,
  };
};

export const callUpdateTagApi = (data) => {
  return {
    type: actionTypes.EDITDATA,
    payload: data,
  };
};

export const searchApi = (data) => {
  return {
    type: actionTypes.SEARCH,
    payload: data,
  };
};

export const page = (data) => {
  return {
    type: actionTypes.SETPAGE,
    payload: data,
  };
};

export const setLoading = (loading) => {
  return {
    type: actionTypes.SETLOADING,
    payload: loading,
  };
};

export const apiTags =
  (value = { search: '', sort: '' }) =>
  async (dispatch, getState) => {
    try {
      const userTokken = getCookie('access_token');
      const tagApi = await get('tags', userTokken, {
        name: value.search,
        sort: value.sort === 'none' ? '' : value.sort,
        page: getState().tags.handleJSX.page,
      });
      dispatch(addApi(tagApi));
    } catch (error) {
      dispatch(addApi());
    }
  };

export const TagsCreate = (data) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    const tagsCreate = await post('tags', userTokken, {
      ...data,
    });
  } catch (error) {}
};

export const updateTagsGet = (id) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    const updateTagGetApi = await get(`tags/${id}`, userTokken);
    dispatch(callUpdateTagApi(updateTagGetApi));
  } catch (error) {}
};

export const TagsUpdate = (data) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    await post(`tags/${data.id}`, userTokken, {
      ...data.Data,
    });
  } catch (error) {}
};

export const deleteTags = (id) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    await deletes(`tags/${id}`, userTokken);
    dispatch(apiTags());
  } catch (error) {}
};

export const tagReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_APITAG:
      return {
        ...state,
        dataTag: action.payload,
      };
    case actionTypes.EDITDATA:
      return {
        ...state,
        dataUpdate: action.payload,
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        searchString: action.payload,
      };
    case actionTypes.SETLOADING:
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          loading: false,
          loading: action.payload,
        },
      };
    case actionTypes.SETPAGE:
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          loading: true,
          page: action.payload,
        },
      };

    default:
      return state;
  }
};
