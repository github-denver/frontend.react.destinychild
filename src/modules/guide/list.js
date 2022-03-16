import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/list'

const INITIAL = 'guide/LIST/INITIAL'
const LIST = 'guide/LIST'
const SUCCESS = 'guide/LIST/SUCCESS'
const FAILURE = 'guide/LIST/FAILURE'

export const guideListInitial = () => ({ type: INITIAL })
export const guideList = (payload) => ({ type: LIST, payload })

export function* guideListSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
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
