import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { boardWrite, boardUpdate } from '../modules/board/write'
import { withRouter } from 'react-router-dom'
import WriteActionButton from '../components/WriteActionButton'

const Result = (props) => {
  const { attribute, history, location } = props
  console.log('containers → [WriteActionButton.js] → attribute: ', attribute)
  console.log('containers → [WriteActionButton.js] → history: ', history)

  const { title, body, thumbnail, data, error, owner } = useSelector(({ boardWrite }) => {
    console.log('containers → [WriteActionButton.js] → boardWrite: ', boardWrite)

    return {
      title: boardWrite.title,
      body: boardWrite.body,
      thumbnail: boardWrite.thumbnail,
      data: boardWrite.data,
      error: boardWrite.error,
      owner: boardWrite.owner
    }
  })
  console.log('containers → [WriteActionButton.js] → title: ', title)
  console.log('containers → [WriteActionButton.js] → body: ', body)
  console.log('containers → [WriteActionButton.js] → thumbnail: ', thumbnail)
  console.log('containers → [WriteActionButton.js] → data: ', data)
  console.log('containers → [WriteActionButton.js] → error: ', error)
  console.log('containers → [WriteActionButton.js] → owner: ', owner)

  const dispatch = useDispatch()

  const number = location.pathname.split('/').splice(-1)[0]

  const publish = () => {
    console.log('containers → [WriteActionButton.js] → const publish = () => { .. } → owner: ', owner)

    const formData = new FormData()
    formData.append('category', attribute.category)
    formData.append('subject', title)
    formData.append('content', body)
    formData.append('thumbnail', thumbnail)

    if (owner) {
      console.log('containers → [WriteActionButton.js] → const publish = () => { .. } → modify')
      dispatch(boardUpdate({ category: attribute.category, number: number, payload: formData }))
    } else {
      console.log('containers → [WriteActionButton.js] → const publish = () => { .. } → write')
      dispatch(boardWrite({ category: attribute.category, payload: formData }))
    }
  }

  const cancel = () => {
    history.goBack()
  }

  useEffect(() => {
    console.log('containers → [WriteActionButton.js] → useEffect(() => { .. } → data: ', data)

    if (data) {
      console.log('containers → [WriteActionButton.js] → X됐어요!')

      history.push(`/beluga/${data.service}/read/${data.number}`)
    }

    if (error) {
      console.log('containers → [WriteActionButton.js] → error: ', error)
    }
  }, [history, data, error])

  return <WriteActionButton attribute={{ publish: publish, cancel: cancel, owner: !!owner }} />
}

export default withRouter(Result)
