import React, { useEffect } from 'react'
import List from '../../components/media/Media'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { mediaList, mediaListInitial } from '../../modules/media/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

  const { list, pagination, error, loading } = useSelector(({ mediaList, loading }) => {
    const temp = {}

    if (mediaList.data !== null) {
      temp.mediaList = mediaList.data.list
      temp.pagination = mediaList.data.pagination
    }

    return {
      list: temp.mediaList,
      pagination: temp.pagination,
      error: mediaList.error,
      loading: loading['media/LIST']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(mediaList({ category: attribute.category, number: 1 }))

    return () => {
      // media/LIST 언 마운트 될 때 리덕스에서 데이터를 삭제
      dispatch(mediaListInitial())
    }
  }, [dispatch, attribute.category])

  return <List category={attribute.category} list={list} pagination={pagination} error={error} loading={loading} />
}

export default withRouter(Result)
