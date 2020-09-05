import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.footer = styled.footer``

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="inner_global">
          <div className="group_policy">
            <ul className="list_policy">
              <li>
                <Link to="/" className="link_policy">
                  소개
                </Link>
              </li>
              <li>
                <Link to="/" className="link_policy">
                  소개
                </Link>
              </li>
            </ul>
          </div>

          <div className="group_company">
            <ul className="list_company">
              <li>덴버월드</li>
            </ul>

            <p className="text_copyright">덴버월드</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default React.memo(Footer)
