import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/tab'

const INITIAL = 'tab/LIST/INITIAL'
const LIST = 'tab/LIST'
const SUCCESS = 'tab/LIST/SUCCESS'
const FAILURE = 'tab/LIST/FAILURE'

export const tabListInitial = () => ({ type: INITIAL })
export const tabList = (payload) => ({ type: LIST, payload })

export function* tabListSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

function tab(state = initialState, action) {
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

export default tab
