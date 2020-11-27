import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/modify'

const CHANGE_FIELD = 'board/CHANGE_FIELD'
const CHANGE_THUMBNAIL = 'board/CHANGE_THUMBNAIL'

const [BOARD_MODIFY, BOARD_MODIFY_SUCCESS, BOARD_MODIFY_FAILURE] = createRequestActionTypes('board/BOARD_MODIFY')
const BOARD_MODIFY_INITIAL = 'board/BOARD_MODIFY_INITIAL'

const SET_ORIGINAL_POST = 'modify/SET_ORIGINAL_POST'

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}))

export const changeThumbnail = createAction(CHANGE_THUMBNAIL, ({ key, value }) => ({
  key,
  value
}))

export const boardModify = createAction(BOARD_MODIFY, ({ category, number, payload }) => ({ category, number, payload }))

export const initialize = createAction(BOARD_MODIFY_INITIAL)

export const setOriginalPost = createAction(SET_ORIGINAL_POST, (post) => {
  // console.log('modules → board → [modify.js] → setOriginalPost → post: ', post)

  return post
})

export function* boardModifySaga() {
  yield takeLatest(BOARD_MODIFY, createRequestSaga(BOARD_MODIFY, api.modify))
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
    [BOARD_MODIFY_INITIAL]: () => {
      // console.log('BOARD_MODIFY_INITIAL initialState: ', initialState)

      return {
        ...initialState
      }
    },
    [BOARD_MODIFY_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → board → [modify.js] →  [BOARD_MODIFY_SUCCESS] →  data: ', data)

      return {
        ...state,
        data
      }
    },
    [BOARD_MODIFY_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [SET_ORIGINAL_POST]: (state, { payload: data }) => {
      // console.log('modules → board → [modify.js] →  [SET_ORIGINAL_POST] →  data: ', data)

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
