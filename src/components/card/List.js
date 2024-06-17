import React from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination'
import Search from '../../components/search/Search'
import { Link } from 'react-router-dom'

import moment from 'moment'
import 'moment/locale/ko'
moment.locale('ko')

const Styled = {}

Styled.card = styled.div``

const Loading = (props) => {
  const { category } = props

  return (
    <Styled.card className={category !== 'guide' ? 'group_card' : 'group_card clean'}>
      <ul className="list_card loading">
        {[...Array(3)].map((currentValue, index) => {
          return (
            <li key={index}>
              <span className="link_card">
                <span className="frame_card"></span>

                <span className="information_card">
                  <strong className="text_card"></strong>
                </span>

                {/* {category === 'guide' || category === 'dictionary' ? (
                  <span className="information_card">
                    <strong className="text_card"></strong>

                    <p className="description_card">
                      <span className="text_local"></span>
                      <span className="text_local"></span>
                    </p>
                  </span>
                ) : (
                  <>
                    {category === 'gallery' ? (
                      <span className="information_card">
                        <span className="text_local"></span>

                        <strong className="text_card"></strong>

                        <span className="text_local"></span>
                      </span>
                    ) : (
                      <span className="information_card">
                        <strong className="text_card"></strong>

                        <span className="text_local"></span>
                      </span>
                    )}
                  </>
                )} */}
              </span>
            </li>
          )
        })}
      </ul>
    </Styled.card>
  )
}

