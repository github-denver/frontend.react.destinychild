import { createSlice } from '@reduxjs/toolkit'

const initial = {}

const loading = createSlice({
  name: 'loading',
  initial,
  reducers: {
    start: (state, action) => {
      console.group('start: (state, action) => { .. }')
      console.log('state: ', state)
      console.log('action: ', action)
      console.groupEnd()
    },
    finish: (state, action) => {
      console.group('finish: (state, action) => { .. }')
      console.log('state: ', state)
      console.log('action: ', action)
      console.groupEnd()
    }
  }
})

export const { start, finish } = loading.actions

export default loading.reducer
