// import React, { useRef, useEffect, useState } from 'react'
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Field from '../Field'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const Styled = {}

Styled.read = styled.div``

const Read = ({ attribute }) => {
  // const [subject, setSubject] = useState('')

  const { read, title, body, field, upload } = attribute

  const quillElement = useRef(null) // quill div element
  const quillInstance = useRef(null) // quill instance

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '내용을 입력해 주세요.',
      modules: {
        // toolbar: []
      }
    })

    // quill에 text-change 이벤트 핸들러를 등록합니다.
    const quill = quillInstance.current

    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        field({ key: 'body', value: quill.root.innerHTML })
      }
    })
  }, [field])

  const mounted = useRef(false)

  useEffect(() => {
    if (read && !mounted.current) {
      mounted.current = true

      quillInstance.current.root.innerHTML = read && typeof read !== 'undefined' ? read.content : body
    }
  }, [body, read])

  const onChangeTitle = (event) => {
    field({ key: 'title', value: event.target.value })
  }

  const onChangeFile = (event) => {
    let files = null
    let result = null

    if (window.FileReader) {
      // 이미지 파일만 통과합니다.
      if (!event.target.files[0].type.match(/image\//)) return

      // 읽기
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])

      files = event.target.files[0]

      // 읽은 후
      reader.onload = (event) => {
        result = event.target.result

        const formData = new FormData()
        formData.append('files', files)
        formData.append('result', result)

        upload({ key: 'thumbnail', value: files })
      }
    } else {
    }
  }

  /* const onChange = (value) => {
    setSubject(value)
  } */

  return (
    <Styled.read className="group_read">
      <div className="read_header">
        <strong className="title_subject">
          {read && typeof read !== 'undefined' ? (
            <Field attribute={{ type: 'text', name: 'subject', defaultValue: read.subject, value: title, label: '제목', event: onChangeTitle }} />
          ) : (
            <Field attribute={{ type: 'text', name: 'subject', label: '제목', event: onChangeTitle }} />
          )}

          {/* <input type="text" defaultValue={defaultValue} onChange={(event) => onChange(event.target.value)} />} */}
        </strong>
      </div>

      <div className="read_contents">
        <div ref={quillElement} />
      </div>

      <div className="read_footer">
        <div className="information_read">
          <Field attribute={{ type: 'file', name: 'thumbnail', label: '대표 이미지', event: onChangeFile }} />
        </div>
      </div>
    </Styled.read>
  )
}

export default Read
