import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer, { rootSaga } from './modules'
import createSagaMiddleware from 'redux-saga'
import { tempSetUser, check } from './modules/user'
import Cookies from 'js-cookie'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  // applyMiddleware(logger, ...middlewares)
  applyMiddleware(...middlewares)
  // other store enhancers if any
)

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
const store = createStore(rootReducer, enhancer)

function user() {
  try {
    const user = localStorage.getItem('user')
    // console.log('[index.js] → user: ', user)
    // console.log('')

    const token = Cookies.get('accessToken')
    // console.log('[index.js] → token: ', token)
    // console.log('')

    // console.log("[index.js] → typeof token === 'undefined': ", typeof token === 'undefined')
    // console.log('')
    if (typeof token === 'undefined') return

    // console.log('[index.js] → tempSetUser(user)를 실행합니다.')
    // console.log('[index.js] → check(token)를 실행합니다.')
    // console.log('')

    store.dispatch(tempSetUser(user))
    store.dispatch(check(token))
  } catch (error) {
    console.error(error)
  }
}

sagaMiddleware.run(rootSaga)

user()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
