import React, { useEffect } from 'react'
import Read from '../../components/guide/Read'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { boardRead, boardReadInitial } from '../../modules/board/read'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

  const { read, error, loading } = useSelector(({ boardRead, loading }) => {
    const temp = {}

    if (boardRead.data !== null) {
      temp.boardRead = boardRead.data.result[0]
    }

    return {
      read: temp.boardRead,
      error: boardRead.error,
      loading: loading['board/BOARD_READ']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    const number = attribute.location.pathname.split('/').splice(-1)[0]

    dispatch(boardRead({ category: attribute.category, number }))

    return () => {
      console.log('board/BOARD_READ 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(boardReadInitial())
    }
  }, [dispatch, attribute.location.pathname, attribute.category])

  return <Read category={attribute.category} read={read} error={error} loading={loading} />
}

export default withRouter(Result)
