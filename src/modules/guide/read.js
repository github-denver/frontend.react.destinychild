import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/read'

const INITIAL = 'guide/READ/INITIAL'
const READ = 'guide/READ'
const SUCCESS = 'guide/READ/SUCCESS'
const FAILURE = 'guide/READ/FAILURE'

export const guideReadInitial = () => ({ type: INITIAL })
export const guideRead = (payload) => ({ type: READ, payload })

export function* guideReadSaga() {
  yield takeLatest(READ, createRequestSaga(READ, api.read))
}

const initialState = {
  data: null,
  error: null
}

function guide(state = initialState, action) {
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

export default guide
