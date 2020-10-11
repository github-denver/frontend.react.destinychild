import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.field = styled.div``

const Part = (props) => {
  const { attribute, onChange } = props
  // console.log('components → [Field.js] → const Part = (props) => { .. } → attribute: ', attribute)
  // console.log('components → [Field.js] → const Part = (props) => { .. } → typeof attribute.type: ', typeof attribute.type)
  // console.log('components → [Field.js] → const Part = (props) => { .. } → typeof attribute.name: ', typeof attribute.name)
  // console.log('components → [Field.js] → const Part = (props) => { .. } → typeof attribute.id: ', typeof attribute.id)
  // console.log('components → [Field.js] → const Part = (props) => { .. } → typeof attribute.value: ', typeof attribute.value)

  return (
    <span className="box_field">
      {attribute && typeof attribute.value !== 'undefined' ? (
        <input
          type={typeof attribute.type !== 'undefined' && attribute.type}
          name={typeof attribute.name !== 'undefined' && attribute.name}
          id={typeof attribute.id !== 'undefined' && attribute.id}
          className="field_local"
          value={attribute.value}
          onChange={onChange}
        />
      ) : (
        <input type={typeof attribute.type !== 'undefined' ? attribute.type : 'text'} className="field_local" onChange={onChange} />
      )}
    </span>
  )
}

const Field = (props) => {
  const { attribute, onChange } = props
  // console.log('components → [Field.js] → attribute: ', attribute)
  // console.log('')

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
