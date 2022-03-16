import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const INITIAL = 'board/READ/INITIAL'
const READ = 'board/READ'
const SUCCESS = 'board/READ/SUCCESS'
const FAILURE = 'board/READ/FAILURE'

export const boardReadInitial = () => {
  return {
    type: INITIAL
  }
}
export const boardRead = (payload) => {
  return {
    type: READ,
    payload
  }
}

export function* boardReadSaga() {
  yield takeLatest(READ, createRequestSaga(READ, api.read))
}

const initialState = {
  data: null,
  error: null
}

function read(state = initialState, action) {
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

export default read
