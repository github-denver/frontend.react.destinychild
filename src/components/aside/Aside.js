import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.aside = styled.div``

const Aside = ({ attribute }) => {
  const { category, navigation } = attribute

  return (
    <Styled.aside className="group_aside">
      <h3 className="title_aside">{attribute.navigation[0].parent}</h3>
      <ul className="list_aside">
        {navigation.map((currentValue, index) => {
          return (
            <li className={currentValue.category === category ? 'current' : null} key={index}>
              <Link to={`/beluga/${currentValue.category}/list`} className="link_aside">
                {currentValue.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </Styled.aside>
  )
}

export default Aside
