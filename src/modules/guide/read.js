import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const [GUIDE, GUIDE_SUCCESS, GUIDE_FAILURE] = createRequestActionTypes('guide/GUIDE_READ')
const GUIDE_READ_INITIAL = 'guide/GUIDE_READ_INITIAL'

export const guideRead = createAction(GUIDE, ({ category, number }) => ({ category, number }))
export const guideReadInitial = createAction(GUIDE_READ_INITIAL)

export function* guideReadSaga() {
  yield takeLatest(GUIDE, createRequestSaga(GUIDE, api.read))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [GUIDE_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → guide → [read.js] → [GUIDE_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [GUIDE_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → guide → [read.js] → [GUIDE_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [GUIDE_READ_INITIAL]: () => {
      // console.log('modules → guide → [read.js] → [GUIDE_READ_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
