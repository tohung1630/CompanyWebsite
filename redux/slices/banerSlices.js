import { Select } from 'antd';
import { requestAdmin } from '../../utils/httpAdmin';

const option = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 1,
    label: 1,
  },

  {
    value: 2,
    label: 2,
  },

  {
    value: 3,
    label: 3,
  },
  {
    value: 4,
    label: 4,
  },
];

//INITIAL STATE
const initState = {
  data: [],
  editData: {},
  currentData: [],
  loading: true,
  error: '',
  sortOrder: '',
  searchString: '',
  currentPage: 1,
};

//ACTION TYPE
const actionType = Object.freeze({
  setData: 'banner/setData',
  setCurrentData: 'banner/setCurrentData',
  setEditData: 'banner/setEditData',
  setLoading: 'banner/setLoading',
  setError: 'banner/setError',
  setSortOrder: 'banner/setSortOrder',
  setSearchString: 'banner/setSearchString',
  setCurrentPage: 'banner/setCurrentPage',
});

//ACTION
export const setData = (data) => ({ type: actionType.setData, payload: data });

export const setCurrentData = (data) => ({ type: actionType.setCurrentData, payload: data });

export const setEditData = (data) => ({ type: actionType.setEditData, payload: data });

export const setLoading = (data) => ({ type: actionType.setLoading, payload: data });

export const setError = (data) => ({ type: actionType.setError, payload: data });

export const setSortOrder = (data) => ({ type: actionType.setSortOrder, payload: data });

export const setSearchString = (data) => ({ type: actionType.setSearchString, payload: data });

export const setCurrentPage = (data) => ({ type: actionType.setCurrentPage, payload: data });

//THUNK ACTION
export const getData =
  (dataOrder = { search: '', sort: '', page: 1 }) =>
  async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const data = await requestAdmin.get('banner',{
        params: {
          title: dataOrder.search,
          sort: dataOrder.sort === 'none' ? '' : dataOrder.sort,
          page: dataOrder.page,
        },
      });
      dispatch(setData(data));
      dispatch(
        setCurrentData(
          data.data.data.map((item) => ({
            id: item.id,
            banner: '',
            api: item.lang,
            created_at: item.created_at.slice(0, 10),
            status: item.status ? 'Public' : 'private',
            Numerical_Order: (
              <Select
                defaultValue={item.numerical_order ? item.numerical_order : 0}
                style={{
                  width: 130,
                }}
                options={option}
              />
            ),
          })),
        ),
      );
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };

  export const updateBanner = (editData) => async (dispatch) => {
    console.log(editData)
    try {
      dispatch(setLoading(true))
      await requestAdmin.postForm(`banner/${editData.id}`, editData.data)
    } catch (error) {
      dispatch(setError(error))
      console.log([...error.config.data])
    } finally {
      dispatch(setLoading(false))
    }
  }
  
  export const createBanner = (addData) => async (dispatch) => {
    try {
      await requestAdmin.postForm("banner", addData)
    } catch (error) {
      setError(error)
    }
  }
  
  export const deleteBanner = (id) => async (dispatch) => {
    try {
      await requestAdmin.delete(`banner/${id}`)
      dispatch(getData())
    } catch (error) {
      setError(error)
    }
  }

  export const getEditData = (id) => async (dispatch, getState) => {
    try {
      dispatch(setLoading(true))
      const data = await requestAdmin.get(`banner/${id}`)
      dispatch(setData(data))
    } catch (error) {
      dispatch(setError)
    } finally {
      dispatch(setError)
    }
  }

//REDUCER
export const bannerReducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionType.setData:
      newState.data = action.payload;
      return newState;
    case actionType.setCurrentData:
      newState.currentData = action.payload;
      return newState;
    case actionType.setEditData:
      newState.editData = action.payload;
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
