import React, { useEffect } from 'react'
import Read from '../../components/child/Read'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { childRead, childReadInitial } from '../../modules/child/read'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, attribute } = props

  const { read, error, loading } = useSelector(({ childRead, loading }) => {
    const temp = {}

    if (childRead.data !== null) {
      temp.childRead = childRead.data.result[0]
    }

    return {
      read: temp.childRead,
      error: childRead.error,
      loading: loading['child/CHILD_DICTIONARY_READ']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    const number = location.pathname.split('/').splice(-1)[0]

    dispatch(childRead({ category: attribute.category, number }))

    return () => {
      console.log('child/CHILD_DICTIONARY_READ 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(childReadInitial())
    }
  }, [dispatch, location.pathname, attribute.category])

  return <Read category={attribute.category} read={read} error={error} loading={loading} />
}

export default withRouter(Result)
