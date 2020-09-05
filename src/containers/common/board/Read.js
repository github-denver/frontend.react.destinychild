import React, { useEffect } from 'react'
import Read from '../../../components/common/board/Read'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { read as api } from '../../../modules/board/read'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, match, attribute } = props

  const { read, error, loading } = useSelector(({ read, loading }) => {
    const temp = {}

    if (read.data !== null) {
      temp.read = read.data.result[0]
    }

    return {
      read: temp.read,
      error: read.error,
      loading: loading['read/BOARD']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    const number = location.pathname.split('/').splice(-1)[0]
    console.log('containers → common → read → [Read.js] → number: ', number)

    dispatch(api({ category: attribute.category, number }))
  }, [dispatch, location.pathname, attribute.category])

  return <Read category={attribute.category} read={read} error={error} loading={loading} />
}

export default withRouter(Result)
