import React from 'react'
import styled from 'styled-components'
import Select from '../Select'
import Field from '../Field'

const Styled = {}

Styled.search = styled.div`
  display: inline-block;
  font-size: 0;
  vertical-align: top;

  .group_field {
    z-index: 1;
    margin: 0 -1px;
  }

  .box_field {
    min-width: 240px;
  }

  /*
  .group_search .select_global {
  width: 30%;
  vertical-align: top;
  }

  .group_search .link_global {
  margin-top: 10px;
  }

  .group_search .group_field {
  width: 70%;
  padding-left: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: top;
  }
  */

  /* group_field
  ---------- ---------- ---------- ---------- ---------- */
  .group_field {
    display: inline-block;
    position: relative;
    vertical-align: top;
  }

  .group_field .label_field {
    font-size: 14px;
  }

  .group_field .field_local[type='file'] {
    height: auto;
  }

  /* box_field
  ---------- ---------- ---------- ---------- ---------- */
  .box_field {
    display: inline-block;
    min-width: 120px;
    border: 1px solid #e9e9e9;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .box_field .field_local {
    width: 100%;
    height: 46px;
    padding: 10px;
    border: 0 none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    text-align: left;
  }
`

const Search = (props) => {
  // const { attribute } = props

  return (
    <>
      <Styled.search className="group_search">
        <Select />

        <Field />

        <a href="/gallery/category/list/1?select=subject&amp;keyword=" className="button_global button_default" role="button">
          검색
        </a>
      </Styled.search>
    </>
  )
}

export default React.memo(Search)
