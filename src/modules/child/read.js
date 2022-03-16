import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/child'

const INITIAL = 'child/READ/INITIAL'
const READ = 'child/READ'
const SUCCESS = 'child/READ/SUCCESS'
const FAILURE = 'child/READ/FAILURE'

export const childReadInitial = () => ({ type: INITIAL })
export const childRead = (payload) => ({ type: READ, payload })

export function* childReadSaga() {
  yield takeLatest(READ, createRequestSaga(READ, api.read))
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
