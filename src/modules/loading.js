import { createAction, handleActions } from 'redux-actions'

const LOADING_START = 'loading/LOADING_START'
const LOADING_FINISH = 'loading/LOADING_FINISH'

export const loadingStart = createAction(LOADING_START, (request) => request)
export const loadingFinish = createAction(LOADING_FINISH, (request) => request)

const initialState = {}

const loading = handleActions(
  {
    [LOADING_START]: (state, action) => {
      // console.log('modules → [loading.js] → state: ', state)
      // console.log('modules → [loading.js] → action: ', action)
      // console.log('')

      return {
        ...state,
        [action.payload]: true
      }
    },
    [LOADING_FINISH]: (state, action) => {
      // console.log('modules → [loading.js] → state: ', state)
      // console.log('modules → [loading.js] → action: ', action)
      // console.log('')

      return {
        ...state,
        [action.payload]: false
      }
    }
  },
  initialState
)

export default loading
