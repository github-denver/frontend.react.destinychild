import React, { useEffect } from 'react'
import Card from '../../../components/common/card/Card'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { list as api } from '../../../modules/card/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, attribute } = props

  const { list, pagination, error, loading } = useSelector(({ card, loading }) => {
    const temp = {}

    if (card.data !== null) {
      temp.list = card.data.list
      temp.pagination = card.data.pagination
    }

    return {
      list: temp.list,
      pagination: temp.pagination,
      error: card.error,
      loading: loading['card/BOARD']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    const number = typeof location.pathname.split('/').splice(-1)[0] !== 'string' ? location.pathname.split('/').splice(-1)[0] : 1

    dispatch(api({ category: attribute.category, number }))
  }, [dispatch, location.pathname, attribute.category])

  return <Card category={attribute.category} list={list} pagination={pagination} error={error} loading={loading} />
}

export default withRouter(Result)
