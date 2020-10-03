import React, { useEffect } from 'react'
import Guide from '../../components/guide/List'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { boardList, boardListInitial } from '../../modules/board/list'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

  const { list, pagination, error, loading } = useSelector(({ boardList, loading }) => {
    const temp = {}

    if (boardList.data !== null) {
      temp.boardList = boardList.data.list
      temp.pagination = boardList.data.pagination
    }

    return {
      list: temp.boardList,
      pagination: temp.pagination,
      error: boardList.error,
      loading: loading['board/BOARD_LIST']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    const number = typeof attribute.location.pathname.split('/').splice(-1)[0] !== 'string' ? attribute.location.pathname.split('/').splice(-1)[0] : 1

    dispatch(boardList({ category: attribute.category, number }))

    return () => {
      // console.log('board/BOARD_LIST 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(boardListInitial())
    }
  }, [dispatch, attribute.location.pathname, attribute.category])

  return <Guide category={attribute.category} list={list} pagination={pagination} error={error} loading={loading} />
}

export default withRouter(Result)
