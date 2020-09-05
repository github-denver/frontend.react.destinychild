import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.loading = styled.section``

const Loading = () => {
  return (
    <>
      <div className="group_loading">
        <div className="thumbnail_loading"></div>
        <div className="caption_loading">
          <span className="subject_loading"></span>
          <span className="text_loading"></span>
        </div>
        <span className="layer_effect"></span>
      </div>
    </>
  )
}

export default React.memo(Loading)
