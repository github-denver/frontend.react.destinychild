import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/banner'

const [UPDATE, UPDATE_SUCCESS, UPDATE_FAILURE] = createRequestActionTypes('update/LIST')

export const list = createAction(UPDATE, ({ category, number }) => ({ category, number }))

export function* updateSaga() {
  yield takeLatest(UPDATE, createRequestSaga(UPDATE, api.list))
}

const initialState = {
  data: null,
  error: null
}

const update = handleActions(
  {
    [UPDATE_SUCCESS]: (state, { payload: data }) => {
      console.log('modules → banner → [list.js] → [UPDATE_SUCCESS] → data: ', data)
      console.log('')

      return {
        ...state,
        data
      }
    },
    [UPDATE_FAILURE]: (state, { payload: error }) => {
      console.log('modules → banner → [list.js] → [UPDATE_FAILURE] → error: ', error)
      console.log('')

      return {
        ...state,
        error
      }
    }
  },
  initialState
)

export default update
