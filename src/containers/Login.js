import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { changeField, initializeForm, login } from '../modules/authorization'
import Form from '../components/authorization/Form'
import { check } from '../modules/user'
import { withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = ({ history }) => {
  const [message, setMessage] = useState(null)

  const { form, token, error, user } = useSelector(({ authorization, user }) => {
    let data = {}

    if (user.user !== null) {
      data.user = user.user.user2
    }

    if (typeof authorization.authorization !== 'undefined' && authorization.authorization !== null) {
      data.token = authorization.authorization.accessToken
    }

    return {
      form: authorization.login,
      token: data.token,
      error: authorization.error,
      user: data.user
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  const onChange = (event) => {
    const { value, name } = event.target

    dispatch(
      changeField({
        form: 'login',
        key: name,
        value
      })
    )
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const { id, password } = form

    dispatch(login({ id, password }))
  }

  useEffect(() => {
    dispatch(initializeForm('login'))
  }, [dispatch])

  useEffect(() => {
    if (error) {
      console.error(error)

      setMessage('로그인에 실패했어요!')

      return
    }

    if (!!token) {
      // console.log('containers → [Login.js] → 로그인에 성공했어요!')

      dispatch(check(token))
    }
  }, [token, error, dispatch])

  useEffect(() => {
    if (user) {
      // console.log('containers → [Login.js] → check API 성공했어요!')

      history.push('/beluga')

      try {
        const data = {
          user: {},
          user2: {
            id: user.id,
            name: user.name
          }
        }

        localStorage.setItem('user', JSON.stringify(data))

        Cookies.set('accessToken', token)
      } catch (error) {
        console.error(error)
      }
    }
  }, [history, token, user])

  return <Form type="login" form={form} onChange={onChange} onSubmit={onSubmit} error={message} />
}

export default withRouter(Login)
