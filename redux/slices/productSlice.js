import { getCookie } from 'cookies-next';
import { get, post, deletes } from '../../utils/httpAdmin';

//INITIAL STATE
const initState = {
  data: {},
  loading: true,
  error: {},
  sortOrder: '',
  searchString: '',
  currentPage: 1,
};

//ACTION TYPE
const actionType = Object.freeze({
  setData: 'product/setData',
  setEditData: 'product/setEditData',
  setLoading: 'product/setLoading',
  setError: 'product/setError',
  setSortOrder: 'product/setSortOrder',
  setSearchString: 'product/setSearchString',
  setCurrentPage: 'product/setCurrentPage',
});

//ACTION
export const setData = (data) => ({ type: actionType.setData, payload: data });

export const setLoading = (data) => ({ type: actionType.setLoading, payload: data });

export const setError = (data) => ({ type: actionType.setError, payload: data });

export const setSortOrder = (data) => ({ type: actionType.setSortOrder, payload: data });

export const setSearchString = (data) => ({ type: actionType.setSearchString, payload: data });

export const setCurrentPage = (data) => ({ type: actionType.setCurrentPage, payload: data });

//THUNK ACTION
export const getData =
  (dataOrder = { search: '', sort: '', page: 1 }) =>
  async (dispatch) => {
    try {
      const userTokken = getCookie('access_token');
      dispatch(setLoading(true));
      const data = await get('works', userTokken, {
        title: dataOrder.search,
        sort: dataOrder.sort === 'none' ? '' : dataOrder.sort,
        page: dataOrder.page,
      });
      dispatch(setData(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const getEditData = (id) => async (dispatch) => {
  try {
    const userTokken = getCookie('access_token');
    dispatch(setLoading(true));
    const data = await get(`works/${id}`, userTokken);
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateProduct = (editData) => async (dispatch) => {
  try {
    const userTokken = getCookie('access_token');
    dispatch(setLoading(true));
    const formData = new FormData();
    formData.append('title', editData.data.title);
    formData.append('desc', editData.data.desc);
    formData.append('content', editData.data.content);
    formData.append('lang', editData.data.lang);
    editData.data.technology.map((item) => formData.append('technology[]', item));
    editData.data.tags.map((item) => formData.append('tags[]', item));
    formData.append('type_of_contract', editData.data.type_of_contract);
    formData.append('team_structure', editData.data.team_structure);
    editData.data.responsible_content.map((item) => formData.append('responsible_content[]', item));
    formData.append('type', editData.data.type);
    formData.append('_method', editData.data._method);
    editData.data.images.map((item) => formData.append('images[]', item));

    await post(`works/${editData.id}`, userTokken, formData);
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const createProduct = (addData) => async (dispatch) => {
  try {
    const userTokken = getCookie('access_token');
    dispatch(setLoading(true));
    const formData = new FormData();
    formData.append('title', addData.title);
    formData.append('desc', addData.desc);
    formData.append('content', addData.content);
    formData.append('lang', addData.lang);
    addData.technology.map((item) => formData.append('technology[]', item));
    addData.tags.map((item) => formData.append('tags[]', item));
    formData.append('type_of_contract', addData.type_of_contract);
    formData.append('team_structure', addData.team_structure);
    addData.responsible_content.map((item) => formData.append('responsible_content[]', item));
    formData.append('type', addData.type);
    addData.images.map((item) => formData.append('images[]', item));

    await post('works', userTokken, formData);
  } catch (error) {
    dispatch(setError(error));
  }
};

export const DeleteProduct = (id) => async (dispatch) => {
  try {
    const userTokken = getCookie('access_token');
    await deletes(`works/${id}`, userTokken);
    dispatch(getData());
  } catch (error) {
    dispatch(setError(error));
  }
};

//REDUCER
export const productReducer = (state = initState, action) => {
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
    case actionType.setSearchString:
      newState.searchString = action.payload;
      return newState;
    case actionType.setSortOrder:
      newState.sortOrder = action.payload;
      return newState;
    case actionType.setCurrentPage:
      newState.currentPage = action.payload;
      return newState;
    default:
      return state;
  }
};
