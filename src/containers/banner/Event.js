import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { eventListInitial, eventList } from '../../modules/banner/event'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

  const { list, error, loading } = useSelector(({ eventList }) => {
    const temporary = {}

    if (typeof eventList.data !== 'undefined') {
      if (eventList.data.data !== null) {
        temporary.eventList = eventList.data.data.list
      }
    }

    return {
      list: temporary.eventList,
      error: eventList.error,
      loading: eventList.loading
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(eventList({ category: attribute.category, stateType: 'post' }))

    return () => {
      // event/LIST 언 마운트 될 때 리덕스에서 데이터를 삭제
      dispatch(eventListInitial())
    }
  }, [dispatch, attribute.category])

  return <Banner category={attribute.category} banner={list} error={error} loading={loading} />
}

export default withRouter(Result)
