import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/media'

const INITIAL = 'media/LIST/INITIAL'
const LIST = 'media/LIST'
const SUCCESS = 'media/LIST/SUCCESS'
const FAILURE = 'media/LIST/FAILURE'

export const mediaListInitial = () => ({ type: INITIAL })
export const mediaList = (payload) => ({ type: LIST, payload })

export function* mediaListSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

function media(state = initialState, action) {
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

export default media
