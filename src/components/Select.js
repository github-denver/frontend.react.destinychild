import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.select = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
  min-width: 120px;
  height: 48px;
  border: 1px solid #e9e9e9;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  background-position: 100% 50%;
  vertical-align: top;

  .label_select {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    padding: 0 12px;
    font-size: 0;
    text-align: left;
  }

  .text_select {
    display: inline-block;
    font-size: 14px;
    line-height: 46px;
    vertical-align: middle;
  }

  .icon_global {
    position: absolute;
    top: 50%;
    right: 12px;
    width: 14px;
    height: 14px;
    margin-top: -7px;
    background-position: 0 -35px;
  }

  .select_local {
    width: 100%;
    height: 46px;
    border: 0 none;
    font-family: inherit;
    line-height: 46px;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }
`

const Select = (props) => {
  // const { attribute } = props

  return (
    <>
      <Styled.select className="group_select">
        <label htmlFor="search" className="label_select">
          <span className="text_select">제목</span>
          <span className="icon_global"></span>
        </label>

        <select name="search" className="select_local">
          <option value="subject">제목</option>
          <option value="content">내용</option>
        </select>
      </Styled.select>
    </>
  )
}

export default React.memo(Select)
