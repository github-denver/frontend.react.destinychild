import React, { useEffect } from 'react'
import Banner from '../../../components/common/banner/Banner'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { list as api } from '../../../modules/banner/update'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

  const { banner, error, loading } = useSelector(({ update, loading }) => {
    console.log('update: ', update)

    const temp = {}

    if (update.data !== null) {
      temp.banner = update.data.list
    }

    return {
      banner: temp.banner,
      error: update.error,
      loading: loading['update/BANNER']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(api({ category: attribute.category }))
  }, [dispatch])

  return <Banner banner={banner} error={error} loading={loading} />
}

export default withRouter(Result)
