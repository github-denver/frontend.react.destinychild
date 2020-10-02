import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.utility = styled.div``

const AskModal = ({ attribute }) => {
  const { visible, title, description, confirm, cancel } = attribute

  if (!visible) return null

  return (
    <>
      <strong>{title}</strong>
      <p>{description}</p>
      <button type="button" onClick={cancel}>
        취소
      </button>
      <button type="button" onClick={confirm}>
        확인
      </button>
    </>
  )
}

export default AskModal
