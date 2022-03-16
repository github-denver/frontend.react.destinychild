import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/list'

const INITIAL = 'board/LIST/INITIAL'
const LIST = 'board/LIST'
const SUCCESS = 'board/LIST/SUCCESS'
const FAILURE = 'board/LIST/FAILURE'

export const boardListInitial = () => ({ type: INITIAL })
export const boardList = (payload) => ({ type: LIST, payload })

export function* boardListSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

function board(state = initialState, action) {
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

export default board
