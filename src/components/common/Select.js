import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.select = styled.div``

const Select = (props) => {
  // const { attribute } = props

  return (
    <>
      <div className="group_select">
        <label htmlFor="search" className="label_select">
          <span className="text_select">제목</span>
          <span className="icon_global"></span>
        </label>

        <select name="search" className="select_local">
          <option value="subject">제목</option>
          <option value="content">내용</option>
        </select>
      </div>
    </>
  )
}

export default React.memo(Select)
