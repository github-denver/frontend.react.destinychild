import React, { useState, useEffect, useCallback } from 'react'
import Modify from '../../components/board/Modify'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { boardRead } from '../../modules/board/read'
import { changeField, changeThumbnail, initialize } from '../../modules/board/modify'
import { withRouter } from 'react-router-dom'
import WriteActionButton from '../WriteActionButton'

const Result = (props) => {
  const { attribute, history } = props

  const [board, setBoard] = useState(false)

  const { user, read, owner, title, body, thumbnail } = useSelector(({ user, boardRead, boardModify }) => {
    // console.log('containers → board → [Modify.js] → user: ', user)
    // console.log('containers → board → [Modify.js] → boardRead: ', boardRead)
    // console.log('containers → board → [Modify.js] → boardModify: ', boardModify)

    const temp = {}

    if (user.user !== null) {
      const result = typeof user.user === 'string' ? JSON.parse(user.user) : user.user

      temp.user = result.user2
    }

    if (boardRead.data !== null) {
      temp.boardRead = boardRead.data.result[0]
    }

    if (boardRead.data !== null) {
      temp.owner = boardRead.data.result[0].id
    }

    return {
      user: temp.user,
      read: temp.boardRead,
      title: boardModify.title,
      body: boardModify.body,
      thumbnail: boardModify.thumbnail,
      owner: temp.owner
    }
  }, shallowEqual)
  // console.log('containers → board → [Modify.js] → read: ', read)

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
    // console.log('containers → board → [Modify.js] → useEffect(() => { .. }')

    // console.log('containers → board → [Modify.js] → useEffect(() => { .. } → !user: ', !user)
    if (!user) {
      history.push(`/beluga`)
    }

    if (!board) {
      setBoard(true)

      dispatch(boardRead({ category: attribute.category, number }))
    }

    return () => {
      // console.log('* board/BOARD_MODIFY 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(initialize())
    }
  }, [attribute.category, board, dispatch, history, number, read, user])

  return (
    <Modify
      attribute={{ category: attribute.category, read: read, title: title, body: body, thumbnail: thumbnail, field: field, upload: upload }}
      actionButton={<WriteActionButton attribute={{ category: attribute.category, owner: owner }} />}
    />
  )
}

export default withRouter(Result)
