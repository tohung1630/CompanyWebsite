import { requestAdmin } from '../../utils/httpAdmin';

const initialState = {
  loading: false,
  list: [],
};

// action

export const GetDataStaticPage = () => async (dispatch) => {
  try {
    dispatch({ type: 'CHECK_LOAD_API' });

    const result = await requestAdmin.get('static-page');

    dispatch({ type: 'LOAD_API_FINISH', payload: result.data });
  } catch {
    console.log('error');
  }
};

// reduce

export const ReduceStaticPage = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_LOAD_API': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'LOAD_API_FINISH': {
      const newList = action.payload;
      return {
        ...state,
        loading: false,
        list: newList,
      };
    }

    default:
      return state;
  }
};
