import React, { useState } from 'react'
import styled from 'styled-components'
import Select from '../Select'
import Field from '../Field'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.search = styled.div``

const Search = (props) => {
  const { attribute } = props

  const [select, setSelect] = useState(!!attribute.select ? attribute.select : 'subject')
  const [keyword, setKeyword] = useState(!!attribute.keyword ? attribute.keyword : '')

  const onChange = (event) => {
    if (event.target.tagName.toLowerCase() === 'select') {
      setSelect(event.target.options[event.target.selectedIndex].value)
    }

    if (event.target.tagName.toLowerCase() === 'input') {
      setKeyword(event.target.value)
    }
  }

  return (
    <>
      <Styled.search className="group_search">
        <Select attribute={{ select: select, keyword: keyword }} onChange={onChange} />

        <Field attribute={{ select: select, keyword: keyword }} onChange={onChange} />

        <Link to={`/beluga/${attribute.category}/list/1?select=${select}&keyword=${keyword}`} className="button_global button_default" role="button">
          검색
        </Link>
      </Styled.search>
    </>
  )
}

export default Search
