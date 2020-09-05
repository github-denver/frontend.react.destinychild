import React, { useEffect } from 'react'
import Banner from '../../../components/common/banner/Banner'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { list as api } from '../../../modules/banner/event'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

  const { banner, error, loading } = useSelector(({ event, loading }) => {
    console.log('event: ', event)

    const temp = {}

    if (event.data !== null) {
      temp.banner = event.data.list
    }

    return {
      banner: temp.banner,
      error: event.error,
      loading: loading['event/BANNER']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(api({ category: attribute.category }))
  }, [dispatch])

  return <Banner banner={banner} error={error} loading={loading} />
}

export default withRouter(Result)
