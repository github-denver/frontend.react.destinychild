import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/hero'

const INITIAL = 'visual/LIST/INITIAL'
const LIST = 'visual/LIST'
const SUCCESS = 'visual/LIST/SUCCESS'
const FAILURE = 'visual/LIST/FAILURE'

export const visualListInitial = () => ({ type: INITIAL })
export const visualList = (payload) => ({ type: LIST, payload })

export function* visualListSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

function visual(state = initialState, action) {
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

export default visual
