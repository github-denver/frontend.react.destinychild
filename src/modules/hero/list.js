import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/hero'

const [HERO, HERO_SUCCESS, HERO_FAILURE] = createRequestActionTypes('hero/HERO')

export const list = createAction(HERO, ({ category, number }) => ({ category, number }))

// const heroSaga = createRequestSaga(HERO, api.list)

export function* heroSaga() {
  yield takeLatest(HERO, createRequestSaga(HERO, api.list))
}

const initialState = {
  data: null,
  error: null
}

const hero = handleActions(
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
    }
  },
  initialState
)

export default hero
