import { createAction, handleActions } from 'redux-actions'

const LOADING_START = 'loading/LOADING_START'
const LOADING_FINISH = 'loading/LOADING_FINISH'

export const loadingStart = createAction(LOADING_START, (request) => request)
export const loadingFinish = createAction(LOADING_FINISH, (request) => request)

const initialState = {}

const loading = handleActions(
  {
    [LOADING_START]: (state, action) => {
      return {
        ...state,
        [action.payload]: true
      }
    },
    [LOADING_FINISH]: (state, action) => {
      return {
        ...state,
        [action.payload]: false
      }
    }
  },
  initialState
)

export default loading
