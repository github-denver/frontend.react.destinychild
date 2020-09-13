import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/banner'

const [EVENT, EVENT_SUCCESS, EVENT_FAILURE] = createRequestActionTypes('event/EVENT_LIST')
const EVENT_LIST_INITIAL = 'event/EVENT_LIST_INITIAL'

export const eventList = createAction(EVENT, ({ category, number }) => ({ category, number }))
export const eventListInitial = createAction(EVENT_LIST_INITIAL)

export function* eventListSaga() {
  yield takeLatest(EVENT, createRequestSaga(EVENT, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [EVENT_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → banner → [event.js] → [EVENT_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [EVENT_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → banner → [event.js] → [EVENT_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [EVENT_LIST_INITIAL]: () => {
      // console.log('modules → banner → [event.js] → [EVENT_LIST_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
