import axios from './axios'

export const modify = ({ category, number, payload }) => {
  return axios.post(`/api/beluga/board/${category}/modify/${number}`, payload)
}
