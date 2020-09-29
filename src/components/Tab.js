import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.tab = styled.div``

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
      console.group('components → common → [Tab.js]')
      console.log('존재하지 않는 데이터입니다.')
      console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    console.group('components → common → [Tab.js]')
    console.log('에러가 발생했어요!')
    console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !tab) {
    console.group('components → common → [Tab.js]')
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    console.groupEnd()

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!tab) {
    console.group('components → common → [Tab.js]')
    console.log('목록이 존재하지 않습니다.')
    console.groupEnd()

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

export default Tab
