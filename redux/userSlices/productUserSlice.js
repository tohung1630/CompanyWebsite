import { requestUser } from "../../utils/httpUser"

//  INITIAL STATE
const initState = {
  data: {},
  loading: true,
  error: {},
  currentPage: 1,
  currentId: 0,
  isOpenModal: false,
  status: 0,
}

// ACTIONS TYPE
const actionType = Object.freeze({
  setData: "userProduct/setData",
  setLoading: "userProduct/setLoading",
  setError: "userProduct/setError",
  setCurrentPage: "userProduct/setCurrentPage",
  setCurrentId: "userProduct/setCurrentId",
  setModalOpen: "userProduct/setModal",
  setStatus: "userProduct/setStatus",
})

//ACTIONS
export const setData = (data) => ({ type: actionType.setData, payload: data })

export const setLoading = (data) => ({ type: actionType.setLoading, payload: data })

export const setError = (data) => ({ type: actionType.setError, payload: data })

export const setCurrentPage = (data) => ({ type: actionType.setCurrentPage, payload: data })

export const setCurrentId = (data) => ({ type: actionType.setCurrentId, payload: data })

export const setOpenModal = (data) => ({ type: actionType.setModalOpen, paylaod: data })

export const setStatus = (data) => ({ type: actionType.setStatus, payload: data })

//THUNK ACTIONS
export const getUserProducts = () => async (dispatch, getState) => {
  const state = getState().userProduct
  try {
    dispatch(setLoading(true))
    const data = await requestUser.get("works", {
      params: {
        per_page: 12,
        page: state.currentPage,
        type: state.status === 0 ? "" : state.status
      }
    })
    dispatch(setData(data))
  } catch (error) {
    dispatch(setError(error))
  } finally {
    dispatch(setLoading(false))
  }
}

//REDUCER
export const userProductReducer = (state = initState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case actionType.setData:
      newState.data = action.payload
      return newState
    case actionType.setLoading:
      newState.loading = action.payload
      return newState
    case actionType.setError:
      newState.error = action.payload
      return newState
    case actionType.setCurrentPage:
      newState.currentPage = action.payload
      return newState
    case actionType.setCurrentId:
      newState.currentId = action.payload
      return newState
    case actionType.setOpenModal:
      newState.isOpenModal = action.payload
      return newState
    case actionType.setStatus:
      newState.status = action.payload
      return newState
    default:
      return state
  }
}