import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import Hamburger from './Hamburger'
import Utility from './Utility'
import Navigation from './Navigation'

const Styled = {}

Styled.header = styled.div``

const Header = ({ attribute }) => {
  const { user, logout, minimal } = attribute

  const [visible, setVisible] = useState(false)

  const handlerVisible = useCallback(
    (event) => {
      event.preventDefault()

      if (!visible) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    },
    [visible]
  )

  return (
    <Styled.header className={!minimal ? 'header' : 'minimal_header'}>
      <div className="inner_global">
        <h1 className="title_brand">
          <span className="outer_cell">
            <Link to="/beluga" className="link_brand inner_cell">
              <span className="ir_wa">Beluga</span>
            </Link>
          </span>
        </h1>
        {!minimal && (
          <>
            {/* <Utility attribute={{ user: user, event: { logout: event.logout, visible: handlerVisible } }} /> */}
            {/* <Hamburger attribute={{ user: user, visible: visible, event: { visible: handlerVisible } }} /> */}
            <Navigation attribute={{ user: user, visible: handlerVisible }} /> {/* event: { visible: handlerVisible } */}
            <Utility attribute={{ user: user, logout: logout }} />
          </>
        )}
      </div>

      <div className="dummy"></div>
    </Styled.header>
  )
}

export default Header
