import { call, put } from 'redux-saga/effects'
import { loadingStart, loadingFinish } from '../modules/loading'

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}/SUCCESS`
  const FAILURE = `${type}/FAILURE`

  return [type, SUCCESS, FAILURE]
}

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}/SUCCESS`
  const FAILURE = `${type}/FAILURE`

  return function* (action) {
    yield put(loadingStart(type))

    try {
      const response = yield call(request, action.payload)

      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response
      })
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true
      })
    }

    yield put(loadingFinish(type))
  }
}
