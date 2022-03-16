import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/child'

const INITIAL = 'child/LIST/INITIAL'
const LIST = 'child/LIST'
const SUCCESS = 'child/LIST/SUCCESS'
const FAILURE = 'child/LIST/FAILURE'

export const childListInitial = () => ({ type: INITIAL })
export const childList = (payload) => ({ type: LIST, payload })

export function* childListSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

function child(state = initialState, action) {
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

export default child
