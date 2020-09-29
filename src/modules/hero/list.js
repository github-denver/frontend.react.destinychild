import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/hero'

const [HERO_LIST, HERO_SUCCESS, HERO_FAILURE] = createRequestActionTypes('hero/HERO_LIST')
const HERO_LIST_INITIAL = 'hero/HERO_LIST_INITIAL'

export const heroList = createAction(HERO_LIST, ({ category }) => ({ category }))
export const heroListInitial = createAction(HERO_LIST_INITIAL)

export function* heroListSaga() {
  yield takeLatest(HERO_LIST, createRequestSaga(HERO_LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [HERO_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [HERO_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [HERO_LIST_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
