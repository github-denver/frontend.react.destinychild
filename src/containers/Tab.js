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
      loading: loading['tab/TAB_LIST']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    const number = typeof attribute.location.pathname.split('/').splice(-1)[0] !== 'string' ? attribute.location.pathname.split('/').splice(-1)[0] : 1

    dispatch(tabList({ category: attribute.category, number }))

    return () => {
      // console.log('visual/VISUAL_LIST 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(tabListInitial())
    }
  }, [dispatch, attribute.location.pathname, attribute.category])

  return <Tab category={attribute.category} tab={tab} error={error} loading={loading} />
}

export default withRouter(Result)
