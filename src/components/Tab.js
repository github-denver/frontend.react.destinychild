import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.tab = styled.div``

const Tab = (props) => {
  const { tab, error, loading } = props

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

  const result = tab.slice(0, 5)

  return (
    <>
      <Styled.tab className="group_tab">
        <ul className="list_global">
          {result.map((currentValue, index) => {
            return (
              <li key={currentValue.number}>
                <Link to={`/beluga/notice/read/${currentValue.number}`}>{currentValue.subject}</Link>
              </li>
            )
          })}
        </ul>
      </Styled.tab>
    </>
  )
}

export default Tab
