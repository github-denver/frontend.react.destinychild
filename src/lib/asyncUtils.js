import { call, put } from 'redux-saga/effects'

export const createActionString = (type) => {
  console.group('export const createActionString = (type) => { .. }')
  console.log('type: ', type)
  console.groupEnd()

  return {
    success: `${type}/SUCCESS`,
    error: `${type}/FAILURE`
  }
}

// Promise의 결과를 기다리고 Dispatch 하는 Saga
// stateType이 없는 Reducer도 대응 가능하도록 default를 null로 설정합니다.
export const createPromiseSaga = (type, promiseCreator, stateType = null) => {
  console.group('export const createPromiseSaga = (type, promiseCreator) => { .. }')
  console.log('type: ', type)
  console.log('promiseCreator: ', promiseCreator)
  console.log('stateType: ', stateType)
  console.groupEnd()

  const [SUCCESS, ERROR] = createActionString(type)

  return function* saga(action) {
    try {
      // 재사용성을 위해서 promiseCreator의 Parameter에는 action.payload 값을 할당합니다.
      const response = yield call(promiseCreator, action.payload)
      console.log('response: ', response)

      // stateType이 존재하는 요청이 성공할 경우 payload에 stateType을 포함합니다.
      const payload = stateType ? { ...response, stateType } : response
      console.log('payload: ', payload)

      yield put({
        type: SUCCESS,
        payload
      })
    } catch (error) {
      // stateType이 존재하는 요청이 실패할 경우 payload에 stateType을 포함합니다.
      const payload = stateType ? { error, stateType } : { error }
      console.log('payload: ', payload)

      yield put({
        type: ERROR,
        error: true,
        payload: error
      })
    }
  }
}

// Reducer에서 사용할 수 있는 함수입니다.
export const reducerUtils = {
  initial: (initialState = null) => ({
    loading: false,
    data: initialState,
    error: null
  }),

  // 로딩 중 상태입니다. prevState의 기본값은 null입니다.
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null
  }),
  success: (payload) => {
    console.group('success: (payload) => { .. }')
    console.log('payload: ', payload)
    console.groupEnd()

    return {
      loading: false,
      data: payload,
      error: null
    }
  },
  error: (error) => {
    console.group('error: (error) => { .. }')
    console.log('error: ', error)
    console.groupEnd()

    return {
      loading: false,
      data: null,
      error: error
    }
  }
}

export const handleAsyncAction = ({ type, payload = {} }, prevState = null) => {
  console.group('export const handleAsyncAction = ({ type, payload = {} }, prevState = null) => { .. }')
  console.log('type: ', type)
  console.log('payload: ', payload)
  console.log('prevState: ', prevState)

  const temporary = JSON.parse(JSON.stringify(payload))

  if (payload.hasOwnProperty('stateType')) {
    delete temporary.stateType
    console.log('temporary: ', temporary)
  }

  console.groupEnd()

  if (type.includes('/SUCCESS')) {
    return reducerUtils.success(temporary)
  }

  if (type.includes('/FAILURE')) {
    return reducerUtils.error(temporary)
  }

  return reducerUtils.loading(temporary)
}
