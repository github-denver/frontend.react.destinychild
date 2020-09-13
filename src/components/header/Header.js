import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import Hamburger from './Hamburger'
// import Utility from './Utility'
import Navigation from './Navigation'

const Styled = {}

Styled.header = styled.header`
  /* header
  ---------- ---------- ---------- ---------- ---------- */
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  min-width: 1280px;
  height: 75px;
  background-color: #000;
  transition: height 0.4s;

  &:before {
    position: absolute;
    top: 75px;
    right: 0;
    left: 0;
    border-top: 1px solid #1a1a1a;
    content: '';
  }

  &.active {
    height: 250px;
  }

  .outer_cell {
    width: 100%;
  }

  .title_brand {
    display: inline-block;
    width: 193px;
    font-weight: normal;
    vertical-align: middle;
    text-align: center;
  }

  .link_brand {
    padding: 12px;
    font-size: 18px;
    color: #fff;
    background: url(/images/common/img_destiny_child.png) 0 50% no-repeat;
    background-size: 100% auto;
  }

  .gnb {
    display: inline-block;
    margin-left: 24px;
    vertical-align: middle;
  }
`

const Header = ({ attribute }) => {
  // const { user, event } = attribute
  const { user } = attribute

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
    <Styled.header className="header">
      <div className="inner_global">
        <h1 className="title_brand">
          <span className="outer_cell">
            <Link to="/beluga" className="link_brand inner_cell">
              <span className="ir_wa">Beluga</span>
            </Link>
          </span>
        </h1>

        <Navigation attribute={{ user: user, visible: visible, event: { visible: handlerVisible } }} />

        {/* <Utility attribute={{ user: user, event: { logout: event.logout, visible: handlerVisible } }} /> */}

        {/* <Hamburger attribute={{ user: user, visible: visible, event: { visible: handlerVisible } }} /> */}
      </div>

      <div className="dummy"></div>
    </Styled.header>
  )
}

export default React.memo(Header)
