import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const [BOARD_READ, BOARD_READ_SUCCESS, BOARD_READ_FAILURE] = createRequestActionTypes('board/BOARD_READ')
const BOARD_READ_INITIAL = 'board/BOARD_READ_INITIAL'

export const boardRead = createAction(BOARD_READ, ({ category, number }) => ({ category, number }))
export const boardReadInitial = createAction(BOARD_READ_INITIAL)

export function* boardReadSaga() {
  yield takeLatest(BOARD_READ, createRequestSaga(BOARD_READ, api.read))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [BOARD_READ_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [BOARD_READ_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [BOARD_READ_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
