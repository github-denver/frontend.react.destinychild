import React, { useEffect } from 'react'
import List from '../../components/board/List'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { boardList, boardListInitial } from '../../modules/board/list'
import { withRouter } from 'react-router-dom'
import qs from 'qs'

const Result = (props) => {
  const { attribute } = props

  const { user, list, pagination, error, loading } = useSelector(({ user, boardList, loading }) => {
    const temp = {}

    if (user.user !== null) {
      const result = typeof user.user === 'string' ? JSON.parse(user.user) : user.user

      temp.user = result.user2
    }

    if (boardList.data !== null) {
      temp.boardList = boardList.data.list
      temp.pagination = boardList.data.pagination
    }

    return {
      user: temp.user,
      list: temp.boardList,
      pagination: temp.pagination,
      error: boardList.error,
      loading: loading['board/LIST']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  const prefixed = qs.parse(attribute.location.search, {
    ignoreQueryPrefix: true
  })

  let number = attribute.location.pathname
    .split('/')
    .filter((element) => {
      return element !== null && element !== undefined && element !== ''
    })
    .splice(-1)[0]

  let test = attribute.location.pathname
    .split('/')
    .filter((element) => {
      return element !== null && element !== undefined && element !== ''
    })
    .splice(-2)[0]

  if (number === 'list' || number === 'read' || test === 'read') {
    number = 1
  }

  useEffect(() => {
    // const number = typeof attribute.location.pathname.split('/').splice(-1)[0] !== 'string' ? attribute.location.pathname.split('/').splice(-1)[0] : 1

    dispatch(boardList({ category: attribute.category, number, select: prefixed.select, keyword: prefixed.keyword }))

    return () => {
      // board/LIST 언 마운트 될 때 리덕스에서 데이터를 삭제
      dispatch(boardListInitial())
    }
  }, [dispatch, attribute.category, attribute.location.pathname, prefixed.select, prefixed.keyword, number])

  return (
    <List
      user={user}
      select={prefixed.select}
      keyword={prefixed.keyword}
      category={attribute.category}
      list={list}
      pagination={pagination}
      error={error}
      loading={loading}
    />
  )
}

export default withRouter(Result)
