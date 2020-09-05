import React from 'react'
import styled from 'styled-components'
import Select from '../Select'
import Field from '../Field'

const Styled = {}

Styled.select = styled.div``

const Search = (props) => {
  // const { attribute } = props

  return (
    <>
      <div className="group_search">
        <Select />

        <Field />

        <a href="/gallery/category/list/1?select=subject&amp;keyword=" className="button_global button_default" role="button">
          검색
        </a>
      </div>
    </>
  )
}

export default React.memo(Search)
