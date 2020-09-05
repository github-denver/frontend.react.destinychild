import React from 'react'
import Header from '../containers/common/header/Header'
import Visual from '../components/common/visual/Visual'
import Hgroup from '../components/common/Hgroup'
import List from '../containers/common/board/List.js'
import Card from '../containers/common/card/Card'
import Read from '../containers/common/board/Read.js'
import Update from '../containers/common/banner/Update'
// import Search from '../components/common/search/Search'
import Footer from '../components/common/Footer'
import { Link } from 'react-router-dom'

const Result = (props) => {
  const { location, match, attribute } = props

  const number = typeof location.pathname.split('/').splice(-1)[0] !== 'string' ? location.pathname.split('/').splice(-1)[0] : 1
  console.log('pages → [Result.js] → number: ', number)
  console.log('')

  const category = match.params.service
  console.log('pages → [Result.js] → category: ', category)
  console.log('')

  return (
    <>
      <Header />

      <Visual />

      <section className="container">
        <h2 className="invisible">데스티니 차일드 (Destiny Child) 본문 영역</h2>

        <div className="inner_global">
          <div className="contents read">
            <div className="group_half">
              <div className="inner_half">
                <Hgroup attribute={{ title: category }} />

                <Read attribute={{ category: category }} />
              </div>

              <div className="inner_half group_aside">
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

                <Update attribute={{ category: 'banner' }} />
              </div>
            </div>

            {category === 'notice' || category === 'talk' ? <List attribute={{ category: category }} /> : <Card attribute={{ category: category }} />}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default React.memo(Result)
