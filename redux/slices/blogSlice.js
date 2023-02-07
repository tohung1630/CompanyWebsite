import { getCookie } from 'cookies-next';

import { requestAdmin, get, post, deletes } from '../../utils/httpAdmin';

const actionTypes = Object.freeze({
  // Action Type
  ADD_API: 'DATABLOG',
  SORT_API: 'DATAAPISORT',
  SEARCH: 'product/setSearchString',
  SETPAGE: 'product/setCurrentPage',
  APIMEDIAPOST: '/apiMediaPost',
  RETURNBLOG: 'handleJSX/returnBlog',
  EDITDATA: 'handleEdit',
  SETLOADING: 'handleJSX/loading',
  CHANGETITLE: 'dataUpdate/valueTitle',
  CHANGETAG: 'dataUpdate/valueTAG',
  CHANGEDESC: 'dataUpdate/valueDesc',
  CHANGEMETA: 'dataUpdate/valueMeta',
  CHANGEFURL: 'dataUpdate/valueFUrl',
  CHANGELANGs: 'dataUpdate/valueLangs',
  CLICKCHECKBOX: 'dataUpdate/clickCheckBoxBlogs',
  CHANGEEDITOR: 'dataUpdate/changeEditors',
  CHANGECHECKBOX: 'dataBlog/changeCheckBox',
});
const initState = {
  handleJSX: {
    uploatIMG: '',
    loading: true,
    returnBlog: false,
    page: 1,
  },
  dataBlog: {},
  dataUpdate: {},
  searchString: '',
  sortBlog: '',
};

// Actions
export const addApi = (data) => {
  return {
    type: actionTypes.ADD_API,
    payload: data,
  };
};

export const callUpdateBlogApi = (data) => {
  return {
    type: actionTypes.EDITDATA,
    payload: data,
  };
};
export const sortApi = (data) => {
  return {
    type: actionTypes.SORT_API,
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

export const uploatIMG = (data = '') => {
  return {
    type: actionTypes.APIMEDIAPOST,
    payload: data,
  };
};

export const changeTitles = (valueTitle) => {
  return {
    type: actionTypes.CHANGETITLE,
    payload: valueTitle,
  };
};

export const changeTag = (valueTitle) => {
  return {
    type: actionTypes.CHANGETAG,
    payload: valueTitle,
  };
};

export const changeDescs = (valueDesc) => {
  return {
    type: actionTypes.CHANGEDESC,
    payload: valueDesc,
  };
};

export const changeMetas = (valueMeta) => {
  return {
    type: actionTypes.CHANGEMETA,
    payload: valueMeta,
  };
};

export const changeFURLs = (valueFUrl) => {
  return {
    type: actionTypes.CHANGEFURL,
    payload: valueFUrl,
  };
};

export const changeLangs = (valueLangs) => {
  return {
    type: actionTypes.CHANGELANGs,
    payload: valueLangs,
  };
};

export const clickCheckBoxBlogs = () => {
  return {
    type: actionTypes.CLICKCHECKBOX,
  };
};

export const changeEditors = (valueEditor) => {
  return {
    type: actionTypes.CHANGEEDITOR,
    payload: valueEditor,
  };
};

export const changeCheckBox = (id) => {
  return {
    type: actionTypes.CHANGECHECKBOX,
    payload: id,
  };
};

export const setLoading = (loading) => {
  return {
    type: actionTypes.SETLOADING,
    payload: loading,
  };
};

export const apiBlogs =
  (value = { search: '', sort: '' }) =>
  async (dispatch, getState) => {
    try {
      const userTokken = getCookie('access_token');
      const blogApi = await get('blogs', userTokken, {
        title: value.search,
        sort: value.sort === 'none' ? '' : value.sort,
        page: getState().blogs.handleJSX.page,
      });
      dispatch(addApi(blogApi));
    } catch (error) {
      dispatch(addApi());
    } finally {
      dispatch(setLoading(false));
    }
  };

///upload ảnh
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

export const BlogsCreate = (data) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    await post('blogs', userTokken, {
      ...data,
    });
    dispatch(uploatIMG());
  } catch (error) {}
};

//cập nhật
//lấy ra giá trị cũ
export const updateBlogGet = (id) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    const updateBlogGetApi = await get(`blogs/${id}`, userTokken);
    dispatch(callUpdateBlogApi(updateBlogGetApi));
  } catch (error) {}
};
//update giá trị mới
export const BlogsUpdate = (data) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    await post(`blogs/${data.id}`, userTokken, {
      ...data.Data,
    });
    dispatch(uploatIMG());
  } catch (error) {}
};

////xóa
export const deleteBlogs = (id) => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    await deletes(`blogs/${id}`, userTokken);
    dispatch(apiBlogs());
  } catch (error) {}
};

export const blogReducer = (state = initState, action) => {
  // const newState = { ...state }
  switch (action.type) {
    case actionTypes.ADD_API:
      return {
        ...state,
        dataBlog: action.payload,
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
    case actionTypes.APIMEDIAPOST:
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          uploatIMG: action.payload,
        },
      };

    case actionTypes.RETURNBLOG:
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          returnBlog: !state.handleJSX.returnBlog,
        },
      };
    case actionTypes.CHANGETITLE:
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, title: action.payload },
        },
      };

    case actionTypes.CHANGEDESC:
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, desc: action.payload },
        },
      };

    case actionTypes.CHANGEMETA:
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, meta: action.payload },
        },
      };

    case actionTypes.CHANGETAG:
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, tags: action.payload },
        },
      };

    case actionTypes.CHANGEFURL:
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, friendly_url: action.payload },
        },
      };

    case actionTypes.CHANGELANGs:
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, lang: action.payload },
        },
      };

    case actionTypes.CLICKCHECKBOX:
      const STT = state.dataUpdate.data?.status == 1 ? 0 : 1;
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, status: STT },
        },
      };

    case actionTypes.CHANGEEDITOR:
      return {
        ...state,
        dataUpdate: {
          data: { ...state.dataUpdate.data, content: action.payload },
        },
      };

    case actionTypes.CHANGECHECKBOX:
      const DataTop = state?.dataBlog?.data.map((item) => {
        if (item.id == action.payload) {
          item.top == 0 ? (item.top = 1) : (item.top = 0);
          return item;
        }
        return item;
      });
      return {
        ...state,
        dataBlog: {
          ...state.dataBlog,
          data: DataTop,
        },
      };

    default:
      return state;
  }
};
