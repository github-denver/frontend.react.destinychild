import axios from './axios'

export const list = ({ category }) => {
  return axios.get(`/api/beluga/board/${category}/list`)
}
