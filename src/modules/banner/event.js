import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/banner'

const [EVENT, EVENT_SUCCESS, EVENT_FAILURE] = createRequestActionTypes('event/LIST')

export const list = createAction(EVENT, ({ category, number }) => ({ category, number }))

export function* eventSaga() {
  yield takeLatest(EVENT, createRequestSaga(EVENT, api.list))
}

const initialState = {
  data: null,
  error: null
}

const event = handleActions(
  {
    [EVENT_SUCCESS]: (state, { payload: data }) => {
      console.log('modules → banner → [list.js] → [EVENT_SUCCESS] → data: ', data)
      console.log('')

      return {
        ...state,
        data
      }
    },
    [EVENT_FAILURE]: (state, { payload: error }) => {
      console.log('modules → banner → [list.js] → [EVENT_FAILURE] → error: ', error)
      console.log('')

      return {
        ...state,
        error
      }
    }
  },
  initialState
)

export default event
