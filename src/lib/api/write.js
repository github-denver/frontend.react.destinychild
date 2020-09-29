import axios from './axios'

export const write = ({ category, id, name, password }) => axios.get(`/api/beluga/board/${category}/write`, { id, name, password })
