import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/tab'

const [TAB_LIST, TAB_SUCCESS, TAB_FAILURE] = createRequestActionTypes('tab/TAB_LIST')
const TAB_LIST_INITIAL = 'tab/TAB_LIST_INITIAL'

export const tabList = createAction(TAB_LIST, ({ category, number }) => ({ category, number }))
export const tabListInitial = createAction(TAB_LIST_INITIAL)

export function* tabListSaga() {
  yield takeLatest(TAB_LIST, createRequestSaga(TAB_LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [TAB_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [TAB_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [TAB_LIST_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
