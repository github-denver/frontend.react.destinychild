import React from 'react'
import Header from '../../containers/header/Header'
import Visual from '../../containers/visual/Visual'
import Hgroup from '../../components/Hgroup'
import List from '../../containers/board/List'
import Card from '../../containers/card/List'
import Read from '../../containers/board/Read'
import Aside from '../../components/aside/Aside'
import Update from '../../containers/banner/Update'
// import Search from '../components/search/Search'
import Footer from '../../components/Footer'
// import { Link } from 'react-router-dom'

const Result = (props) => {
  const { match } = props

  // const number = typeof location.pathname.split('/').splice(-1)[0] !== 'string' ? location.pathname.split('/').splice(-1)[0] : 1

  const category = match.params.service

  return (
    <>
      <Header />

      <Visual attribute={{ category: 'hero' }} />

      <section className="container">
        <h2 className="invisible">데스티니 차일드 (Destiny Child) 본문 영역</h2>

        <div className="inner_global">
          <div className="contents read">
            <div className="group_half">
              <div className="inner_half">
                <Hgroup attribute={{ title: category }} />

                <Read attribute={{ category: category }} />
              </div>

              <div className="inner_half">
                <Aside />

                <Update attribute={{ category: 'event' }} />
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
