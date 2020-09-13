import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/hero'

const [HERO, HERO_SUCCESS, HERO_FAILURE] = createRequestActionTypes('hero/HERO_LIST')
const HERO_LIST_INITIAL = 'hero/HERO_LIST_INITIAL'

export const heroList = createAction(HERO, ({ category }) => ({ category }))
export const heroListInitial = createAction(HERO_LIST_INITIAL)

export function* heroListSaga() {
  yield takeLatest(HERO, createRequestSaga(HERO, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [HERO_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → hero → [list.js] → [HERO_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [HERO_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → hero → [list.js] → [HERO_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [HERO_LIST_INITIAL]: () => {
      // console.log('modules → hero → [list.js] → [HERO_LIST_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
