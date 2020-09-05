import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const [READ, READ_SUCCESS, READ_FAILURE] = createRequestActionTypes('board/READ')

export const read = createAction(READ, ({ category, number }) => ({ category, number }))

// const readSaga = createRequestSaga(READ, api.read)

export function* readSaga() {
  yield takeLatest(READ, createRequestSaga(READ, api.read))
}

const initialState = {
  data: null,
  error: null
}

const board = handleActions(
  {
    [READ_SUCCESS]: (state, { payload: data }) => {
      console.log('modules → board → [read.js] → [READ_SUCCESS] → data: ', data)
      console.log('')

      return {
        ...state,
        data
      }
    },
    [READ_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → board → [read.js] → [READ_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    }
  },
  initialState
)

export default board
