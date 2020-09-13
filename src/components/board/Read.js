import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.read = styled.div`
  border-top: 2px solid #000;

  /* read_header
  ---------- ---------- ---------- ---------- ---------- */
  .read_header .title_local {
    display: block;
    padding: 16px 24px;
    font-family: 'NotoSansKR-Light-Hestia';
    font-weight: 300;
    font-size: 18px;
  }

  .read_header .text_read {
    margin-left: 24px;
    vertical-align: middle;
  }

  /* read_contents
  ---------- ---------- ---------- ---------- ---------- */
  .read_contents {
    padding: 16px 24px;
    min-height: 320px;
    border-top: 1px solid #e9e9e9;
    box-sizing: border-box;
    font-size: medium;
  }

  .read_contents img {
    max-width: 100%;
  }

  /* read_footer
  ---------- ---------- ---------- ---------- ---------- */
  .read_footer {
    border-top: 1px solid #e9e9e9;
  }

  .read_footer .group_button {
    margin-top: 24px;
  }

  /* information_read
  ---------- ---------- ---------- ---------- ---------- */
  .information_read {
    padding: 16px 24px;
    border-top: 1px solid #e9e9e9;
  }

  .information_read .text_read {
    font-family: 'NotoSansKR-Light-Hestia';
    font-size: 14px;
  }

  .information_read .inner_half {
    text-align: right;
  }

  .information_read .inner_half .text_read {
    margin-left: 24px;
  }

  .information_read .inner_half .text_read:first-child {
    margin-left: 0;
  }

  .information_read .inner_half:first-child {
    text-align: left;
  }

  .information_read .inner_half:first-child .text_read {
    margin-left: 0;
  }
`

const Read = (props) => {
  const { category, read, error, loading } = props

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → board → [Read.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → board → [Read.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !read) {
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
  }

  return (
    <>
      <Styled.read className="group_read">
        <div className="read_header">
          <strong className="title_local">
            <span
              className="group_profile"
              attribute={{ picture: read.picture }}
              style={{ backgroundImage: `url(http://localhost:4000/uploads/${read.picture})` }}></span>
            <span className="text_read">{read.subject}</span>
          </strong>

          <div className="information_read">
            <div className="group_half">
              <div className="inner_half">
                <span className="text_read text_write">{read.name}</span>
              </div>

              <div className="inner_half">
                <span className="text_read text_date">{read.regdate}</span>
                <span className="text_read text_count">{read.count}</span>
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
      </Styled.read>
    </>
  )
}

export default React.memo(Read)
