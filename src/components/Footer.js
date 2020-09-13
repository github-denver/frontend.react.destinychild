import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.footer = styled.footer`
  background: #13151a;

  /* group_policy
  ---------- ---------- ---------- ---------- ---------- */
  .group_policy {
    padding: 24px 0;
    text-align: center;
  }

  /* group_company
  ---------- ---------- ---------- ---------- ---------- */
  .group_company .text_copyright {
    margin-top: 2px;
    font-family: 'Roboto';
    font-weight: 500;
    color: #707172;
  }

  /* list_policy
  ---------- ---------- ---------- ---------- ---------- */
  .list_policy {
    font-size: 0;
  }

  .list_policy li {
    display: inline-block;
    vertical-align: top;
  }

  .list_policy .link_policy {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    color: #dadadb;
  }

  /* group_company
  ---------- ---------- ---------- ---------- ---------- */
  .group_company {
    padding: 31px 0 92px;
    border-top: 1px solid #24272d;
    text-align: center;
    line-height: 22px;
    font-size: 13px;
  }

  /* list_company
  ---------- ---------- ---------- ---------- ---------- */
  .list_company {
    width: 640px;
    margin: 0 auto;
    font-size: 13px;
  }

  .list_company li {
    display: inline-block;
    margin-right: 10px;
    font-size: 13px;
    color: #707172;
    letter-spacing: -0.2px;
  }
`

const Footer = () => {
  return (
    <>
      <Styled.footer className="footer">
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
      </Styled.footer>
    </>
  )
}

export default React.memo(Footer)
