import axios from './axios'

export const write = ({ category, payload }) => {
  return axios.post(`/api/beluga/board/${category}/write`, payload)
}

export const update = ({ category, number, payload }) => {
  return axios.post(`/api/beluga/board/${category}/modify/${number}`, payload)
}