const Card = (props) => {
  const { user, select, keyword, category, list, pagination, error, loading } = props

  if (error) {
    if (error.response && error.response.status === 404) {
      return <p>존재하지 않는 데이터입니다.</p>
    }

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !list) {
    return <Loading category={category} />
  }

  if (!list) {
    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <Styled.card className={category !== 'guide' ? 'group_card' : 'group_card clean'}>
        <ul className="list_card">
          {list &&
            list.map((currentValue, index) => {
              const regdate = moment(currentValue.regdate).format('YYYY-MM-DD')

              return (
                <li key={currentValue.number}>
                  {category === 'update' && (
                    <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_card">
                      <span className="frame_card">
                        <span className="thumbnail_card" style={{ backgroundImage: `url('http://localhost:4000/uploads/${currentValue.thumbnail}')` }}></span>
                      </span>

                      <span className="information_card">
                        <strong className="text_card">{currentValue.subject}</strong>

                        <p className="description_card">-</p>
                      </span>
                    </Link>
                  )}

                  {category === 'event' && (
                    <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_card">
                      <span className="frame_card">
                        <span className="thumbnail_card" style={{ backgroundImage: `url('http://localhost:4000/uploads/${currentValue.thumbnail}')` }}></span>
                      </span>

                      <span className="information_card">
                        <strong className="text_card">{currentValue.subject}</strong>

                        <p className="description_card">-</p>
                      </span>
                    </Link>
                  )}

                  {category === 'guide' && (
                    <>
                      {index === 0 && (
                        <Link to={`/beluga/dictionary/detail/4`} className="link_card" target="_blank">
                          <span className="frame_card">
                            <span
                              className="thumbnail_card"
                              style={{ backgroundImage: `url('http://localhost:4000/uploads/${currentValue.thumbnail}')` }}></span>
                          </span>

                          <span className="information_card">
                            <strong className="text_card">{currentValue.subject}</strong>

                            <p className="description_card">
                              모든 아이템을 한눈에!
                              <br />
                              데스티니 차일드 아이템 정보 확인하기
                            </p>
                          </span>
                        </Link>
                      )}

                      {index === 1 && (
                        <Link to={`/beluga/dictionary/detail/3`} className="link_card" target="_blank">
                          <span className="frame_card">
                            <span
                              className="thumbnail_card"
                              style={{ backgroundImage: `url('http://localhost:4000/uploads/${currentValue.thumbnail}')` }}></span>
                          </span>

                          <span className="information_card">
                            <strong className="text_card">{currentValue.subject}</strong>

                            <p className="description_card">
                              모든 차일드를 한눈에!
                              <br />
                              데스티니 차일드 정보 확인하기
                            </p>
                          </span>
                        </Link>
                      )}

                      {index === 2 && (
                        <Link to={`/beluga/dictionary/detail/11`} className="link_card" target="_blank">
                          <span className="frame_card">
                            <span
                              className="thumbnail_card"
                              style={{ backgroundImage: `url('http://localhost:4000/uploads/${currentValue.thumbnail}')` }}></span>
                          </span>

                          <span className="information_card">
                            <strong className="text_card">{currentValue.subject}</strong>

                            <p className="description_card">
                              모든 직업과 속성을 한눈에!
                              <br />
                              데스티니 차일드 직업과 속성 정보 확인하기
                            </p>
                          </span>
                        </Link>
                      )}
                    </>
                  )}

                  {category === 'child' && (
                    <Link to={`/beluga/${category}/detail/${currentValue.number}`} className="link_card" target="_blank">
                      <span className="frame_card" style={{ backgroundImage: `url('http://localhost:4000/uploads/${currentValue.portrait}')` }}></span>

                      <span className="information_card">
                        <strong className="text_card">{currentValue.subject}</strong>

                        <p className="description_card" dangerouslySetInnerHTML={{ __html: currentValue.description }}></p>
                      </span>
                    </Link>
                  )}

                  {category === 'gallery' && (
                    <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_card">
                      <span className="frame_card">
                        <span className="thumbnail_card" style={{ backgroundImage: `url('http://localhost:4000/uploads/${currentValue.thumbnail}')` }}></span>
                      </span>

                      <span className="information_card">
                        <em className="emphasis_card">{currentValue.content}</em>

                        <strong className="text_card">{currentValue.subject}</strong>

                        <span className="group_publisher">
                          <span className="text_publisher text_write">{currentValue.name}</span>
                          <span className="text_publisher text_count">{currentValue.count}</span>
                          <span className="text_publisher text_date">{regdate}</span>
                        </span>
                      </span>
                    </Link>
                  )}

                  {category === 'video' && (
                    <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_card">
                      <span className="frame_card">
                        <span className="thumbnail_card" style={{ backgroundImage: `url('http://localhost:4000/uploads/${currentValue.thumbnail}')` }}></span>
                      </span>

                      <span className="information_card">
                        <strong className="text_card">{currentValue.subject}</strong>

                        <span className="group_publisher">
                          <span className="text_publisher text_write">{currentValue.name}</span>
                          <span className="text_publisher text_count">{currentValue.count}</span>
                          <span className="text_publisher text_date">{regdate}</span>
                        </span>
                      </span>
                    </Link>
                  )}

                  {category === 'music' && (
                    <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_card">
                      <span className="frame_card">
                        <span className="thumbnail_card" style={{ backgroundImage: `url('http://localhost:4000/uploads/${currentValue.thumbnail}')` }}></span>
                      </span>

                      <span className="information_card">
                        <strong className="text_card">{currentValue.subject}</strong>

                        <span className="group_publisher">
                          <span className="text_publisher text_write">{currentValue.name}</span>
                          <span className="text_publisher text_count">{currentValue.count}</span>
                          <span className="text_publisher text_date">{regdate}</span>
                        </span>
                      </span>
                    </Link>
                  )}
                </li>
              )
            })}
        </ul>
      </Styled.card>

      {category !== 'guide' && (
        <>
          <div className="group_button group_half">
            <div className="inner_half"></div>
            <div className="inner_half">
              {user && typeof user !== 'undefined' && (
                <Link to={`/beluga/${category}/write`} className="button_global button_default" role="button">
                  등록
                </Link>
              )}
            </div>
          </div>

          <Pagination category={category} pagination={pagination} />
          <Search attribute={{ category: category, select: select, keyword: keyword }} />
        </>
      )}
    </>
  )
}

export default Card
