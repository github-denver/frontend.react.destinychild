import React, { useEffect } from 'react'
import Write from '../../components/board/Write'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { boardWrite, boardWriteInitial } from '../../modules/board/write'
import { withRouter } from 'react-router-dom'
import qs from 'qs'

const Result = (props) => {
  const { attribute } = props

  const { write, error, loading } = useSelector(({ boardWrite, loading }) => {
    const temp = {}

    if (boardWrite.data !== null) {
      temp.boardWrite = boardWrite.data.write
    }

    return {
      write: temp.boardWrite,
      error: boardWrite.error,
      loading: loading['board/BOARD_WRITE']
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  const prefixed = qs.parse(attribute.location.search, {
    ignoreQueryPrefix: true
  })

  useEffect(() => {
    const number = typeof attribute.location.pathname.split('/').splice(-1)[0] !== 'string' ? attribute.location.pathname.split('/').splice(-1)[0] : 1

    dispatch(boardWrite({ category: attribute.category, number, select: prefixed.select, keyword: prefixed.keyword }))

    return () => {
      console.log('board/BOARD_WRITE 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(boardWriteInitial())
    }
  }, [dispatch, attribute.category, attribute.location.pathname, prefixed.select, prefixed.keyword])

  return <Write select={prefixed.select} keyword={prefixed.keyword} category={attribute.category} write={write} error={error} loading={loading} />
}

export default withRouter(Result)
