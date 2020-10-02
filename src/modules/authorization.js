import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga'
import { takeLatest, call } from 'redux-saga/effects'
import * as api from '../lib/api/authorization'
import Cookies from 'js-cookie'

const CHANGE_FIELD = 'authorization/CHANGE_FIELD'
const INITIAL_FORM = 'authorization/INITIAL_FORM'

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('authorization/LOGIN')
const LOGOUT = 'authorization/LOGOUT'
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('authorization/REGISTER')

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form,
  key,
  value
}))

export const initializeForm = createAction(INITIAL_FORM, (form) => form)

export const login = createAction(LOGIN, ({ id, password }) => ({ id, password }))
export const logout2 = createAction(LOGOUT)
export const register = createAction(REGISTER, ({ id, name, password }) => ({ id, name, password }))

const loginSaga = createRequestSaga(LOGIN, api.login)
const registerSaga = createRequestSaga(REGISTER, api.register)

function* logoutSaga() {
  try {
    yield call(api.logout)

    localStorage.removeItem('user')

    Cookies.remove('accessToken')

    console.log("modules → [authorization.js] → localStorage.getItem('user'): ", localStorage.getItem('user'))
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

const authorization = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => {
      return produce(state, (draft) => {
        draft[form][key] = value
      })
    },
    [INITIAL_FORM]: (state, { payload: form }) => {
      return {
        ...state,
        [form]: initialState[form],
        error: null
      }
    },
    [LOGIN_SUCCESS]: (state, { payload: authorization }) => {
      return {
        ...state,
        authorization,
        error: null
      }
    },
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    }),
    [LOGOUT]: (state, { payload: form }) => {
      return {
        ...state,
        [form]: initialState[form],
        authorization: null,
        error: null
      }
    },
    [REGISTER_SUCCESS]: (state, { payload: authorization }) => ({
      ...state,
      authorization,
      error: null
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error
    })
  },
  initialState
)

export default authorization
