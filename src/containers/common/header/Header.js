import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Header from '../../../components/common/header/Header'
import { logout2 } from '../../../modules/authorization'
import { logout } from '../../../modules/user'

const Result = ({ attribute }) => {
  const minimal = attribute ? attribute.minimal : null
  // console.log('containers → common → header → [Header.js] → minimal: ', minimal)

  const { user } = useSelector(({ user }) => {
    let temp = {}

    if (user.user !== null) {
      const result = typeof user.user === 'string' ? JSON.parse(user.user) : user.user

      temp.user = result.user2
    }

    return { user: temp.user }
  }, shallowEqual)

  // console.log('containers → common → header → [Header.js] → user: ', user)

  const dispatch = useDispatch()

  const onLogout = () => {
    // console.log('containers → common → header → [Header.js] → useEffect(() => { .. }')

    dispatch(logout2('login'))
    dispatch(logout())
  }

  return <Header attribute={{ user: user, logout: onLogout, minimal: minimal }} />
}

export default Result
