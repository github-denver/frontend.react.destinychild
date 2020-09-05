import axios from './axios'

export const login = ({ id, password }) => axios.post('/api/beluga/login', { id, password })

export const register = ({ id, name, password }) => axios.post('/api/beluga/register', { id, name, password })

export const check = (token) => {
  return axios.get('/api/beluga/me', {
    params: {
      accessToken: token
    }
  })
}

export const logout = () => axios.get('/api/logout')
