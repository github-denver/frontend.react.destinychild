import React, { useEffect } from 'react'
import List from '../../components/child/List'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { childList, childListInitial } from '../../modules/child/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

  const { list, pagination, error, loading } = useSelector(({ childList, loading }) => {
    const temp = {}

    if (childList.data !== null) {
      temp.childList = childList.data.list
      temp.pagination = childList.data.pagination
    }

    return {
      list: temp.childList,
      pagination: temp.pagination,
      error: childList.error,
      loading: loading['child/DICTIONARY_LIST']
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
    dispatch(childList({ category: attribute.category, number }))

    return () => {
      // child/DICTIONARY_LIST 언 마운트 될 때 리덕스에서 데이터를 삭제
      dispatch(childListInitial())
    }
  }, [dispatch, attribute.location.pathname, attribute.category, number])

  return <List category={attribute.category} list={list} pagination={pagination} error={error} loading={loading} />
}

export default withRouter(Result)
