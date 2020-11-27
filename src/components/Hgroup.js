import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.heading = styled.strong``
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

const Heading = ({ level = 2, children }) => {
  return (
    <Styled.heading as={`h${level}`} className="title_hgroup">
      {children}
    </Styled.heading>
  )
}

const Hgroup = ({ attribute }) => {
  const { level, title, invisible, category, navigation } = attribute

  const result = func(category, navigation)

  return (
    <>
      <Styled.hgroup className={invisible ? 'hgroup_global screen_out' : 'hgroup_global'}>
        <div className="group_half">
          <div className="inner_half">
            <Heading level={level}>{title ? title : result}</Heading>
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
