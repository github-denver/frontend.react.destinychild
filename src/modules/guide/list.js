import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/list'

const [GUIDE, GUIDE_SUCCESS, GUIDE_FAILURE] = createRequestActionTypes('guide/GUIDE_LIST')
const GUIDE_LIST_INITIAL = 'guide/GUIDE_LIST_INITIAL'

export const guideList = createAction(GUIDE, ({ category, number }) => ({ category, number }))
export const guideListInitial = createAction(GUIDE_LIST_INITIAL)

export function* guideListSaga() {
  yield takeLatest(GUIDE, createRequestSaga(GUIDE, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [GUIDE_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → guide → [list.js] → [GUIDE_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [GUIDE_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → guide → [list.js] → [GUIDE_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [GUIDE_LIST_INITIAL]: () => {
      // console.log('modules → guide → [list.js] → [GUIDE_LIST_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
