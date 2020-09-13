import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/hero'

const [VISUAL, VISUAL_SUCCESS, VISUAL_FAILURE] = createRequestActionTypes('visual/VISUAL_LIST')
const VISUAL_LIST_INITIAL = 'visual/VISUAL_LIST_INITIAL'

export const visualList = createAction(VISUAL, ({ category, number }) => ({ category, number }))
export const visualListInitial = createAction(VISUAL_LIST_INITIAL)

export function* visualListSaga() {
  yield takeLatest(VISUAL, createRequestSaga(VISUAL, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [VISUAL_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → visual → [list.js] → [VISUAL_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [VISUAL_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → visual → [list.js] → [VISUAL_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [VISUAL_LIST_INITIAL]: () => {
      // console.log('modules → visual → [list.js] → [VISUAL_LIST_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
