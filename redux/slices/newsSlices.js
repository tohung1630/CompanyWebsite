import { getCookie } from 'cookies-next';
import { requestAdmin, get, post, deletes } from '../../utils/httpAdmin';

const initState = {
  handleJSX: {
    uploatIMG: '',
    returnNew: false,
    page: 1,
  },
  dataNew: {},
  dataUpdate: {},
};

// Actions
export const addApi = (data) => {
  return {
    type: 'dataNew/addApi',
    payload: data,
  };
};

export const page = (e) => {
  return {
    type: 'handleJSX/page',
    payload: e,
  };
};

export const uploatIMG = (data = '') => {
  return {
    type: 'handleJSX/apiMediaPost',
    payload: data,
  };
};

export const callUpdateNewApi = (data) => {
  return {
    type: 'dataUpdate',
    payload: data,
  };
};

export const changeTitles = (valueTitle) => {
  return {
    type: 'dataUpdate/valueTitle',
    payload: valueTitle,
  };
};

export const changeDescs = (valueDesc) => {
  return {
    type: 'dataUpdate/valueDesc',
    payload: valueDesc,
  };
};

export const changeMetas = (valueMeta) => {
  return {
    type: 'dataUpdate/valueMeta',
    payload: valueMeta,
  };
};

export const changeFURLs = (valueFUrl) => {
  return {
    type: 'dataUpdate/valueFUrl',
    payload: valueFUrl,
  };
};

export const changeLangs = (valueLangs) => {
  return {
    type: 'dataUpdate/valueLangs',
    payload: valueLangs,
  };
};

export const clickCheckBoxBlogs = () => {
  return {
    type: 'dataUpdate/clickCheckBoxBlogs',
  };
};

export const changeEditors = (valueEditor) => {
  return {
    type: 'dataUpdate/changeEditors',
    payload: valueEditor,
  };
};

export const changeCheckBox = (id) => {
  return {
    type: 'dataNew/changeCheckBox',
    payload: id,
  };
};

export const callApiNewGet =
  (value = { title: '', sort: '' }) =>
  async (dispatch, getState) => {
    try {
      const userTokken = getCookie('access_token');
      const newApi = await get('news', userTokken, {
        title: value.Search,
        sort: value.sortBy,
        page: getState().news.handleJSX.page,
      });
      dispatch(addApi(newApi));
    } catch (error) {
      // dispatch(addApi());
    }
  };

export const apiMediaPost = (file) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    const formData = new FormData();
    formData.append('file', file.originFileObj);
    const mediaPost = await post('media', userTokken, formData);
    dispatch(uploatIMG(mediaPost.location));
  } catch (error) {
    dispatch(addApi());
  }
};

export const NewsCreate = (data) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    const newsCreate = await post('news', userTokken, {
      ...data,
    });
    dispatch(uploatIMG());
  } catch (error) {}
};

export const NewsUpdate = (data) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    await post(`news/${data.id}`, userTokken, {
      ...data.Data,
    });
    dispatch(uploatIMG());
  } catch (error) {}
};

export const deleteNews = (id) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    await deletes(`news/${id}`, userTokken);
    dispatch(callApiNewGet());
  } catch (error) {}
};

export const updateNewGet = (id) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    const updateNewGetApi = await get(`news/${id}`, userTokken);
    dispatch(callUpdateNewApi(updateNewGetApi));
  } catch (error) {}
};

export const newReducer = (state = initState, action) => {
  switch (action.type) {
    case 'dataNew/addApi':
      return {
        ...state,
        dataNew: action.payload,
      };

    case 'handleJSX/apiMediaPost':
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          uploatIMG: action.payload,
        },
      };

    case 'handleJSX/returnNew':
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          returnNew: !state.handleJSX.returnNew,
        },
      };

    case 'dataUpdate':
      return {
        ...state,
        dataUpdate: action.payload,
      };

    case 'handleJSX/page':
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          page: action.payload,
        },
      };

    case 'dataUpdate/valueTitle':
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, title: action.payload },
        },
      };

    case 'dataUpdate/valueDesc':
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, desc: action.payload },
        },
      };

    case 'dataUpdate/valueFUrl':
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, friendly_url: action.payload },
        },
      };

    case 'dataUpdate/valueMeta':
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, meta: action.payload },
        },
      };

    case 'dataUpdate/valueLangs':
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, lang: action.payload },
        },
      };

    case 'dataUpdate/clickCheckBoxBlogs':
      const STT = state.dataUpdate.data?.status == 1 ? 0 : 1;
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, status: STT },
        },
      };

    case 'dataUpdate/changeEditors':
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, content: action.payload },
        },
      };

    case 'dataNew/changeCheckBox':
      const DataTop = state?.dataNew?.data.map((item) => {
        if (item.id == action.payload) {
          item.top == 0 ? (item.top = 1) : (item.top = 0);
          return item;
        }
        return item;
      });
      return {
        ...state,
        dataNew: {
          ...state.dataNew,
          data: DataTop,
        },
      };
    default:
      return state;
  }
};
