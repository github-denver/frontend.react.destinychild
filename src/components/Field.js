import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.field = styled.div``

const Part = (props) => {
  const { attribute, onChange } = props

  return (
    <span className="box_field">
      *{typeof attribute.value !== 'undefined'}*
      <input
        type={attribute && typeof attribute.type !== 'undefined' ? attribute.type : ''}
        name={attribute && typeof attribute.name !== 'undefined' ? attribute.name : ''}
        id={attribute && typeof attribute.id !== 'undefined' ? attribute.id : ''}
        className="field_local"
        value={attribute && typeof attribute.value !== 'undefined' ? attribute.value : ''}
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

          <Part attribute={attribute} onChange={attribute.event ? attribute.event : onChange} />
        </>
      ) : (
        <Part attribute={attribute} onChange={attribute.event ? attribute.event : onChange} />
      )}
    </Styled.field>
  )
}

export default Field
