import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const [GUIDE_READ, GUIDE_SUCCESS, GUIDE_FAILURE] = createRequestActionTypes('guide/GUIDE_READ')
const GUIDE_READ_INITIAL = 'guide/GUIDE_READ_INITIAL'

export const guideRead = createAction(GUIDE_READ, ({ category, number }) => ({ category, number }))
export const guideReadInitial = createAction(GUIDE_READ_INITIAL)

export function* guideReadSaga() {
  yield takeLatest(GUIDE_READ, createRequestSaga(GUIDE_READ, api.read))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [GUIDE_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [GUIDE_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [GUIDE_READ_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
