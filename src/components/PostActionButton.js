import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AskRemoveModal from './common/AskRemoveModal'

const Styled = {}

Styled.button = styled.div``

const Button = ({ attribute }) => {
  const { category, edit, owner, remove } = attribute

  const [modal, setModal] = useState(false)

  const onRemoveClick = () => {
    setModal(true)
  }

  const onCancel = () => {
    setModal(false)
  }

  const onConfirm = () => {
    setModal(false)
    remove()
  }

  return (
    <>
      <Styled.button>
        <div className="group_button group_half">
          <div className="inner_half">
            <Link to={`/beluga/${category}/list`} className="button_global button_default" role="button">
              목록
            </Link>
          </div>
          <div className="inner_half">
            {owner && (
              <>
                <button type="button" className="button_global button_default" onClick={edit}>
                  수정
                </button>
                <button type="button" className="button_global button_default" onClick={onRemoveClick}>
                  삭제
                </button>
              </>
            )}
          </div>
        </div>
      </Styled.button>
      <AskRemoveModal attribute={{ visible: modal, confirm: onConfirm, cancel: onCancel }} />
    </>
  )
}

export default Button
