import React from 'react'
import Header from '../containers/common/header/Header'
import Hero from '../containers/slick/Hero'
import Tab from '../containers/common/Tab'
import Update from '../containers/common/banner/Update'
import Event from '../containers/common/banner/Event'
import Hgroup from '../components/common/Hgroup'
import Card from '../containers/common/card/Card'
import Media from '../containers/common/media/Media'
import Footer from '../components/common/Footer'
import { Link } from 'react-router-dom'

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
                {/* <Tab attribute={{ category: 'notice' }} /> */}

                <ul className="test123">
                  <li>데스티니 차일드 (Destiny Child)</li>
                  <li>데스티니 차일드 (Destiny Child)</li>
                  <li>데스티니 차일드 (Destiny Child)</li>
                  <li>데스티니 차일드 (Destiny Child)</li>
                  <li>데스티니 차일드 (Destiny Child)</li>
                </ul>
              </div>

              <div className="inner_triple">
                <Update attribute={{ category: 'banner' }} />
              </div>

              <div className="inner_triple">
                <Event attribute={{ category: 'event' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="outer_contents">
          <div className="contents">
            <div className="inner_global">
              <Hgroup attribute={{ title: '게임 가이드' }} />

              <Card attribute={{ category: 'guide' }} />
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="inner_global">
            <div className="group_child">
              <div className="hgroup_child">
                <h3 className="title_child">테티스</h3>
                <p className="text_child">슬픔의 바닷속에 깊이 잠긴 비탄의 여신</p>

                <ul className="list_property">
                  <li>
                    <img src="/uploads/Water Icon.png" alt="" className="thumbnail_property" />
                    <span className="text_property">수속성</span>
                  </li>
                  <li>
                    <img src="/uploads/Supporter Icon.png" alt="" className="thumbnail_property" />
                    <span className="text_property">보조형</span>
                  </li>
                </ul>

                <p className="description_child">
                  이유도 모른 채, 속절없이 동생을 하늘에 빼앗긴 여자. 헤어나올 수 없는 슬픔 속에 빠져버린 그녀는 기쁨이 무엇인지조차 기억하지 못한다.
                  <br />
                  <br />
                  악마라면 위로받을 수 있을까? 절박한 심정으로 잡은 손이지만 여전히 그녀는 슬픔속에서 잠겨있다.
                  <br />
                  <br />
                  아들을 잃고 비탄에 잠긴 바다의 여신 테티스의 이름을 가지고 태어난 차일드.
                  <br />
                  <br />그 슬픔은 헤어릴 수 없이 깊고 넓어, 좀처럼 마음의 문을 열지 않고 오히려 자신의 슬픔으로 모든 것을 수장시키려한다.
                </p>
              </div>

              <img src="/uploads/Grieving Thetis.png" alt="" className="thumbnail_child" />
            </div>
          </div>
        </div>

        <div className="outer_contents">
          <div className="contents">
            <div className="inner_global">
              <Hgroup attribute={{ title: '미디어' }} />

              <Media attribute={{ category: 'video' }} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default React.memo(Index)
