import { getCookie } from 'cookies-next';
import { requestAdmin, get } from '../../utils/httpAdmin';

const initialState = {
  loading: false,
  list: [],
};

// action

export const GetApiContact =
  (page = 1) =>
  async (dispatch) => {
    try {
      const userTokken = getCookie('access_token');
      dispatch({ type: 'CHECK_LOAD_API' });
      const result = await get('list-contact', userTokken, {
        page,
      });
      dispatch({ type: 'LOAD_API_FINISH', payload: result });
    } catch {
      console.log('error');
    }
  };

// reduce

export const ReduceContact = (state = initialState, action) => {
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
