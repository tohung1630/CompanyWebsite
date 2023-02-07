import { requestAdmin } from '../../utils/httpAdmin';

// INITIAL STATE
const initState = {
  error: {},
  privacyPolicy: false,
  requiredPrivacyPolicy: true,
  loading: false,
};

// ACTION TYPE
const actionType = Object.freeze({
  setError: 'userContact/setError',
  setPrivacyPolicy: 'userContact/setPrivacyPolicy',
  setRequiredPrivacy: 'userContact/setRequiredPrivacy',
  setLoading: 'userContact/setLoading',
});

// ACTION
export const setError = (data) => ({ type: actionType.setError, payload: data });

export const setPrivacyPolicy = (data) => ({ type: actionType.setPrivacyPolicy, payload: data });

export const setRequiredPrivacy = (data) => ({ type: actionType.setRequiredPrivacy, payload: data });

export const setLoading = (data) => ({ type: actionType.setLoading, payload: data });

// THUNK ACTION
export const postContact = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await requestAdmin.postForm('contact', data);
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

// REDUCER
export const userContactReducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionType.setError:
      newState.error = action.payload;
      return newState;
    case actionType.setPrivacyPolicy:
      newState.privacyPolicy = action.payload;
      return newState;
    case actionType.setRequiredPrivacy:
      newState.requiredPrivacyPolicy = action.payload;
      return newState;
    case actionType.setLoading:
      newState.loading = action.payload;
      return newState;
    default:
      return state;
  }
};
