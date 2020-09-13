import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/tab'

const [TAB, TAB_SUCCESS, TAB_FAILURE] = createRequestActionTypes('tab/TAB_LIST')
const TAB_LIST_INITIAL = 'tab/TAB_LIST_INITIAL'

export const tabList = createAction(TAB, ({ category, number }) => ({ category, number }))
export const tabListInitial = createAction(TAB_LIST_INITIAL)

export function* tabListSaga() {
  yield takeLatest(TAB, createRequestSaga(TAB, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [TAB_SUCCESS]: (state, { payload: data }) => {
      // console.log('modules → tab → [list.js] → [TAB_SUCCESS] → data: ', data)
      // console.log('')

      return {
        ...state,
        data
      }
    },
    [TAB_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → tab → [list.js] → [TAB_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [TAB_LIST_INITIAL]: () => {
      // console.log('modules → tab → [list.js] → [TAB_LIST_INITIAL] → initialState: ', initialState)
      // console.log('')

      return {
        ...initialState
      }
    }
  },
  initialState
)
