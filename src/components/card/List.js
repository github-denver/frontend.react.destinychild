import React from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination'
import Search from '../../components/search/Search'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

const Styled = {}

Styled.card = styled.div`
  padding-top: 24px;
  border-top: 2px solid #000;

  &.clean {
    padding-top: 0;
    border-top: 0 none;
  }

  &.clean .information_card {
    border-color: transparent;
    text-align: center;
  }

  /* list_card
  ---------- ---------- ---------- ---------- ---------- */
  .list_card {
    margin: -24px 0 0 -24px;
    font-size: 0;
  }

  .list_card li {
    display: inline-block;
    width: 33.33333333333333%;
    padding: 24px 0 0 24px;
    box-sizing: border-box;
    vertical-align: top;
  }

  .list_card .link_card {
    display: block;
    position: relative;
    font-family: 'NotoSansKR-DemiLight-Hestia';
    font-size: 14px;
  }
  .list_card .frame_card {
    display: block;
    position: relative;
    padding-top: 56.25%;
    background-position: 50% 50%;
    background-size: 100% auto;
  }

  .list_card .thumbnail_card {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    max-width: 100%;
  }

  .list_card .information_card {
    display: block;
    padding: 18px 24px;
    /* border-bottom: 1px solid #999; */
    box-sizing: border-box;
    background-color: #fff;
    text-align: left;
  }

  .list_card .emph_card {
    display: block;
    font-style: normal;
    font-family: 'NotoSansKR-Light-Hestia';
    font-size: 14px;
    color: #888;
  }

  .list_card .text_card {
    display: block;
    font-family: 'NotoSansKR-Regular-Hestia';
    font-weight: 400;
    font-size: 16px;
  }

  .list_card .text_card + .description_card {
    margin-top: 12px;
  }

  .list_card .description_card {
    display: block;

    font-family: 'NotoSansKR-Light-Hestia';
    font-weight: 300;
    font-size: 14px;
  }

  .list_card .group_publisher {
    margin-top: 18px;
  }

  /* group_publisher
  ---------- ---------- ---------- ---------- ---------- */
  .group_publisher {
    display: inline-block;
    vertical-align: top;
  }

  .group_publisher .text_publisher {
    margin-left: 12px;
    font-family: 'NotoSansKR-Light-Hestia';
    font-size: 14px;
  }

  .group_publisher .text_publisher:first-child {
    margin-left: 0;
  }
`

const Card = (props) => {
  const { category, list, pagination, error, loading } = props

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → card → [Card.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → card → [Card.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !list) {
    // console.group('components → card → [Card.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <Loading attribute={{ height: 346 }} />
  }

  if (!list) {
    // console.group('components → card → [Card.js]')
    // console.log('목록이 존재하지 않습니다.')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <Styled.card className={category !== 'guide' ? 'group_card' : 'group_card clean'}>
        <ul className="list_card">
          {list &&
            list.map((currentValue, index) => {
              return (
                <li key={currentValue.number}>
                  {category === 'update' && (
                    <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_card">
                      <span className="frame_card">
                        <img src={`http://localhost:4000/uploads/${currentValue.thumbnail}`} alt="" className="thumbnail_card" />
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
                        <img src={`http://localhost:4000/uploads/${currentValue.thumbnail}`} alt="" className="thumbnail_card" />
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
                            <img src={`http://localhost:4000/uploads/${currentValue.thumbnail}`} alt="" className="thumbnail_card" />
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
                            <img src={`http://localhost:4000/uploads/${currentValue.thumbnail}`} alt="" className="thumbnail_card" />
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
                            <img src={`http://localhost:4000/uploads/${currentValue.thumbnail}`} alt="" className="thumbnail_card" />
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
                    <Link to={`/beluga/${category}/detail/${currentValue.number}`} className="link_card">
                      <span className="frame_card" style={{ backgroundImage: `url(http://localhost:4000/uploads/${currentValue.portrait})` }}></span>
                      <span className="information_card">
                        <strong className="text_card">{currentValue.subject}</strong>
                        <p className="description_card" dangerouslySetInnerHTML={{ __html: currentValue.description }}></p>
                      </span>
                    </Link>
                  )}

                  {category === 'gallery' && (
                    <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_card">
                      <span className="frame_card">
                        <img src={`http://localhost:4000/uploads/${currentValue.thumbnail}`} alt="" className="thumbnail_card" />
                      </span>

                      <span className="information_card">
                        <em className="emph_card">{currentValue.content}</em>

                        <strong className="text_card">{currentValue.subject}</strong>

                        <span className="group_publisher">
                          <span className="text_publisher text_write">{currentValue.name}</span>
                          <span className="text_publisher text_count">{currentValue.count}</span>
                          <span className="text_publisher text_date">{currentValue.regdate}</span>
                        </span>
                      </span>
                    </Link>
                  )}

                  {category === 'video' && (
                    <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_card">
                      <span className="frame_card">
                        <img src={`http://localhost:4000/uploads/${currentValue.thumbnail}`} alt="" className="thumbnail_card" />
                      </span>

                      <span className="information_card">
                        <strong className="text_card">{currentValue.subject}</strong>

                        <span className="group_publisher">
                          <span className="text_publisher text_write">{currentValue.name}</span>
                          <span className="text_publisher text_count">{currentValue.count}</span>
                          <span className="text_publisher text_date">{currentValue.regdate}</span>
                        </span>
                      </span>
                    </Link>
                  )}

                  {category === 'music' && (
                    <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_card">
                      <span className="frame_card">
                        <img src={`http://localhost:4000/uploads/${currentValue.thumbnail}`} alt="" className="thumbnail_card" />
                      </span>

                      <span className="information_card">
                        <strong className="text_card">{currentValue.subject}</strong>

                        <span className="group_publisher">
                          <span className="text_publisher text_write">{currentValue.name}</span>
                          <span className="text_publisher text_count">{currentValue.count}</span>
                          <span className="text_publisher text_date">{currentValue.regdate}</span>
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
          <Pagination pagination={pagination} />

          {list.length !== 0 && <Search />}
        </>
      )}
    </>
  )
}

export default React.memo(Card)
