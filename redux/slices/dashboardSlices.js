import { requestAdmin, get } from '../../utils/httpAdmin';
import { todoList } from '../../pages/admin/dashboard/Partials/tables';
import { getCookie } from 'cookies-next';

const initState = {
  handleJSX: {
    taskNew: 'common',
    taskBlog: 'common',
    editNew: 0,
    deleteNew: 0,
    editBlog: 0,
    deleteBlog: 0,
  },
  dataDashboard: {},
  dataTableNew: todoList,
  dataTableBlog: todoList,
};

// Actions
// Actions dataDashboard
export const addApi = (data) => {
  return {
    type: 'dataBlog/addApi',
    payload: data,
  };
};

// Actions handleJSX taskNew
export const fillterChangeNew = (taskNew) => {
  return {
    type: 'handleJSX/fillterChangeNew',
    payload: taskNew,
  };
};

// Actions dataTableNew
export const handleCheckBoxNew = (id) => {
  return {
    type: 'dataTableNew/handleCheckBoxNew',
    payload: id,
  };
};

// --------------
// Actions handleJSX taskBlog
export const fillterChangeBlog = (taskBlog) => {
  return {
    type: 'handleJSX/fillterChangeBlog',
    payload: taskBlog,
  };
};

// Actions dataTableNew
export const handleCheckBoxBlog = (id) => {
  return {
    type: 'dataTableBlog/handleCheckBoxBlog',
    payload: id,
  };
};

export const handleTextEdit = (id) => {
  return {
    type: 'handleJSX/editNew',
    payload: id,
  };
};

export const handleTextDelete = (id) => {
  return {
    type: 'handleJSX/deleteNew',
    payload: id,
  };
};

export const handleTextEditDe = () => {
  return {
    type: 'handleJSX/editDeNew',
  };
};

export const handleTextDeleteNew = (id) => {
  return {
    type: 'handleJSX/deleteBlog',
    payload: id,
  };
};

export const handleTextEditNew = (id) => {
  return {
    type: 'handleJSX/EditBlog',
    payload: id,
  };
};

// selectors
// selectors table new
export const dataTableNewSelector = (state) => {
  return state.dashboard.dataTableNew.filter((item) => item.task == state.dashboard.handleJSX.taskNew);
};

// selectors table blog
export const dataTableBlogSelector = (state) => {
  return state.dashboard.dataTableBlog.filter((item) => item.task == state.dashboard.handleJSX.taskBlog);
};

// call api
export const callApi = () => async (dispatch, getState) => {
  try {
    const userTokken = getCookie('access_token');
    console.log(requestAdmin);
    const statistic_pageApi = await get('statistic-page', userTokken);
    console.log(statistic_pageApi);
    dispatch(addApi(statistic_pageApi));
  } catch (error) {
    dispatch(addApi());
  }
};

export const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case 'dataBlog/addApi':
      return {
        ...state,
        dataDashboard: action.payload,
      };

    // Reducer new
    case 'handleJSX/fillterChangeNew':
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          taskNew: action.payload,
        },
      };

    case 'dataTableNew/handleCheckBoxNew':
      const dataTableNewCompleted = state.dataTableNew.map((item) => {
        if (item.id == action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return {
        ...state,
        dataTableNew: dataTableNewCompleted,
      };

    // -------------------
    // Reducer blog
    case 'handleJSX/fillterChangeBlog':
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          taskBlog: action.payload,
        },
      };

    case 'dataTableBlog/handleCheckBoxBlog':
      const dataTableBlogCompleted = state.dataTableBlog.map((item) => {
        if (item.id == action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return {
        ...state,
        dataTableBlog: dataTableBlogCompleted,
      };

    case 'handleJSX/editNew':
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          editNew: action.payload,
        },
      };

    case 'handleJSX/deleteNew':
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          deleteNew: action.payload,
        },
      };

    case 'handleJSX/editDeNew':
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          editNew: 0,
          deleteNew: 0,
          editBlog: 0,
          deleteBlog: 0,
        },
      };

    case 'handleJSX/deleteBlog':
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          deleteBlog: action.payload,
        },
      };

    case 'handleJSX/EditBlog':
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          editBlog: action.payload,
        },
      };

    default:
      return state;
  }
};
