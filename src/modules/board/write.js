import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/write'

const FIELD = 'board/FIELD'
const THUMBNAIL = 'board/THUMBNAIL'

const INITIAL = 'board/WRITE/INITIAL'
const WRITE = 'board/WRITE'
const SUCCESS = 'board/WRITE/SUCCESS'
const FAILURE = 'board/WRITE/FAILURE'

const ORIGINAL = 'board/WRITE/ORIGINAL'

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
export const boardWrite = (payload) => {
  return {
    type: WRITE,
    payload
  }
}

export function* boardWriteSaga() {
  yield takeLatest(WRITE, createRequestSaga(WRITE, api.write))
}

const initialState = {
  title: '',
  body: '',
  thumbnail: null,
  data: null,
  error: null,
  owner: null
}

function write(state = initialState, action) {
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

export default write
