import { setCookie } from 'cookies-next';

import { post } from '../../utils/httpAdmin';

const initState = {
  handleJSX: {
    wrongPassword: false,
  },
  access_token: '',
};

export const AllLogin = (data) => {
  return {
    type: 'access_token',
    payload: data,
  };
};

export const logout = () => {
  return {
    type: 'delete_access_token',
  };
};

export const wrongPassword = (TF) => {
  return {
    type: 'wrongPassword',
    payload: TF,
  };
};

// // call api
export const login = (data) => async (dispatch, getState) => {
  try {
    const loginApi = await post(
      'login',
      {},
      {
        email: data.firstEmail,
        password: data.firstPassword,
      },
    );
    dispatch(AllLogin(loginApi));
  } catch (error) {
    dispatch(wrongPassword(true));
  }
};

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case 'access_token':
      setCookie('access_token', action.payload?.access_token);
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          wrongPassword: false,
        },
        access_token: action.payload?.access_token,
      };

    case 'delete_access_token':
      return {
        ...state,
        access_token: '',
      };

    case 'wrongPassword':
      return {
        ...state,
        handleJSX: {
          ...state.handleJSX,
          wrongPassword: true,
        },
      };

    default:
      return state;
  }
};
