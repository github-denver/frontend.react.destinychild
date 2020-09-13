import axios from './axios'

export const list = ({ category, number }) => {
  return axios.get(`/api/beluga/board/child/list/${number}`)
}

export const read = ({ category, number }) => {
  return axios.get(`/api/beluga/board/child/detail/${number}`)
}
