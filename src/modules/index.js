import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import loading from './loading'

import user, { userSaga } from './user'
import hero, { heroSaga } from './hero/list'
import tab, { tabSaga } from './tab/list'
import update, { updateSaga } from './banner/update'
import event, { eventSaga } from './banner/event'
import card, { cardSaga } from './card/list'
import list, { listSaga } from './board/list'
import read, { readSaga } from './board/read'
import media, { mediaSaga } from './media/list'

const rootReducer = combineReducers({ loading, user, hero, tab, update, event, card, list, read, media })

export function* rootSaga() {
  yield all([userSaga(), heroSaga(), tabSaga(), updateSaga(), eventSaga(), cardSaga(), listSaga(), readSaga(), mediaSaga()])
}

export default rootReducer
