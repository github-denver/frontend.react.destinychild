import produce from 'immer'
import createRequestSaga from '../lib/createRequestSaga'
import { takeLatest, call } from 'redux-saga/effects'
import * as api from '../lib/api/authorization'
import Cookies from 'js-cookie'

const FIELD = 'authorization/FIELD'
const FORM_INITIAL = 'authorization/FORM/INITIAL'

const LOGIN = 'authorization/LOGIN'
const LOGIN_SUCCESS = 'authorization/LOGIN/SUCCESS'
const LOGIN_FAILURE = 'authorization/LOGIN/FAILURE'
const LOGOUT = 'authorization/LOGOUT'

const REGISTER_INITIAL = 'authorization/REGISTER/INITIAL'
const REGISTER = 'authorization/REGISTER'
const REGISTER_SUCCESS = 'authorization/REGISTER/SUCCESS'
const REGISTER_FAILURE = 'authorization/REGISTER/FAILURE'

export const changeField = (payload) => {
  return {
    type: FIELD,
    payload
  }
}
export const initializeForm = (payload) => {
  return {
    type: FORM_INITIAL,
    payload
  }
}

export const login = (payload) => {
  return {
    type: LOGIN,
    payload
  }
}
export const signout = (payload) => {
  return {
    type: LOGOUT,
    payload
  }
}

export const register = (payload) => {
  return {
    type: REGISTER,
    payload
  }
}
export const registerInitial = () => {
  return {
    type: REGISTER_INITIAL
  }
}

const loginSaga = createRequestSaga(LOGIN, api.login)
const registerSaga = createRequestSaga(REGISTER, api.register)

function* logoutSaga() {
  try {
    yield call(api.logout)

    localStorage.removeItem('user')

    Cookies.remove('accessToken')
  } catch (error) {
    console.error(error)
  }
}

export function* authorizationSaga() {
  yield takeLatest(LOGIN, loginSaga)
  yield takeLatest(LOGOUT, logoutSaga)
  yield takeLatest(REGISTER, registerSaga)
}

const initialState = {
  login: {
    id: '',
    password: ''
  },
  register: {
    id: '',
    name: '',
    email: '',
    password: '',
    confirm: ''
  },
  authorization: null,
  token: null,
  error: null
}

function authorization(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authorization: action.payload,
        error: null
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case LOGOUT:
      return {
        ...state,
        [action.payload.form]: initialState[action.payload.form],
        authorization: null,
        error: null
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        authorization: action.payload,
        error: null
      }

    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case REGISTER_INITIAL:
      return {
        ...initialState,
        authorization: null
      }

    case FIELD:
      return produce(state, (draft) => {
        draft[action.payload.form][action.payload.key] = action.payload.value
      })

    case FORM_INITIAL:
      return {
        ...state,
        [action.payload.form]: initialState[action.payload.form],
        error: null
      }

    default:
      return state
  }
}

export default authorization
