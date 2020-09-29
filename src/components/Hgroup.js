import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.hgroup = styled.div``

const func = (category, navigation) => {
  let result = []

  for (let i in navigation) {
    if (navigation[i].category === category) {
      result = navigation[i].text

      break
    }
  }

  return result
}

const Hgroup = ({ attribute }) => {
  const { title, category, navigation } = attribute

  const result = func(category, navigation)

  return (
    <>
      <Styled.hgroup className="hgroup_global">
        <div className="group_half">
          <div className="inner_half">
            <h3 className="title_hgroup">{title ? title : result}</h3>
          </div>
          <div className="inner_half">
            {attribute.location && (
              <div className="group_location">
                <span className="text_location"></span>
                <span className="text_location"></span>
              </div>
            )}
          </div>
        </div>
      </Styled.hgroup>
    </>
  )
}

export default Hgroup
