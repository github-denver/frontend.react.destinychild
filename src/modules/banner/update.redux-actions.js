import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/banner'

const [UPDATE_LIST, UPDATE_SUCCESS, UPDATE_FAILURE] = createRequestActionTypes('update/UPDATE_LIST')
const UPDATE_LIST_INITIAL = 'update/UPDATE_LIST_INITIAL'

export const updateList = createAction(UPDATE_LIST, ({ category, number }) => ({ category, number }))
export const updateListInitial = createAction(UPDATE_LIST_INITIAL)

export function* updateListSaga() {
  yield takeLatest(UPDATE_LIST, createRequestSaga(UPDATE_LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [UPDATE_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [UPDATE_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [UPDATE_LIST_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
