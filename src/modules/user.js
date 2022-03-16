import createRequestSaga from '../lib/createRequestSaga'
import { takeLatest, call } from 'redux-saga/effects'
import * as api from '../lib/api/authorization'
import Cookies from 'js-cookie'

const TEMPORARY = 'user/TEMPORARY' // 새로 고침 이후 임시 로그인 처리
const LOGOUT = 'user/LOGOUT'

// 회원정보 확인
const CHECK = 'auth/CHECK'
const SUCCESS = 'auth/CHECK/SUCCESS'
const FAILURE = 'auth/CHECK/FAILURE'

export const tempSetUser = (payload) => ({ type: TEMPORARY, payload })
export const check = (token) => ({ type: CHECK })
export const logout = () => ({ type: LOGOUT })

const checkSaga = createRequestSaga(CHECK, api.check)

function checkFailureSaga() {
  try {
    localStorage.removeItem('user')

    Cookies.remove('accessToken')
  } catch (error) {
    console.error(error)
  }
}

function* logoutSaga() {
  try {
    yield call(api.logout)

    localStorage.removeItem('user')

    Cookies.remove('accessToken')
  } catch (error) {
    console.error(error)
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga)
  yield takeLatest(FAILURE, checkFailureSaga)
  yield takeLatest(LOGOUT, logoutSaga)
}

const initialState = {
  user: null,
  error: null
}

function user(state = initialState, action) {
  switch (action.type) {
    case TEMPORARY:
      return {
        ...state,
        user: action.payload
      }

    case LOGOUT:
      return {
        ...state,
        user: null
      }

    case SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null
      }

    case FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}

export default user
