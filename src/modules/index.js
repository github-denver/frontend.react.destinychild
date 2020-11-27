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
