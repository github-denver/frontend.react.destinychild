import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/banner'

const INITIAL = 'event/LIST/INITIAL'
const LIST = 'event/LIST'
const SUCCESS = 'event/LIST/SUCCESS'
const FAILURE = 'event/LIST/FAILURE'

export const eventListInitial = () => ({ type: INITIAL })
export const eventList = (category) => ({ type: LIST, payload: category })

export function* eventListSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

function event(state = initialState, action) {
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

export default event
