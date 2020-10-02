import axios from './axios'

export const read = ({ category, number }) => {
  return axios.get(`/api/beluga/board/${category}/read/${number}`)
}

export const removePost = ({ category, number }) => {
  return axios.get(`/api/beluga/board/${category}/delete/${number}`)
}
