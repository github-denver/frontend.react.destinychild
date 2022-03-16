const START = 'loading/START'
const FINISH = 'loading/FINISH'

export const loadingStart = (requestType) => {
  return {
    type: START,
    requestType
  }
}

export const loadingFinish = (requestType) => {
  return {
    type: FINISH,
    requestType
  }
}

const initialState = {}

function loading(state = initialState, action) {
  switch (action.type) {
    case START:
      return {
        ...state,
        [action.payload]: true
      }

    case FINISH:
      return {
        ...state,
        [action.payload]: false
      }

    default:
      return state
  }
}

export default loading
