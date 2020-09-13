import React, { useEffect } from 'react'
import Visual from '../../components/visual/Visual'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { visualList, visualListInitial } from '../../modules/visual/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { location, attribute } = props

  const { list, error, loading } = useSelector(({ visualList, loading }) => {
    const temp = {}

    if (visualList.data !== null) {
      temp.visualList = visualList.data.list
    }

    return {
      list: temp.visualList,
      error: visualList.error,
      loading: loading['visual/VISUAL_LIST']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    const number = typeof location.pathname.split('/').splice(-1)[0] !== 'string' ? location.pathname.split('/').splice(-1)[0] : 1

    dispatch(visualList({ category: attribute.category, number }))

    return () => {
      console.log('visual/VISUAL_LIST 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(visualListInitial())
    }
  }, [dispatch, location.pathname, attribute.category])

  return <Visual visual={list} error={error} loading={loading} />
}

export default withRouter(Result)
