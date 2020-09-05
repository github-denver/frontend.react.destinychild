import axios from './axios'

export const list = ({ category, number }) => {
  console.log('* category: ', category)
  return axios.get(`/api/beluga/board/${category}/list/${number}`)
}
