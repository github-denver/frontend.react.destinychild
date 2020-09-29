import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Field from '../Field'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Styled = {}

Styled.read = styled.div``

const Read = (props) => {
  // const { category, read, error, loading } = props
  const { error } = props

  const [value, setValue] = useState('')

  if (error) {
    if (error.response && error.response.status === 404) {
      console.group('components → board → [Read.js]')
      console.log('존재하지 않는 데이터입니다.')
      console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    console.group('components → board → [Read.js]')
    console.log('에러가 발생했어요!')
    console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  /* if (loading || !read) {
    // console.group('components → board → [Read.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!read) {
    // console.group('components → board → [Read.js]')
    // console.log('목록이 존재하지 않습니다.')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  } */

  return (
    <Styled.read className="group_read">
      <div className="read_header">
        <strong className="title_subject">
          <Field attribute={{ label: '제목', name: 'subject', type: 'text' }} />
        </strong>
      </div>

      <div className="read_contents">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>

      <div className="read_footer">
        <div className="information_read">
          <Field attribute={{ label: '대표 이미지', name: 'thumbnail', type: 'file' }} />
        </div>

        <div className="group_button">
          <Link to="/" className="button_global button_default" role="button">
            등록
          </Link>
          <button type="submit" className="button_global button_default">
            취소
          </button>
        </div>
      </div>
    </Styled.read>
  )
}

export default Read
