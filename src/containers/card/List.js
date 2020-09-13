import React, { useEffect } from 'react'
import Card from '../../components/card/List'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { cardList, cardListInitial } from '../../modules/card/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, attribute } = props

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

  useEffect(() => {
    const number = typeof location.pathname.split('/').splice(-1)[0] !== 'string' ? location.pathname.split('/').splice(-1)[0] : 1

    dispatch(cardList({ category: attribute.category, number }))

    return () => {
      console.log('card/CARD_LIST 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(cardListInitial())
    }
  }, [dispatch, location.pathname, attribute.category])

  return <Card category={attribute.category} list={list} pagination={pagination} error={error} loading={loading} />
}

export default withRouter(Result)
