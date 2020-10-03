import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { updateList, updateListInitial } from '../../modules/banner/update'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

  const { list, error, loading } = useSelector(({ updateList, loading }) => {
    const temp = {}

    if (updateList.data !== null) {
      temp.updateList = updateList.data.list
    }

    return {
      list: temp.updateList,
      error: updateList.error,
      loading: loading['update/UPDATE_LIST']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateList({ category: attribute.category }))

    return () => {
      // console.log('update/UPDATE_LIST 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(updateListInitial())
    }
  }, [dispatch, attribute.category])

  return <Banner category={attribute.category} banner={list} error={error} loading={loading} />
}

export default withRouter(Result)
