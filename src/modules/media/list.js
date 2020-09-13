import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/media'

const [MEDIA, MEDIA_SUCCESS, MEDIA_FAILURE] = createRequestActionTypes('media/MEDIA_LIST')
const MEDIA_LIST_INITIAL = 'media/MEDIA_LIST_INITIAL'

export const mediaList = createAction(MEDIA, ({ category, number }) => ({ category, number }))
export const mediaListInitial = createAction(MEDIA_LIST_INITIAL)

export function* mediaListSaga() {
  yield takeLatest(MEDIA, createRequestSaga(MEDIA, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [MEDIA_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → media → [list.js] → [MEDIA_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [MEDIA_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → media → [list.js] → [MEDIA_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [MEDIA_LIST_INITIAL]: () => {
      // console.log('modules → media → [list.js] → [MEDIA_LIST_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
