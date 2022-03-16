import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeField, initializeForm, register, registerInitial } from '../modules/authorization'
import Form from '../components/authorization/Form'
import { withRouter } from 'react-router-dom'

const Register = ({ history }) => {
  const [message, setMessage] = useState(null)

  const { form, authorization, error } = useSelector(({ authorization, user }) => {
    return {
      form: authorization.register,
      authorization: authorization.authorization,
      error: authorization.error,
      user: user.user
    }
  })

  const dispatch = useDispatch()

  const onChange = (event) => {
    const { value, name } = event.target

    dispatch(
      changeField({
        form: 'register',
        key: name,
        value
      })
    )
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const { id, name, password, confirm } = form
    if ([id, name, password, confirm].includes('')) {
      setMessage('필수 정보를 입력해 주세요!')

      return
    }

    if (password !== confirm) {
      setMessage('패스워드가 일치하지 않아요!')

      return
    }

    dispatch(register({ id, name, password }))
  }

  useEffect(() => {
    dispatch(initializeForm('register'))
  }, [dispatch])

  useEffect(() => {
    if (error) {
      if (error.response.status === 400) {
        setMessage('이미 가입된 아이디입니다!')

        return
      }

      setMessage('알 수 없는 에러가 발생하였습니다.')

      return
    }

    if (authorization) {
      // 회원가입 성공
      history.push('/beluga/member/login')
    }

    return () => {
      // authorization/REGISTER_INITIAL 언 마운트 될 때 리덕스에서 데이터를 삭제
      dispatch(registerInitial())
    }
  }, [error, authorization, history, dispatch])

  return <Form type="register" form={form} onChange={onChange} onSubmit={onSubmit} error={message} />
}

export default withRouter(Register)
