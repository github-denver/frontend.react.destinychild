import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/banner'

const [EVENT_LIST, EVENT_SUCCESS, EVENT_FAILURE] = createRequestActionTypes('event/EVENT_LIST')
const EVENT_LIST_INITIAL = 'event/EVENT_LIST_INITIAL'

export const eventList = createAction(EVENT_LIST, ({ category, number }) => ({ category, number }))
export const eventListInitial = createAction(EVENT_LIST_INITIAL)

export function* eventListSaga() {
  yield takeLatest(EVENT_LIST, createRequestSaga(EVENT_LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [EVENT_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [EVENT_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [EVENT_LIST_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
