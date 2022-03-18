import createRequestSaga from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import { createAction, createReducer } from '@reduxjs/toolkit'
import * as api from '../../lib/api/banner'

// Action Type
/*
  State에 변화가 필요할 때 Action을 발생시키고 이것은 하나의 객체입니다.
  즉, 어떤 동작에 대해 선언된 객체입니다.

  Action은 반드시 type을 가지고 있어야 하고 이외 값은 상황에 따라 넣을 수 있습니다.
  type은 어떤 동작을 할 것인지 표기한 명령어입니다.
*/
const INITIAL = 'event/LIST/INITIAL'
const LIST = 'event/LIST'
const SUCCESS = 'event/LIST/SUCCESS'
const FAILURE = 'event/LIST/FAILURE'

// Action Creator
/*
  Action이 동작에 대해 선언된 객체라면 Action Creator는 Action을 생성해서 실제 객체로 만들어주는 함수입니다.
*/
export const eventListInitial = createAction(INITIAL)
export const eventList = createAction(LIST, ({ category }) => ({ category }))

// Main Saga
/*
  put은 dispatch입니다.
*/
export function* eventListSaga() {
  /*
    takeLatest는 내부에 선언한 Saga를 항상 실행시켜놓는데, Action 객체를 수시로 확인하고 있다가 해당 객체가 생성되면 행동을 취합니다.

    예를 들어, LIST Action 객체가 생성되면 createRequestSaga를 수행합니다.
    LIST Action 객체가 생성됐다면 createRequestSaga를 수행하는 데 api.list를 호출합니다.
    호출 후 api.list의 데이터를 response 변수에 할당합니다.

    그리고 response를 SUCCESS, FAILURE(Action Creator)에 put(Dispatch) 합니다.
    이때, SUCCESS, FAILURE라는 Action 객체가 생성되는데 eventListSaga()를 보면 SUCCESS, FAILURE라는 Action 객체에 대한 행동이 없기 때문에 곧바로 Reducer로 이동합니다.
  */
  yield takeLatest(LIST, createRequestSaga(LIST, api.list))
}

// State
const initialState = {
  data: null,
  error: null
}

// Toolkit Reducer
/*
  State에 변화를 일으키는 함수입니다. Action을 직접 수행하는 함수입니다.
  Reducer는 현재의 State와 Action을 인자 값으로 받아서 Store에 접근해 Action Type에 맞춰 State를 변경합니다.
*/
export default createReducer(initialState, {
  [SUCCESS]: (state, { payload: data }) => {
    return {
      ...state,
      data
    }
  },
  [FAILURE]: (state, { payload: error }) => {
    return {
      ...state,
      error
    }
  },
  [INITIAL]: () => {
    return {
      ...initialState
    }
  }
})

// Dispatch
/*
  Dispatch는 Store의 내장 함수 중 하나로 Reducer의 Action을 발생시키는 함수입니다.
  Dispatch는 dispatch(action) 이렇게 Action을 인자 값으로 전달합니다.

  이렇게 호출을 하면 Store가 Reducer를 실행해 Reducer가 전달한 Action을 처리하고 새로운 State를 만들어 줍니다.
*/

// Subscribe
/*
  Subscribe는 Store의 내장 함수 중 하나로 함수 형태의 값을 인자로 받는데, Action이 Dispatch될 때마다 전달해 준 함수를 호출합니다.

  subscribe는  Store를 주시하고 있다가 Dispatch 될 때 함수를 호출합니다.
*/

// Reducer 세 가지 규칙
/*
  1. 하나의 애플리케이션은 하나의 Store만 가질 수 있습니다. (여러 개의 Store을 가질 수 있지만 권장하지 않습니다.)

  2. 상태는 읽기 전용입니다. (기존 state는 수정하지 않고 새로운 state를 만들어 수정하는 방식으로 사용합니다. 이는 불변성을 위해서입니다.)

  3. Reducer는 순수 함수입니다. (Reducer는 이전 State와 Action 객체를 Parameter로 전달받아야 하고 이전의 State는 건드리지 않고 변화를 시킨 다음 새로운 State 객체를 만들어 반환해야 합니다. 동일한 Parameter로 호출된 Reducer는 언제나 같은 패턴의 결과 값을 반환해야 합니다.)
*/
