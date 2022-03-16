import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/modify'

const FIELD = 'board/FIELD'
const THUMBNAIL = 'board/THUMBNAIL'

const INITIAL = 'board/MODIFY/INITIAL'
const MODIFY = 'board/MODIFY'
const SUCCESS = 'board/MODIFY/SUCCESS'
const FAILURE = 'board/MODIFY/FAILURE'

const ORIGINAL = 'board/MODIFY/ORIGINAL'

export const setOriginalPost = (payload) => {
  return {
    type: ORIGINAL,
    payload
  }
}
export const changeField = (payload) => {
  return {
    type: FIELD,
    payload
  }
}
export const changeThumbnail = (payload) => {
  return {
    type: THUMBNAIL,
    payload
  }
}

export const initialize = () => {
  return {
    type: INITIAL
  }
}
export const boardModify = (payload) => {
  return {
    type: MODIFY,
    payload
  }
}

export function* boardModifySaga() {
  yield takeLatest(MODIFY, createRequestSaga(MODIFY, api.modify))
}

const initialState = {
  title: '',
  body: '',
  thumbnail: null,
  data: null,
  error: null,
  owner: null
}

function modify(state = initialState, action) {
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

    case ORIGINAL:
      const { title, body, thumbnail, owner } = action.payload.result[0]

      return {
        ...state,
        title,
        body,
        thumbnail,
        owner
      }

    case FIELD:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }

    case THUMBNAIL:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }

    default:
      return state
  }
}

export default modify
