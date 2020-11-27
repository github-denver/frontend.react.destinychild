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
            {minimal && (
              <>
                <span className="text_collab">X</span>
                <Link to={{ pathname: `http://cf24denver.cafe24app.com` }} className="link_collab" target="_blank">
                  덴버월드
                </Link>{' '}
              </>
            )}
          </span>
        </h1>

        {minimal && (
          <>
            <div className="grp_collab">
              <em className="emphasis_collab">이 사이트는 덴버월드 사이트의 아이디와 패스워드가 공유됩니다.</em>
            </div>
          </>
        )}

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
