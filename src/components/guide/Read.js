import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.read = styled.div``

const Read = (props) => {
  const { read, error, loading } = props

  if (error) {
    if (error.response && error.response.status === 404) {
      console.group('components → guide → [Read.js]')
      console.log('존재하지 않는 데이터입니다.')
      console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    console.group('components → guide → [Read.js]')
    console.log('에러가 발생했어요!')
    console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !read) {
    console.group('components → guide → [Read.js]')
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    console.groupEnd()

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!read) {
    console.group('components → guide → [Read.js]')
    console.log('목록이 존재하지 않습니다.')
    console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <Styled.read>
      <div className="hgroup_guide">
        <img src={`http://localhost:4000/uploads/${read.thumbnail}`} alt="" className="thumbnail_guide" />
        <h3 className="title_guide">{read.subject} 소개</h3>
      </div>

      <div className="group_vis2ual2" style={{ backgroundImage: `url(http://localhost:4000/uploads/${read.upload2})` }}>
        <div className="outer_cell">
          <div className="inner_cell">
            <h4 className="title_vis2ual2">{read.subject}</h4>
            <p className="description_vis2ual2" dangerouslySetInnerHTML={{ __html: read.files }}></p>
          </div>
        </div>
      </div>

      <div className="information_guide" dangerouslySetInnerHTML={{ __html: read.content }}></div>
    </Styled.read>
  )
}

export default Read
