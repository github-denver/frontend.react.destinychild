import React, { useEffect } from 'react'
import Read from '../../components/board/Read'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { boardRead, boardReadInitial } from '../../modules/board/read'
import { withRouter } from 'react-router-dom'
import PostActionButton from '../../components/PostActionButton'
import { setOriginalPost } from '../../modules/board/modify'
import { removePost } from '../../lib/api/read'

const Result = (props) => {
  const { attribute, history } = props

  const { read, error, loading, user } = useSelector(({ boardRead, loading, user }) => {
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
      loading: loading['board/READ'],
      user: temp.user
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

  useEffect(() => {
    dispatch(boardRead({ category: attribute.category, number }))

    return () => {
      // board/READ 언 마운트 될 때 리덕스에서 데이터를 삭제
      dispatch(boardReadInitial())
    }
  }, [dispatch, attribute.category, attribute.location.pathname, number])

  const edit = () => {
    dispatch(setOriginalPost({ result: [read] }))

    history.push(`/beluga/${attribute.category}/modify/${read.number}`)
  }

  const remove = async () => {
    try {
      await removePost({ category: attribute.category, number })
      history.push(`/beluga/${attribute.category}/list`)
    } catch (error) {
      console.error(error)
    }
  }

  const owner = (function () {
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
