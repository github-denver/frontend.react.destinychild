import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.button = styled.div``

const Button = ({ attribute }) => {
  console.log('components → [WriteActionButton.js] → attribute: ', attribute)

  const { publish, cancel, owner } = attribute

  return (
    <Styled.button>
      <div className="group_button">
        <button type="button" className="button_global button_default" onClick={publish}>
          {owner ? '수정' : '등록'}
        </button>

        <button type="button" className="button_global button_default" onClick={cancel}>
          취소
        </button>
      </div>
    </Styled.button>
  )
}

export default Button
