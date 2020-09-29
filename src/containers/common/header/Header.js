import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Header from '../../../components/common/header/Header'
import { logout2 } from '../../../modules/authorization'
import { logout } from '../../../modules/user'

const Result = ({ attribute }) => {
  const minimal = attribute ? attribute.minimal : null
  // console.log('containers → common → header → [Header.js] → minimal: ', minimal)
  // console.log('')

  const { user } = useSelector(({ user }) => {
    let data = {}

    if (user.user !== null) {
      const result = typeof user.user === 'string' ? JSON.parse(user.user) : user.user

      data.user = result.user2
    }

    return { user: data.user }
  }, shallowEqual)

  // console.log('containers → common → header → [Header.js] → user: ', user)
  // console.log('')

  const dispatch = useDispatch()

  const onLogout = () => {
    console.log('containers → common → header → [Header.js] → useEffect(() => { .. } → dispatch()를 실행합니다.')
    console.log('')

    dispatch(logout2('login'))
    dispatch(logout())

    console.log('containers → common → header → [Header.js] → useEffect(() => { .. } → dispatch()를 종료합니다.')
    console.log('')
  }

  return <Header attribute={{ user: user, logout: onLogout, minimal: minimal }} />
}

export default Result
