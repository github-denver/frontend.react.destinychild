import createPromiseSaga from '../../lib/createRequestSaga'
import { reducerUtils, handleAsyncAction } from '../../lib/asyncUtils'
import { takeLatest } from 'redux-saga/effects'
import { createSlice } from '@reduxjs/toolkit'
import * as api from '../../lib/api/banner'

// Action Type
const prefix = 'event'

export const [postsState, postState] = [prefix, 'post']

// Action Creator

// State
const initialState = {
  data: reducerUtils.initial(),
  error: reducerUtils.initial(),
  loading: reducerUtils.initial(),
  post: reducerUtils.initial()
}

/* Reducer */
const eventListReducer = createSlice({
  name: prefix,
  initialState,
  reducers: {
    eventListInitial: (state, action) => {
      return {
        ...initialState
      }
    },
    eventList: (state, action) => {
      return {
        category: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        console.group('extraReducers: (builder) => { .. } → (action) => { .. }')
        console.log('action: ', action)
        console.log('action.type: ', action.type)
        console.groupEnd()

        return action.type.includes(prefix)
      },
      (state, action) => {
        // state.data = handleAsyncAction(action)

        console.group('extraReducers: (builder) => { .. } → (state, action) => { .. }')
        console.log('state: ', state)
        console.log(`state[${action.payload.stateType}]: `, state[action.payload.stateType])
        console.log('action: ', action)
        console.groupEnd()

        if (typeof state[action.payload.stateType] !== 'undefined') {
          state[action.payload.stateType] = handleAsyncAction(action)
        } else {
          state.data = handleAsyncAction(action)
        }
      }
    )
  }
})

// Success, Failure, Initial, Action을 외부에서 Dispatch 할 수 있도록 export 합니다.
export const { eventListInitial, eventList } = eventListReducer.actions

// Main Saga
export function* eventListSaga() {
  console.group('export function* eventListSaga() { .. }')
  console.groupEnd()

  yield takeLatest(eventList, createPromiseSaga(eventList, api.list, 'post'))
}

// Reducer export
export default eventListReducer.reducer
