import React, { useEffect, useCallback } from 'react'
import Write from '../../components/board/Write'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { changeField, changeThumbnail, initialize } from '../../modules/board/write'
import { withRouter } from 'react-router-dom'

const Result = (props) => {
  const { attribute } = props

  const { title, body, thumbnail } = useSelector(({ boardWrite }) => {
    // console.log('containers → board → [Write.js] → boardWrite: ', boardWrite)

    return {
      title: boardWrite.title,
      body: boardWrite.body,
      thumbnail: boardWrite.thumbnail
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  const field = useCallback((payload) => dispatch(changeField(payload)), [dispatch])

  const upload = useCallback((payload) => dispatch(changeThumbnail(payload)), [dispatch])

  useEffect(() => {
    // console.log('containers → board → [Write.js] → useEffect(() => { .. }')

    return () => {
      // console.log('board/BOARD_WRITE 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(initialize())
    }
  }, [dispatch])

  return <Write attribute={{ category: attribute.category, title: title, body: body, thumbnail: thumbnail, field: field, upload: upload }} />
}

export default withRouter(Result)
