import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/hero'

const [VISUAL_LIST, VISUAL_SUCCESS, VISUAL_FAILURE] = createRequestActionTypes('visual/VISUAL_LIST')
const VISUAL_LIST_INITIAL = 'visual/VISUAL_LIST_INITIAL'

export const visualList = createAction(VISUAL_LIST, ({ category, number }) => ({ category, number }))
export const visualListInitial = createAction(VISUAL_LIST_INITIAL)

export function* visualListSaga() {
  yield takeLatest(VISUAL_LIST, createRequestSaga(VISUAL_LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [VISUAL_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [VISUAL_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [VISUAL_LIST_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
