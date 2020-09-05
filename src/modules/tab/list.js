import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/tab'

const [TAB, TAB_SUCCESS, TAB_FAILURE] = createRequestActionTypes('tab/TAB')

export const list = createAction(TAB, ({ category, number }) => ({ category, number }))

// const tabSaga = createRequestSaga(TAB, api.list)

export function* tabSaga() {
  yield takeLatest(TAB, createRequestSaga(TAB, api.list))
}

const initialState = {
  data: null,
  error: null
}

const tab = handleActions(
  {
    [TAB_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → tab → [list.js] → [TAB_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [TAB_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → tab → [list.js] → [TAB_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    }
  },
  initialState
)

export default tab
