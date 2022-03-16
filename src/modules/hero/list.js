import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/hero'

const INITIAL = 'hero/LIST/INITIAL'
const LIST = 'hero/LIST'
const SUCCESS = 'hero/LIST/SUCCESS'
const FAILURE = 'hero/LIST/FAILURE'

export const heroListInitial = () => ({ type: INITIAL })
export const heroList = (category) => ({ type: LIST, payload: category })

export function* heroListSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

function hero(state = initialState, action) {
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

export default hero
