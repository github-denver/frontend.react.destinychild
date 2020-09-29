import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/child'

const [CHILD_READ, CHILD_SUCCESS, CHILD_FAILURE] = createRequestActionTypes('child/CHILD_READ')
const CHILD_READ_INITIAL = 'child/CHILD_READ_INITIAL'

export const childRead = createAction(CHILD_READ, ({ category, number }) => ({ category, number }))
export const childReadInitial = createAction(CHILD_READ_INITIAL)

export function* childReadSaga() {
  yield takeLatest(CHILD_READ, createRequestSaga(CHILD_READ, api.read))
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
    [CHILD_READ_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
