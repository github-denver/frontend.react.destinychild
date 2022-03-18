import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/banner'

const INITIAL = 'update/LIST/INITIAL'
const LIST = 'update/LIST'
const SUCCESS = 'update/LIST/SUCCESS'
const FAILURE = 'update/LIST/FAILURE'

export const updateListInitial = () => ({ type: INITIAL })
export const updateList = (category) => ({ type: LIST, payload: category })

export function* updateListSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

function update(state = initialState, action) {
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

export default update
