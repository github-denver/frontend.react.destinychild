import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/child'

const [CHILD, CHILD_SUCCESS, CHILD_FAILURE] = createRequestActionTypes('child/CHILD_READ')
const CHILD_READ_INITIAL = 'child/CHILD_READ_INITIAL'

export const childRead = createAction(CHILD, ({ category, number }) => ({ category, number }))
export const childReadInitial = createAction(CHILD_READ_INITIAL)

export function* childReadSaga() {
  yield takeLatest(CHILD, createRequestSaga(CHILD, api.read))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [CHILD_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → child → [read.js] → [CHILD_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [CHILD_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → child → [read.js] → [CHILD_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [CHILD_READ_INITIAL]: () => {
      // console.log('modules → child → [read.js] → [CHILD_READ_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
