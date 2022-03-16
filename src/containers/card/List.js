import React, { useEffect } from 'react'
import Card from '../../components/card/List'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { cardList, cardListInitial } from '../../modules/card/list'
import { withRouter } from 'react-router-dom'
import qs from 'qs'

const Result = (props) => {
  const { attribute } = props

  const { user, list, pagination, error, loading } = useSelector(({ user, cardList, loading }) => {
    const temp = {}

    if (user.user !== null) {
      const result = typeof user.user === 'string' ? JSON.parse(user.user) : user.user

      temp.user = result.user2
    }

    if (cardList.data !== null) {
      temp.cardList = cardList.data.list
      temp.pagination = cardList.data.pagination
    }

    return {
      user: temp.user,
      list: temp.cardList,
      pagination: temp.pagination,
      error: cardList.error,
      loading: loading['card/LIST']
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
    dispatch(cardList({ category: attribute.category, number, select: prefixed.select, keyword: prefixed.keyword }))

    return () => {
      // card/LIST 언 마운트 될 때 리덕스에서 데이터를 삭제
      dispatch(cardListInitial())
    }
  }, [dispatch, attribute.category, attribute.location.pathname, prefixed.select, prefixed.keyword, number])

  return (
    <Card
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
