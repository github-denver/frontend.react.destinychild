import React, { useEffect } from 'react'
import List from '../../../components/common/media/Media'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { list as api } from '../../../modules/media/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

  const { list, pagination, error, loading } = useSelector(({ media, loading }) => {
    const temp = {}

    if (media.data !== null) {
      temp.list = media.data.list
      temp.pagination = media.data.pagination
    }

    return {
      list: temp.list,
      pagination: temp.pagination,
      error: media.error,
      loading: loading['media/MEDIA']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(api({ category: attribute.category, number: 1 }))
  }, [dispatch])

  return <List category={attribute.category} list={list} pagination={pagination} error={error} loading={loading} />
}

export default withRouter(Result)
