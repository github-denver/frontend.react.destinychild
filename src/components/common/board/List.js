import React from 'react'
import styled from 'styled-components'
import Pagination from '../../../components/common/Pagination'
import Search from '../../../components/common/search/Search'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.list = styled.div``

const List = (props) => {
  const { category, list, pagination, error, loading } = props

  if (error) {
    if (error.response && error.response.status === 404) {
      console.group('components → board → [List.js]')
      console.log('존재하지 않는 데이터입니다.')
      console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    console.group('components → board → [List.js]')
    console.log('에러가 발생했어요!')
    console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !list) {
    console.group('components → board → [List.js]')
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    console.groupEnd()

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!list) {
    console.group('components → board → [List.js]')
    console.log('목록이 존재하지 않습니다.')
    console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <ul className="list_board">
        {list.map((currentValue, index) => {
          return (
            <li key={currentValue.number}>
              <span className="text_common text_number">{currentValue.number}</span>
              <span className="text_common text_subject">
                <span className="group_profile"></span>
                <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_subject">
                  {currentValue.subject}
                </Link>
              </span>
              <span className="text_common text_write">{currentValue.name}</span>
              <span className="text_common text_count">{currentValue.count}</span>
              <span className="text_common">{currentValue.regdate}</span>
            </li>
          )
        })}
      </ul>

      <Pagination pagination={pagination} />

      {list.length !== 0 && <Search />}
    </>
  )
}

export default React.memo(List)
