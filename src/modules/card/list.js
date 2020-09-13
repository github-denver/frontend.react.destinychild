import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/card'

const [CARD, CARD_SUCCESS, CARD_FAILURE] = createRequestActionTypes('card/CARD_LIST')
const CARD_LIST_INITIAL = 'card/CARD_LIST_INITIAL'

export const cardList = createAction(CARD, ({ category, number }) => ({ category, number }))
export const cardListInitial = createAction(CARD_LIST_INITIAL)

export function* cardListSaga() {
  yield takeLatest(CARD, createRequestSaga(CARD, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
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
    },
    [CARD_LIST_INITIAL]: () => {
      // console.log('modules → card → [list.js] → [CARD_LIST_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
