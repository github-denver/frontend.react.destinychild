import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/banner'

const [UPDATE, UPDATE_SUCCESS, UPDATE_FAILURE] = createRequestActionTypes('update/UPDATE_LIST')
const UPDATE_LIST_INITIAL = 'update/UPDATE_LIST_INITIAL'

export const updateList = createAction(UPDATE, ({ category, number }) => ({ category, number }))
export const updateListInitial = createAction(UPDATE_LIST_INITIAL)

export function* updateListSaga() {
  yield takeLatest(UPDATE, createRequestSaga(UPDATE, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [UPDATE_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → banner → [update.js] → [UPDATE_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [UPDATE_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → banner → [update.js] → [UPDATE_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [UPDATE_LIST_INITIAL]: () => {
      // console.log('modules → banner → [update.js] → [UPDATE_LIST_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
