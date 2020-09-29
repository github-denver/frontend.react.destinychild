import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/child'

const [CHILD_LIST, CHILD_SUCCESS, CHILD_FAILURE] = createRequestActionTypes('child/CHILD_LIST')
const CHILD_LIST_INITIAL = 'child/CHILD_LIST_INITIAL'

export const childList = createAction(CHILD_LIST, ({ category, number }) => ({ category, number }))
export const childListInitial = createAction(CHILD_LIST_INITIAL)

export function* childListSaga() {
  yield takeLatest(CHILD_LIST, createRequestSaga(CHILD_LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [CHILD_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [CHILD_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [CHILD_LIST_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
