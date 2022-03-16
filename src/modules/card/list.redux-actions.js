import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/card'

const [CARD_LIST, CARD_SUCCESS, CARD_FAILURE] = createRequestActionTypes('card/CARD_LIST')
const CARD_LIST_INITIAL = 'card/CARD_LIST_INITIAL'

export const cardList = createAction(CARD_LIST, ({ category, number, select, keyword }) => ({ category, number, select, keyword }))
export const cardListInitial = createAction(CARD_LIST_INITIAL)

export function* cardListSaga() {
  yield takeLatest(CARD_LIST, createRequestSaga(CARD_LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [CARD_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [CARD_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [CARD_LIST_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
