import React, { useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Header from '../../../components/common/header/Header'
// import { logout2 } from '../../../modules/authorization'
import { logout } from '../../../modules/user'

const Result = () => {
  const { user } = useSelector(({ user }) => {
    // console.log('containers → common → header → [Header.js] → (recycle) useSelector → user: ', user)

    let temp = {}

    if (user.user !== null) {
      // console.log('containers → common → header → [Header.js] → useSelector → user.user : ', user.user)

      const result = typeof user.user === 'string' ? JSON.parse(user.user) : user.user
      // console.log('containers → common → header → [Header.js] → useSelector → result : ', result)

      temp.user = result.user2
    }

    // console.log('containers → common → header → [Header.js] → (recycle) useSelector → temp.user: ', temp.user)
    // console.log('')

    return { user: temp.user }
  }, shallowEqual)

  // console.log('containers → common → header → [Header.js] → user: ', user)
  // console.log('')

  const dispatch = useDispatch()

  const handlerLogout = useCallback(() => {
    // console.log('containers → common → header → [Header.js] → useEffect(() => { .. } → dispatch() 실행되었습니다.')
    // dispatch(logout2('login'))
    dispatch(logout())
    // console.log('containers → common → header → [Header.js] → useEffect(() => { .. } → dispatch() 종료되었습니다.')
  }, [dispatch])

  return <Header attribute={{ user: user, event: { logout: handlerLogout } }} />
}

export default React.memo(Result)
