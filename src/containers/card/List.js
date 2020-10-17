import React, { useEffect } from 'react'
import Card from '../../components/card/List'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { cardList, cardListInitial } from '../../modules/card/list'
import { withRouter } from 'react-router-dom'
import qs from 'qs'

const Result = (props) => {
  const { attribute } = props

  const { list, pagination, error, loading } = useSelector(({ cardList, loading }) => {
    const temp = {}

    if (cardList.data !== null) {
      temp.cardList = cardList.data.list
      temp.pagination = cardList.data.pagination
    }

    return {
      list: temp.cardList,
      pagination: temp.pagination,
      error: cardList.error,
      loading: loading['card/CARD_LIST']
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
      // console.log('card/CARD_LIST 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(cardListInitial())
    }
  }, [dispatch, attribute.category, attribute.location.pathname, prefixed.select, prefixed.keyword, number])

  return (
    <Card
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
