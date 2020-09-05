import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.select = styled.span``

const Field = (props) => {
  const { attribute } = props

  return (
    <>
      <span className="group_field">
        <span className="box_field">
          <input type="search" name="keyword" id="keyword" className="field_local" />
        </span>
      </span>
    </>
  )
}

export default React.memo(Field)
