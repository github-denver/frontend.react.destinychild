import React from 'react'
import Header from '../containers/header/Header'
import Hero from '../containers/slick/Hero'
import Hgroup from '../components/Hgroup'
import Update from '../containers/banner/Update'
import Event from '../containers/banner/Event'
import Card from '../containers/card/List'
// import Child from '../containers/child/Child'
import Media from '../containers/media/Media'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <>
      <Header />

      <Hero attribute={{ category: 'hero' }} />

      <section className="container">
        <h2 className="invisible">데스티니 차일드 (Destiny Child) 본문 영역</h2>

        <div className="inner_global">
          <div className="contents absorb">
            <div className="group_triple">
              <div className="inner_triple">
                <Hgroup attribute={{ title: '새소식' }} />

                <ul className="list_global">
                  <li>데스티니 차일드 (Destiny Child)</li>
                  <li>데스티니 차일드 (Destiny Child)</li>
                  <li>데스티니 차일드 (Destiny Child)</li>
                  <li>데스티니 차일드 (Destiny Child)</li>
                  <li>데스티니 차일드 (Destiny Child)</li>
                </ul>
              </div>

              <div className="inner_triple">
                <Update attribute={{ category: 'update' }} />
              </div>

              <div className="inner_triple">
                <Event attribute={{ category: 'event' }} />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="outer_contents"> */}
        <div className="contents">
          <div className="inner_global">
            <Hgroup attribute={{ title: '가이드' }} />

            <Card attribute={{ category: 'guide' }} />
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
            <Hgroup attribute={{ title: '미디어' }} />

            <Media attribute={{ category: 'video' }} />
          </div>
        </div>
        {/* </div> */}
      </section>

      <Footer />
    </>
  )
}

export default React.memo(Index)
