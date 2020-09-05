import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/list'

const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes('board/LIST')

export const list = createAction(LIST, ({ category, number }) => ({ category, number }))

// const listSaga = createRequestSaga(LIST, api.list)

export function* listSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

const board = handleActions(
  {
    [LIST_SUCCESS]: (state, { payload: data }) => {
      console.log('modules → board → [list.js] → [LIST_SUCCESS] → data: ', data)
      console.log('')

      return {
        ...state,
        data
      }
    },
    [LIST_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → board → [list.js] → [LIST_FAILURE] → error: ', error)
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
