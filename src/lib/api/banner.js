import axios from './axios'

export const list = ({ category, number }) => {
  let sql = `/api/beluga/board/${category}/list/:${number}`

  if (typeof number === 'undefined') {
    sql = `/api/beluga/board/${category}/list/1`
  }

  return axios.get(sql)
}
