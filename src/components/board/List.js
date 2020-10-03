import React from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination'
import Search from '../../components/search/Search'
import { Link } from 'react-router-dom'

import moment from 'moment'
import 'moment/locale/ko'
moment.locale('ko')

const Styled = {}

Styled.list = styled.div``

const Loading = () => {
  return (
    <Styled.list className="list_board loading">
      {[...Array(10)].map((currentValue, index) => {
        return (
          <li key={index}>
            <span className="text_board text_number">
              <span className="text_local clean"></span>
            </span>
            <span className="text_board text_subject">
              <span className="group_profile"></span>

              <span className="link_subject"></span>
            </span>
            <span className="text_board text_write">
              <span className="text_local clean"></span>
            </span>
            <span className="text_board text_count">
              <span className="text_local"></span>
            </span>
            <span className="text_board">
              <span className="text_local"></span>
            </span>
          </li>
        )
      })}
    </Styled.list>
  )
}

const List = (props) => {
  const { select, keyword, category, list, pagination, error, loading } = props

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

    return <Loading />
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
          const regdate = moment(currentValue.regdate).format('YYYY-MM-DD')

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
              <span className="text_board">{regdate}</span>
            </li>
          )
        })}
      </Styled.list>

      <div className="group_button group_half">
        <div className="inner_half"></div>
        <div className="inner_half">
          <Link to={`/beluga/${category}/write`} className="button_global button_default" role="button">
            등록
          </Link>
        </div>
      </div>

      {list.length !== 0 && (
        <>
          <Pagination pagination={pagination} />

          <Search attribute={{ category: category, select: select, keyword: keyword }} />
        </>
      )}
    </>
  )
}

export default List
