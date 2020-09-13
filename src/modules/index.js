import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import eventList, { eventListSaga } from './banner/event'
import updateList, { updateListSaga } from './banner/update'
import boardList, { boardListSaga } from './board/list'
import boardRead, { boardReadSaga } from './board/read'
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
import user, { userSaga } from './user'

const rootReducer = combineReducers({
  eventList,
  updateList,
  boardList,
  boardRead,
  cardList,
  childList,
  childRead,
  guideList,
  guideRead,
  heroList,
  mediaList,
  tabList,
  visualList,
  loading,
  user
})

export function* rootSaga() {
  yield all([
    eventListSaga(),
    updateListSaga(),
    boardListSaga(),
    boardReadSaga(),
    cardListSaga(),
    childListSaga(),
    childReadSaga(),
    guideListSaga(),
    guideReadSaga(),
    heroListSaga(),
    mediaListSaga(),
    tabListSaga(),
    visualListSaga(),
    userSaga
  ])
}

export default rootReducer
