import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/list'

const [BOARD_LIST_, BOARD_LIST_SUCCESS, BOARD_LIST_FAILURE] = createRequestActionTypes('board/BOARD_LIST')
const BOARD_LIST_INITIAL = 'board/BOARD_LIST_INITIAL'

export const boardList = createAction(BOARD_LIST_, ({ category, number }) => ({ category, number }))
export const boardListInitial = createAction(BOARD_LIST_INITIAL)

export function* boardListSaga() {
  yield takeLatest(BOARD_LIST_, createRequestSaga(BOARD_LIST_, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [BOARD_LIST_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → board → [list.js] → [BOARD_LIST_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [BOARD_LIST_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → board → [list.js] → [BOARD_LIST_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [BOARD_LIST_INITIAL]: () => {
      // console.log('modules → board → [list.js] → [BOARD_LIST_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
