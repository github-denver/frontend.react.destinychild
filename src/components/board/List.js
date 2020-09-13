import React from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination'
import Search from '../../components/search/Search'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.list = styled.ul`
  border-top: 2px solid #000;
  border-bottom: 1px solid #e9e9e9;
  font-size: 0;

  li {
    padding: 16px 0;
    font-family: 'NotoSansKR-Light-Hestia';
    font-size: 14px;
    text-align: center;
  }

  li + li {
    border-top: 1px solid #e9e9e9;
  }

  .text_board {
    display: inline-block;
    width: 12%;
    box-sizing: border-box;
    vertical-align: middle;
  }

  .text_number {
    width: 6%;
  }

  .text_subject {
    width: 64%;
    padding: 0 24px;
    box-sizing: border-box;
    text-align: left;
  }

  .link_subject {
    display: inline-block;
    font-size: 18px;
    vertical-align: middle;
  }

  .text_write {
    width: 12%;
    text-align: left;
  }

  .text_count {
    width: 6%;
  }
`

const List = (props) => {
  const { category, list, pagination, error, loading } = props

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → board → [List.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → board → [List.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !list) {
    // console.group('components → board → [List.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!list) {
    // console.group('components → board → [List.js]')
    // console.log('목록이 존재하지 않습니다.')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <Styled.list className="list_board">
        {list.map((currentValue, index) => {
          return (
            <li key={currentValue.number}>
              <span className="text_board text_number">{currentValue.number}</span>
              <span className="text_board text_subject">
                <span
                  className="group_profile"
                  attribute={{ picture: currentValue.picture }}
                  style={{ backgroundImage: `url(http://localhost:4000/uploads/${currentValue.picture})` }}></span>

                <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_subject">
                  {currentValue.subject}
                </Link>
              </span>
              <span className="text_board text_write">{currentValue.name}</span>
              <span className="text_board text_count">{currentValue.count}</span>
              <span className="text_board">{currentValue.regdate}</span>
            </li>
          )
        })}
      </Styled.list>

      <Pagination pagination={pagination} />

      {list.length !== 0 && <Search />}
    </>
  )
}

export default React.memo(List)
