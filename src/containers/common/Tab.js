import React, { useEffect } from 'react'
import Tab from '../../components/common/Tab'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { list } from '../../modules/tab/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, attribute } = props
  // console.log('containers → common → tab → [Tab.js] → location: ', location)
  // console.log('containers → common → tab → [Tab.js] → attribute: ', attribute)
  // console.log('')

  // const sensor = useRef(false)

  const { tab, error, loading } = useSelector(({ tab, loading }) => {
    const data = {}

    if (tab.data !== null) {
      data.tab = tab.data.list
    }

    return {
      tab: data.tab,
      error: tab.error,
      loading: loading['tab/TAB']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  /*
  useEffect(() => {
    const result = !tab

    if (result) return

    sensor.current = true
  }, [tab])
  */

  useEffect(() => {
    const number = typeof location.pathname.split('/').splice(-1)[0] !== 'string' ? location.pathname.split('/').splice(-1)[0] : 1
    // console.log('containers → common → tab → [Tab.js] → number: ', number)

    /*
    if (sensor.current) {
      sensor.current = true

      return
    }
    */

    dispatch(list({ category: attribute.category, number }))
  }, [dispatch, location.pathname, attribute.category])

  return <Tab category={attribute.category} tab={tab} error={error} loading={loading} />
}

export default withRouter(Result)
