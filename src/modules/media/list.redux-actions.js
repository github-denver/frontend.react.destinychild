import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/media'

const [MEDIA_LIST, MEDIA_SUCCESS, MEDIA_FAILURE] = createRequestActionTypes('media/MEDIA_LIST')
const MEDIA_LIST_INITIAL = 'media/MEDIA_LIST_INITIAL'

export const mediaList = createAction(MEDIA_LIST, ({ category, number }) => ({ category, number }))
export const mediaListInitial = createAction(MEDIA_LIST_INITIAL)

export function* mediaListSaga() {
  yield takeLatest(MEDIA_LIST, createRequestSaga(MEDIA_LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [MEDIA_SUCCESS]: (state, { payload: data }) => {
      return {
        ...state,
        data
      }
    },
    [MEDIA_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error
      }
    },
    [MEDIA_LIST_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
