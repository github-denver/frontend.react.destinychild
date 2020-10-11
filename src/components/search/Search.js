import React, { useState } from 'react'
import styled from 'styled-components'
import Select from '../Select'
import Field from '../Field'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.search = styled.div``

const Search = (props) => {
  const { attribute } = props
  // console.log('components → [Search.js] → attribute: ', attribute)
  // console.log('components → [Search.js] → !!attribute.select: ', !!attribute.select)
  // console.log('')

  const [select, setSelect] = useState(!!attribute.select ? attribute.select : 'subject')
  const [keyword, setKeyword] = useState(!!attribute.keyword ? attribute.keyword : '')

  const onChange = (event) => {
    // console.log('components → [Search.js] → event.target.tagName: ', event.target.tagName)
    // console.log('')

    if (event.target.tagName.toLowerCase() === 'select') {
      // console.log('event.target.options[event.target.selectedIndex].text: ', event.target.options[event.target.selectedIndex].text)
      // console.log('event.target.options[event.target.selectedIndex].value: ', event.target.options[event.target.selectedIndex].value)
      // console.log('')

      setSelect(event.target.options[event.target.selectedIndex].value)
    }

    if (event.target.tagName.toLowerCase() === 'input') {
      // console.log('event.target.value: ', event.target.value)
      // console.log('')

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
