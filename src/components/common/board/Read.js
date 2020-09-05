import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.read = styled.div``

const Read = (props) => {
  const { category, read, error, loading } = props

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

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!read) {
    console.group('components → board → [Read.js]')
    console.log('목록이 존재하지 않습니다.')
    console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <div className="group_read">
        <div className="read_header">
          <strong className="title_local">
            <span className="group_profile"></span>
            <span className="text_local">{read.subject}</span>
          </strong>

          <div className="information_local">
            <div className="group_half">
              <div className="inner_half">
                <span className="text_local text_write">{read.name}</span>
              </div>

              <div className="inner_half">
                <span className="text_local text_date">{read.regdate}</span>
                <span className="text_local text_count">{read.count}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="read_contents" dangerouslySetInnerHTML={{ __html: read.content }}></div>

        <div className="read_footer">
          <div className="group_button group_half">
            <div className="inner_half">
              <Link to={`/beluga/${category}/list/1`} className="button_global button_default" role="button">
                목록
              </Link>
            </div>
            <div className="inner_half">
              <Link to="/" className="button_global button_default" role="button">
                수정
              </Link>
              <button type="submit" className="button_global button_default">
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Read)
