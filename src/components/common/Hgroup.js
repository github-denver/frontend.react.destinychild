import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.hgroup = styled.div``

const Hgroup = (props) => {
  const { attribute } = props

  return (
    <>
      <div className="hgroup_global">
        <div className="group_half">
          <div className="inner_half">
            <h3 className="title_common">{attribute.title}</h3>
          </div>
          <div className="inner_half">
            <div className="group_location">
              <span className="text_location">{attribute.title}</span>
              <span className="text_location">{attribute.title}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Hgroup)
