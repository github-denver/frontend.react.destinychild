import React from 'react'
import Header from '../containers/common/header/Header'
import Hero from '../containers/slick/Hero'
import Hgroup from '../components/Hgroup'
import Tab from '../containers/Tab'
import Update from '../containers/banner/Update'
import Event from '../containers/banner/Event'
import Card from '../containers/card/List'
// import Child from '../containers/child/Child'
import Media from '../containers/media/Media'
import Footer from '../components/Footer'

const Result = (props) => {
  const { location } = props

  return (
    <>
      <Header />

      <Hero attribute={{ category: 'hero' }} />

      <section className="container">
        <h2 className="invisible">본문 영역</h2>

        <div className="inner_global">
          <div className="contents absorb">
            <div className="group_triple">
              <div className="inner_triple">
                <Hgroup attribute={{ level: 3, title: '새소식' }} />

                <Tab attribute={{ category: 'notice', location: location }} />
              </div>

              <div className="inner_triple">
                <Hgroup attribute={{ level: 3, title: '업데이트', invisible: true }} />

                <Update attribute={{ category: 'update' }} />
              </div>

              <div className="inner_triple">
                <Hgroup attribute={{ level: 3, title: '이벤트', invisible: true }} />

                <Event attribute={{ category: 'event' }} />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="outer_contents"> */}
        <div className="contents">
          <div className="inner_global">
            <Hgroup attribute={{ level: 3, title: '게임 가이드' }} />

            <Card attribute={{ category: 'guide', location: location }} />
          </div>
        </div>
        {/* </div> */}

        {/* <div className="contents">
          <div className="inner_global">
            <Child attribute={{ category: 'child' }} />
          </div>
        </div> */}

        {/* <div className="outer_contents"> */}
        <div className="contents">
          <div className="inner_global">
            <Hgroup attribute={{ level: 3, title: '미디어' }} />

            <Media attribute={{ category: 'video' }} />
          </div>
        </div>
        {/* </div> */}
      </section>

      <Footer />
    </>
  )
}

export default Result
