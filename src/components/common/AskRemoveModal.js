import React from 'react'
import styled from 'styled-components'
import AskModal from './AskModal'

const Styled = {}

Styled.AskRemoveModal = styled.div``

const AskRemoveModal = ({ attribute }) => {
  const { visible, confirm, cancel } = attribute

  return <AskModal attribute={{ visible: visible, title: '삭제', description: '정말 삭제?', confirm: confirm, cancel: cancel }} />
}

export default AskRemoveModal
