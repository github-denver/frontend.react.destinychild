import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/list'

const [GUIDE_LIST, GUIDE_SUCCESS, GUIDE_FAILURE] = createRequestActionTypes('guide/GUIDE_LIST')
const GUIDE_LIST_INITIAL = 'guide/GUIDE_LIST_INITIAL'

export const guideList = createAction(GUIDE_LIST, ({ category, number }) => ({ category, number }))
export const guideListInitial = createAction(GUIDE_LIST_INITIAL)

export function* guideListSaga() {
  yield takeLatest(GUIDE_LIST, createRequestSaga(GUIDE_LIST, api.list))
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
    [GUIDE_LIST_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
