import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// const $ = window.$

const Styled = {}

Styled.aside = styled.div`
  .title_aside {
    font-family: 'NotoSansKR-Light-Hestia';
    font-size: 32px;
    line-height: 1;
  }

  .list_aside {
    margin-top: 24px;
  }

  .group_banner {
    margin-top: 24px;
  }

  /* list_aside
  ---------- ---------- ---------- ---------- ---------- */
  .list_aside {
    border-top: 2px solid #000;
    border-bottom: 1px solid #e9e9e9;
  }

  .list_aside li {
  }

  .list_aside li + li {
    border-top: 1px solid #e9e9e9;
  }

  .list_aside .current .link_aside {
    padding: 26px 24px 27px;
    font-family: 'NotoSansKR-Medium-Hestia';
    font-size: 18px;
  }

  .list_aside .link_aside {
    display: inline-block;
    padding: 18px 24px;
    font-family: 'NotoSansKR-Light-Hestia';
    font-size: 16px;
  }
`

const Aside = (props) => {
  return (
    <>
      <Styled.aside className="group_aside">
        <h3 className="title_aside">새소식</h3>
        <ul className="list_aside">
          <li className="current">
            <Link to="/" className="link_aside">
              공지사항
            </Link>
          </li>
          <li>
            <Link to="/" className="link_aside">
              업데이트
            </Link>
          </li>
          <li>
            <Link to="/" className="link_aside">
              이벤트
            </Link>
          </li>
        </ul>
      </Styled.aside>
    </>
  )
}

export default React.memo(Aside)
