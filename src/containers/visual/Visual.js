import React, { useEffect } from 'react'
import Visual from '../../components/visual/Visual'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { visualList, visualListInitial } from '../../modules/visual/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

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

  let number = attribute.location.pathname
    .split('/')
    .filter((element) => {
      return element !== null && element !== undefined && element !== ''
    })
    .splice(-1)[0]

  let test = attribute.location.pathname
    .split('/')
    .filter((element) => {
      return element !== null && element !== undefined && element !== ''
    })
    .splice(-2)[0]

  if (number === 'list' || number === 'read' || test === 'read') {
    number = 1
  }

  useEffect(() => {
    dispatch(visualList({ category: attribute.category, number }))

    return () => {
      // console.log('visual/VISUAL_LIST 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(visualListInitial())
    }
  }, [dispatch, attribute.location.pathname, attribute.category, number])

  return <Visual visual={list} error={error} loading={loading} />
}

export default withRouter(Result)
