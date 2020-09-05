import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga'
import { takeLatest, call } from 'redux-saga/effects'
import * as api from '../lib/api/authorization'
import Cookies from 'js-cookie'

const SET_USER = 'user/SET_USER' // 새로 고침 이후 임시 로그인 처리
const LOGOUT = 'user/LOGOUT'

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('user/CHECK') // 회원정보 확인

export const tempSetUser = createAction(SET_USER, (user) => {
  // console.log('modules → [user.js] → tempSetUser → user: ', user)

  return user
})

export const check = createAction(CHECK)
export const logout = createAction(LOGOUT)

const checkSaga = createRequestSaga(CHECK, api.check)

function checkFailureSaga() {
  // console.log('modules → [user.js] → function checkFailureSaga() { .. }')
  // console.log('')

  try {
    // console.log("modules → [user.js] → function checkFailureSaga() { .. } → localStorage.getItem('user'): ", localStorage.getItem('user'))

    localStorage.removeItem('user')

    Cookies.remove('accessToken')
  } catch (error) {
    console.error(error)
  }
}

function* logoutSaga() {
  // console.log('modules → [user.js] → function* logoutSaga() { .. }')
  // console.log('')

  try {
    yield call(api.logout)

    localStorage.removeItem('user')

    Cookies.remove('accessToken')

    // console.log("modules → [user.js] → function* logoutSaga() { .. } → localStorage.getItem('user'): ", localStorage.getItem('user'))
  } catch (error) {
    console.error(error)
  }
}

export function* userSaga() {
  // console.log('modules → [user.js] → export function* userSaga() { .. }')
  // console.log('')

  yield takeLatest(CHECK, checkSaga)
  yield takeLatest(CHECK_FAILURE, checkFailureSaga)
  yield takeLatest(LOGOUT, logoutSaga)
}

const initialState = {
  user: null,
  error: null
}

const user = handleActions(
  {
    [SET_USER]: (state, { payload: user }) => {
      // console.log('modules → [user.js] → [SET_USER] → user: ', user)
      // console.log('')

      return {
        ...state,
        user
      }
    },
    [CHECK_SUCCESS]: (state, { payload: user }) => {
      // console.log('modules → [user.js] → [CHECK_SUCCESS] → user: ', user)
      // console.log('')

      return {
        ...state,
        user,
        error: null
      }
    },
    [CHECK_FAILURE]: (state, { payload: error }) => {
      // console.log('modules → [user.js] → [CHECK_FAILURE] → error: ', error)
      // console.log('')

      return {
        ...state,
        error
      }
    },
    [LOGOUT]: (state) => {
      // console.log('modules → [user.js] → [LOGOUT] → state: ', state)
      // console.log('')

      return {
        ...state,
        user: null
      }
    }
  },
  initialState
)

export default user
