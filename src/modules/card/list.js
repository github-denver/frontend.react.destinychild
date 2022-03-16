import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/card'

const INITIAL = 'card/LIST/INITIAL'
const LIST = 'card/LIST'
const SUCCESS = 'card/LIST/SUCCESS'
const FAILURE = 'card/LIST/FAILURE'

export const cardListInitial = () => ({ type: INITIAL })
export const cardList = (payload) => ({ type: LIST, payload })

export function* cardListSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

function card(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        data: action.payload
      }

    case FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case INITIAL:
      return {
        ...initialState
      }

    default:
      return state
  }
}

export default card
