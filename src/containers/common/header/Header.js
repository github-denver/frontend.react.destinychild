import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Header from '../../../components/common/header/Header'
import { signout } from '../../../modules/authorization'
import { logout } from '../../../modules/user'

const Result = ({ attribute }) => {
  const minimal = attribute ? attribute.minimal : null

  const { user } = useSelector(({ user }) => {
    let temp = {}

    if (user.user !== null) {
      const result = typeof user.user === 'string' ? JSON.parse(user.user) : user.user

      temp.user = result.user2
    }

    return { user: temp.user }
  }, shallowEqual)

  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(signout('login'))
    dispatch(logout())
  }

  return <Header attribute={{ user: user, logout: onLogout, minimal: minimal }} />
}

export default Result
