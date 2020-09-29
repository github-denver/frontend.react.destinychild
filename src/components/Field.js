import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.field = styled.div``

const Part = (props) => {
  const { attribute, onChange } = props

  return (
    <span className="box_field">
      <input
        type={attribute && attribute.type ? attribute.type : 'text'}
        name={attribute && attribute.name ? attribute.name : 'name'}
        id={attribute && attribute.name ? attribute.name : 'id'}
        className="field_local"
        onChange={onChange}
      />
    </span>
  )
}

const Field = (props) => {
  const { attribute, onChange } = props

  return (
    <Styled.field className="group_field">
      {attribute && attribute.label ? (
        <>
          <label htmlFor="keyword" className="label_field">
            {attribute.label}
          </label>

          <Part attribute={attribute} onChange={onChange} />
        </>
      ) : (
        <Part attribute={attribute} onChange={onChange} />
      )}
    </Styled.field>
  )
}

export default Field
