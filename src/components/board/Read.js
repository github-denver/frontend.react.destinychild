import React from 'react'
import styled from 'styled-components'

import moment from 'moment'
import 'moment/locale/ko'
moment.locale('ko')

const Styled = {}

Styled.read = styled.div``

const Loading = () => {
  return (
    <Styled.read className="group_read loading">
      <div className="read_header">
        <strong className="title_subject">
          <span className="group_profile"></span>
          <span className="text_subject">
            <span className="text_local"></span>
          </span>
        </strong>

        <div className="information_read">
          <div className="group_half">
            <span className="text_local"></span>
          </div>
        </div>
      </div>

      <div className="read_contents">
        <span className="text_local"></span>
      </div>

      <div className="read_footer">
        <div className="group_button group_half">
          <div className="inner_half">
            <span className="button_global button_default"></span>
          </div>

          <div className="inner_half">
            <span className="button_global button_default"></span>
            <span className="button_global button_default"></span>
          </div>
        </div>
      </div>
    </Styled.read>
  )
}

const Read = (props) => {
  const { read, error, loading, actionButton } = props

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

  if (loading || !read) {
    console.group('components → board → [Read.js]')
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    console.groupEnd()

    return <Loading />
  }

  if (!read) {
    console.group('components → board → [Read.js]')
    console.log('목록이 존재하지 않습니다.')
    console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  const regdate = moment(read.regdate).format('YYYY-MM-DD')

  return (
    <Styled.read className="group_read">
      <div className="read_header">
        <strong className="title_subject">
          <span
            className="group_profile"
            attribute={{ picture: read.picture }}
            style={{ backgroundImage: `url(http://localhost:4000/uploads/${read.picture})` }}></span>
          <span className="text_subject">{read.subject}</span>
        </strong>

        <div className="information_read">
          <div className="group_half">
            <div className="inner_half">
              <span className="text_read text_write">{read.name}</span>
            </div>

            <div className="inner_half">
              <span className="text_read text_date">{regdate}</span>
              <span className="text_read text_count">{read.count}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="read_contents" dangerouslySetInnerHTML={{ __html: read.content }}></div>

      <div className="read_footer">{actionButton}</div>
    </Styled.read>
  )
}

export default Read
