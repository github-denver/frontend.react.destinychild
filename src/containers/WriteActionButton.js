import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { boardWrite } from '../modules/board/write'
import { boardModify } from '../modules/board/modify'
import { withRouter } from 'react-router-dom'
import WriteActionButton from '../components/WriteActionButton'

const Result = (props) => {
  const { attribute, history, location } = props

  const { title, body, thumbnail, data, error, owner } = useSelector(({ boardWrite, boardModify }) => {
    return {
      title: boardWrite.title,
      body: boardWrite.body,
      thumbnail: boardWrite.thumbnail,
      data: boardWrite.data,
      error: boardWrite.error,
      owner: attribute.owner
    }
  })

  const dispatch = useDispatch()

  const number = location.pathname.split('/').splice(-1)[0]

  const publish = () => {
    // console.log('containers → [WriteActionButton.js] → const publish = () => { .. } → owner: ', owner)

    const formData = new FormData()
    formData.append('category', attribute.category)
    formData.append('subject', title)
    formData.append('content', body)
    formData.append('thumbnail', thumbnail)

    if (owner) {
      // console.log('containers → [WriteActionButton.js] → const publish = () => { .. } → modify')

      dispatch(boardModify({ category: attribute.category, number: number, payload: formData }))

      history.push(`/beluga/${attribute.category}/read/${number}`)
    } else {
      // console.log('containers → [WriteActionButton.js] → const publish = () => { .. } → write')

      dispatch(boardWrite({ category: attribute.category, payload: formData }))
    }
  }

  const cancel = () => {
    history.goBack()
  }

  useEffect(() => {
    // console.log('containers → [WriteActionButton.js] → useEffect(() => { .. } → data: ', data)

    if (data) {
      // console.log('containers → [WriteActionButton.js] → useEffect(() => { .. } → ', `/beluga/${data.service}/read/${data.number}`)

      history.push(`/beluga/${data.service}/read/${data.number}`)
    }

    if (error) {
      // console.log('containers → [WriteActionButton.js] → useEffect(() => { .. } → error: ', error)
    }
  }, [history, data, error])

  return <WriteActionButton attribute={{ publish: publish, cancel: cancel, owner: !!owner }} />
}

export default withRouter(Result)
