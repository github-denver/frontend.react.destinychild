import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/card'

const [CARD, CARD_SUCCESS, CARD_FAILURE] = createRequestActionTypes('card/CARD')

export const list = createAction(CARD, ({ category, number }) => ({ category, number }))

// const cardSaga = createRequestSaga(CARD, api.list)

export function* cardSaga() {
  yield takeLatest(CARD, createRequestSaga(CARD, api.list))
}

const initialState = {
  data: null,
  error: null
}

const card = handleActions(
  {
    [CARD_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → card → [list.js] → [CARD_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [CARD_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → card → [list.js] → [CARD_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    }
  },
  initialState
)

export default card
