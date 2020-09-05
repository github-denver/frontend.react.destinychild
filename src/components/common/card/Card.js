import React from 'react'
import styled from 'styled-components'
import Pagination from '../../../components/common/Pagination'
import Search from '../../../components/common/search/Search'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.card = styled.div``

const Card = (props) => {
  const { category, list, pagination, error, loading } = props

  if (error) {
    if (error.response && error.response.status === 404) {
      console.group('components → slick → [Hero.js]')
      console.log('존재하지 않는 데이터입니다.')
      console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    console.group('components → slick → [Hero.js]')
    console.log('에러가 발생했어요!')
    console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !list) {
    console.group('components → slick → [Hero.js]')
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    console.groupEnd()

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!list) {
    console.group('components → slick → [Hero.js]')
    console.log('목록이 존재하지 않습니다.')
    console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <div className={category !== 'guide' ? 'group_card' : 'group_card clean'}>
        <ul className="list_card">
          {list.map((currentValue, index) => {
            return (
              <li key={currentValue.number}>
                <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_card">
                  <span className="frame_card">
                    <img src={`http://localhost:4000/uploads/${currentValue.thumbnail}`} alt="" className="thumbnail_card" />
                  </span>

                  {category !== 'update' && (
                    <span className="information_card">
                      {/* {category === 'gallery' && <em className="emph_card">{currentValue.content}</em>} */}

                      <span className="text_card">{currentValue.subject}</span>

                      {category === 'gallery' && (
                        <span className="group_etc">
                          <span className="text_etc text_write">{currentValue.name}</span>
                          <span className="text_etc text_count">{currentValue.count}</span>
                          <span className="text_etc text_date">{currentValue.regdate}</span>
                        </span>
                      )}
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {category !== 'guide' && (
        <>
          <Pagination pagination={pagination} />

          {list.length !== 0 && <Search />}
        </>
      )}
    </>
  )
}

export default React.memo(Card)
