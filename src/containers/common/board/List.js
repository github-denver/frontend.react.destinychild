import React, { useEffect } from 'react'
import List from '../../../components/common/board/List'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { list as api } from '../../../modules/board/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, attribute } = props

  const { list, pagination, error, loading } = useSelector(({ list, loading }) => {
    const temp = {}

    if (list.data !== null) {
      temp.list = list.data.list
      temp.pagination = list.data.pagination
    }

    return {
      list: temp.list,
      pagination: temp.pagination,
      error: list.error,
      loading: loading['list/BOARD']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    const number = typeof location.pathname.split('/').splice(-1)[0] !== 'string' ? location.pathname.split('/').splice(-1)[0] : 1

    dispatch(api({ category: attribute.category, number }))
  }, [dispatch, location.pathname, attribute.category])

  return <List category={attribute.category} list={list} pagination={pagination} error={error} loading={loading} />
}

export default withRouter(Result)
