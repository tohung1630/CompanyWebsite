import { getCookie } from 'cookies-next';
import { requestAdmin, get, post, deletes } from '../../utils/httpAdmin';

const actionTypes = Object.freeze({
  // Action Type
  ADD_APIVOICE: 'DATAVOICE',
  SORT_API: 'DATABLOGSORT',
  SEARCH: 'setSearchStringVoice',
  EDITDATA: 'handleEditVoice',
  SETPAGE: 'voice/setCurrentPage',
  SETLOADING: 'handleJSX/loadingvoice',
});

const initState = {
  handleJSX: {
    uploatIMG: '',
    loading: true,
    returnVoice: false,
    page: 1,
  },
  dataVoice: {},
  dataUpdate: {},
  searchString: '',
  sortVoice: '',
};

// Actions
export const addApi = (data) => {
  return {
    type: actionTypes.ADD_APIVOICE,
    payload: data,
  };
};

export const callUpdateVoiceApi = (data) => {
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

export const apiVoice =
  (value = { search: '', sort: '' }) =>
  async (dispatch, getState) => {
    try {
      const userTokken = getCookie('access_token');
      const voiceAPI = await get('voice', userTokken, {
        title: value.search,
        sort: value.sort === 'none' ? '' : value.sort,
        page: getState().voice.handleJSX.page,
      });
      dispatch(addApi(voiceAPI));
    } catch (error) {
      dispatch(addApi());
    } finally {
      dispatch(setLoading(false));
    }
  };

//thêm
export const VoiceCreate = (data) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('desc', data.desc);
    formData.append('company', data.company);
    formData.append('lang', data.lang);
    formData.append('status', data.status);
    formData.append('image', data.image);
    const voiceCreate = await post('voice', userTokken, formData);
  } catch (error) {}
};
//cập nhật

export const updateVoiceGet = (id) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    const updateVoiceGetApi = await get(`voice/${id}`, userTokken);
    dispatch(callUpdateVoiceApi(updateVoiceGetApi));
  } catch (error) {}
};

export const voiceUpdate = (data) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    const formData = new FormData();
    formData.append('title', data.Data.title);
    formData.append('desc', data.Data.desc);
    formData.append('company', data.Data.company);
    formData.append('lang', data.Data.lang);
    formData.append('status', data.Data.status);
    formData.append('image', data.Data.image);
    formData.append('_method', 'PUT');

    await post(`voice/${data.id}`, userTokken, formData);
  } catch (error) {}
};

export const deleteVoice = (id) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    const deleteVoiceApi = await deletes(`voice/${id}`, userTokken);
    dispatch(apiVoice(deleteVoiceApi));
  } catch (error) {}
};

export const voiceReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_APIVOICE:
      return {
        ...state,
        dataVoice: action.payload,
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
    case actionTypes.SETLOADING:
      return {
        ...state,

        handleJSX: {
          ...state.handleJSX,
          loading: false,
          loading: action.payload,
        },
      };
    ///sửa
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

    default:
      return state;
  }
};
