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
    const formData = new FormData()
    formData.append('category', attribute.category)
    formData.append('subject', title)
    formData.append('content', body)
    formData.append('thumbnail', thumbnail)

    for (let i = 0; i < thumbnail.length; i++) {
      console.log(thumbnail[i])
      // formData.append(`thumbnail`, thumbnail[i])
    }

    if (owner) {
      dispatch(boardModify({ category: attribute.category, number: number, payload: formData }))

      history.push(`/beluga/${attribute.category}/read/${number}`)
    } else {
      dispatch(boardWrite({ category: attribute.category, payload: formData }))
    }
  }

  const cancel = () => {
    history.goBack()
  }

  useEffect(() => {
    if (data) {
      history.push(`/beluga/${data.service}/read/${data.number}`)
    }

    if (error) {
      console.error(error)
    }
  }, [history, data, error])

  return <WriteActionButton attribute={{ publish: publish, cancel: cancel, owner: !!owner }} />
}

export default withRouter(Result)
