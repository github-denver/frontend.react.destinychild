import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.tab = styled.div`
  box-sizing: border-box;
  font-size: 0;

  /* list_tab
  ---------- ---------- ---------- ---------- ---------- */
  .list_tab {
    position: relative;
    padding-top: 48px;
    border: 1px solid #e9e9e9;
  }

  .list_tab li + li .link_tab {
    left: 33.33333333333333%;
  }

  .list_tab li + li + li .link_tab {
    left: 66.66666666666667%;
  }

  .list_tab .link_tab {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 33.33333333333333%;
    padding: 12px;
    border-left: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    box-sizing: border-box;
    font-size: 16px;
    background-color: #f7f7f7;
    text-align: center;
  }

  .list_tab .link_tab:hover,
  .list_tab .link_tab:focus {
    z-index: 1;
  }

  .list_tab .current .link_tab {
    border-color: transparent;
    background-color: #fff;
  }

  .list_tab .list_common {
    display: none;
    padding: 12px;
    height: 181px;
    box-sizing: border-box;
  }

  .list_tab .current .list_common {
    display: block;
  }

  .list_tab .list_common li + li {
    margin-top: 13px;
  }

  .list_tab .list_common .link_common {
    display: inline-block;
    font-family: 'NotoSansKR-Light-Hestia';
    font-size: 14px;
    vertical-align: top;
  }
`

const Tab = (props) => {
  const { tab, error, loading } = props

  const handlerVisible = useCallback((event) => {
    event.preventDefault()

    event.target.parentElement.parentElement.children.forEach((element, index) => {
      element.classList.remove('current')
    })

    event.target.parentElement.classList.add('current')
  }, [])

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → common → [Tab.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → common → [Tab.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !tab) {
    // console.group('components → common → [Tab.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!tab) {
    // console.group('components → common → [Tab.js]')
    // console.log('목록이 존재하지 않습니다.')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <Styled.tab className="group_tab">
        <ul className="list_tab">
          <li className="current">
            <Link to="/" className="link_tab" onClick={handlerVisible}>
              공지사항
            </Link>
            <ul className="list_common">
              {tab.map((currentValue, index) => {
                return (
                  <li key={currentValue.number}>
                    <Link to="/" className="link_common">
                      {currentValue.subject}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
          <li>
            <Link to="/" className="link_tab" onClick={handlerVisible}>
              업데이트
            </Link>
            <ul className="list_common">
              {tab.map((currentValue, index) => {
                return (
                  <li key={currentValue.number}>
                    <Link to="/" className="link_common">
                      {currentValue.subject}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
          <li>
            <Link to="/" className="link_tab" onClick={handlerVisible}>
              이벤트
            </Link>
            <ul className="list_common">
              {tab.map((currentValue, index) => {
                return (
                  <li key={currentValue.number}>
                    <Link to="/" className="link_common">
                      {currentValue.subject}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </Styled.tab>
    </>
  )
}

export default React.memo(Tab)
