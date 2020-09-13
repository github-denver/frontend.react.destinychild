import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/child'

const [CHILD, CHILD_SUCCESS, CHILD_FAILURE] = createRequestActionTypes('child/CHILD_LIST')
const CHILD_LIST_INITIAL = 'child/CHILD_LIST_INITIAL'

export const childList = createAction(CHILD, ({ category, number }) => ({ category, number }))
export const childListInitial = createAction(CHILD_LIST_INITIAL)

export function* childListSaga() {
  yield takeLatest(CHILD, createRequestSaga(CHILD, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [CHILD_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → child → [list.js] → [CHILD_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [CHILD_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → child → [list.js] → [CHILD_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [CHILD_LIST_INITIAL]: () => {
      // console.log('modules → child → [list.js] → [CHILD_LIST_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
