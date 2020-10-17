import React, { useEffect } from 'react'
import Read from '../../components/board/Read'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { boardRead, boardReadInitial } from '../../modules/board/read'
import { withRouter } from 'react-router-dom'
import PostActionButton from '../../components/PostActionButton'
import { setOriginalPost } from '../../modules/board/write'
import { removePost } from '../../lib/api/read'

const Result = (props) => {
  const { attribute, history } = props
  // console.log('containers → board → [Read.js] → attribute: ', attribute)

  const { read, error, loading, user } = useSelector(({ boardRead, loading, user }) => {
    // console.log('containers → board → [Read.js] → boardRead: ', boardRead)
    // console.log('containers → board → [Read.js] → user: ', user)

    const temp = {}

    if (boardRead.data !== null) {
      temp.boardRead = boardRead.data.result[0]
    }

    if (user.user !== null) {
      temp.user = user.user.user2
    }

    return {
      read: temp.boardRead,
      error: boardRead.error,
      loading: loading['board/BOARD_READ'],
      user: temp.user
    }
  }, shallowEqual)
  // console.log('containers → board → [Read.js] → read: ', read)

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

  useEffect(() => {
    dispatch(boardRead({ category: attribute.category, number }))

    return () => {
      // console.log('board/BOARD_READ 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(boardReadInitial())
    }
  }, [dispatch, attribute.category, attribute.location.pathname, number])

  const edit = () => {
    // console.log('containers → board → [Read.js] → const edit = () => { .. }')
    // console.log('containers → board → [Read.js] → attribute.category: ', attribute.category)
    // console.log('containers → board → [Read.js] → read: ', read)

    dispatch(setOriginalPost({ result: [read] }))

    history.push(`/beluga/${attribute.category}/write/${read.number}`)
  }

  const remove = async () => {
    try {
      await removePost({ category: attribute.category, number })
      history.push(`/beluga/${attribute.category}/list`)
    } catch (error) {
      // console.log('containers → board → [Read.js] → const remove = () => { .. }')
      // console.log('containers → board → [Read.js] → error: ', error)
    }
  }

  const owner = (function () {
    // console.log('containers → board → [Read.js] → const owner = () => { .. }')
    // console.log('containers → board → [Read.js] → user: ', user)
    // console.log('containers → board → [Read.js] → read: ', read)

    return (user && user.id) === (read && read.id)
  })()

  return (
    <Read
      category={attribute.category}
      read={read}
      error={error}
      loading={loading}
      actionButton={<PostActionButton attribute={{ category: attribute.category, number: number, edit: edit, owner: owner, remove: remove }} />}
    />
  )
}

export default withRouter(Result)
