import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/write'

const CHANGE_FIELD = 'board/CHANGE_FIELD'
const CHANGE_THUMBNAIL = 'board/CHANGE_THUMBNAIL'

const [BOARD_WRITE, BOARD_WRITE_SUCCESS, BOARD_WRITE_FAILURE] = createRequestActionTypes('board/BOARD_WRITE')
const BOARD_WRITE_INITIAL = 'board/BOARD_WRITE_INITIAL'

const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST'

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}))

export const changeThumbnail = createAction(CHANGE_THUMBNAIL, ({ key, value }) => ({
  key,
  value
}))

export const boardWrite = createAction(BOARD_WRITE, ({ category, payload }) => ({ category, payload }))

export const initialize = createAction(BOARD_WRITE_INITIAL)

export const setOriginalPost = createAction(SET_ORIGINAL_POST, (post) => {
  return post
})

export function* boardWriteSaga() {
  yield takeLatest(BOARD_WRITE, createRequestSaga(BOARD_WRITE, api.write))
}

const initialState = {
  title: '',
  body: '',
  thumbnail: null,
  data: null,
  error: null,
  owner: null
}

export default handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => {
      return {
        ...state,
        [key]: value
      }
    },
    [CHANGE_THUMBNAIL]: (state, { payload: { key, value } }) => {
      return {
        ...state,
        [key]: value
      }
    },
    [BOARD_WRITE_INITIAL]: () => {
      return {
        ...initialState
      }
    },
    [BOARD_WRITE_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [BOARD_WRITE_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [SET_ORIGINAL_POST]: (state, { payload: data }) => {
      return {
        ...state,
        title: data.result[0].subject,
        body: data.result[0].content,
        thumbnail: data.result[0].thumbnail,
        owner: data.result[0].id
      }
    }
  },
  initialState
)
