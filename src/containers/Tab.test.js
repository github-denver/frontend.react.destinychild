import React, { useEffect } from 'react'
import Tab from '../components/Tab'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { tabList, tabListInitial } from '../modules/tab/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

  const { tab, error, loading } = useSelector(({ tabList, loading }) => {
    const temp = {}

    if (tabList.data !== null) {
      temp.tabList = tabList.data.list
    }

    return {
      tab: temp.tabList,
      error: tabList.error,
      loading: loading['tab/LIST']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  let number = attribute.location.pathname
    .split('/')
    .filter((element) => {
      return element !== null && element !== undefined && element !== ''
    })
    .splice(-1)[0]

  if (number === 'list' || number === 'read') {
    number = 1
  }

  useEffect(() => {
    dispatch(tabList({ category: attribute.category, number }))

    return () => {
      // visual/LIST 언 마운트 될 때 리덕스에서 데이터를 삭제
      dispatch(tabListInitial())
    }
  }, [dispatch, attribute.location.pathname, attribute.category, number])

  return <Tab category={attribute.category} tab={tab} error={error} loading={loading} />
}

export default withRouter(Result)
