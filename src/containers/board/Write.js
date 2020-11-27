import React, { useEffect, useCallback } from 'react'
import Write from '../../components/board/Write'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { changeField, changeThumbnail, initialize } from '../../modules/board/write'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute, history } = props

  const { user, title, body, thumbnail } = useSelector(({ user, boardWrite }) => {
    // console.log('containers → board → [Write.js] → user: ', user)
    // console.log('containers → board → [Write.js] → boardWrite: ', boardWrite)

    const temp = {}

    if (user.user !== null) {
      const result = typeof user.user === 'string' ? JSON.parse(user.user) : user.user

      temp.user = result.user2
    }

    return {
      user: temp.user,
      title: boardWrite.title,
      body: boardWrite.body,
      thumbnail: boardWrite.thumbnail
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  let number = attribute.location.pathname
    .split('/')
    .filter((element) => {
      return element !== null && element !== undefined && element !== ''
    })
    .splice(-1)[0]

  if (number === 'list' || number === 'read') {
    number = 1
  }

  const field = useCallback((payload) => dispatch(changeField(payload)), [dispatch])

  const upload = useCallback((payload) => dispatch(changeThumbnail(payload)), [dispatch])

  useEffect(() => {
    // console.log('containers → board → [Write.js] → useEffect(() => { .. }')
    // console.log('containers → board → [Write.js] → useEffect(() => { .. } → !user: ', !user)
    if (!user) {
      // console.log('containers → board → [Write.js] → useEffect(() => { .. } → !user: ', !user)

      history.push(`/beluga`)
    }

    return () => {
      // console.log('board/BOARD_WRITE 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(initialize())
    }
  }, [dispatch, history, user])

  return <Write attribute={{ category: attribute.category, title: title, body: body, thumbnail: thumbnail, field: field, upload: upload }} />
}

export default withRouter(Result)
