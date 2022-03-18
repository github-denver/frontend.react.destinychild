import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import eventList, { eventListSaga } from './banner/event'
import updateList, { updateListSaga } from './banner/update'

import boardList, { boardListSaga } from './board/list'
import boardRead, { boardReadSaga } from './board/read'
import boardWrite, { boardWriteSaga } from './board/write'
import boardModify, { boardModifySaga } from './board/modify'

import cardList, { cardListSaga } from './card/list'

import childList, { childListSaga } from './child/list'
import childRead, { childReadSaga } from './child/read'

import guideList, { guideListSaga } from './guide/list'
import guideRead, { guideReadSaga } from './guide/read'

import heroList, { heroListSaga } from './hero/list'

import mediaList, { mediaListSaga } from './media/list'

import tabList, { tabListSaga } from './tab/list'

import visualList, { visualListSaga } from './visual/list'

import loading from './loading'

import authorization, { authorizationSaga } from './authorization'

import user, { userSaga } from './user'

// combineReducers를 사용해서 병합
const rootReducer = combineReducers({
  loading,
  authorization,
  user,
  eventList,
  updateList,
  boardList,
  boardRead,
  boardWrite,
  boardModify,
  cardList,
  childList,
  childRead,
  guideList,
  guideRead,
  heroList,
  mediaList,
  tabList,
  visualList
})

export function* rootSaga() {
  // yield는 비동기 작업을 처리할 때 작업 단위를 나누는 기준점 같은 것으로 보면 된다.
  // all 은 여러 개의 Saga를 동시에 실행시켜준다.
  yield all([
    authorizationSaga(),
    userSaga(),
    eventListSaga(),
    updateListSaga(),
    boardListSaga(),
    boardReadSaga(),
    boardWriteSaga(),
    boardModifySaga(),
    cardListSaga(),
    childListSaga(),
    childReadSaga(),
    guideListSaga(),
    guideReadSaga(),
    heroListSaga(),
    mediaListSaga(),
    tabListSaga(),
    visualListSaga()
  ])
}

export default rootReducer
