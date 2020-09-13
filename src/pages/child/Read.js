import React from 'react'
// import Header from '../../containers/header/Header'
// import Visual from '../../components/visual/Visual'
import Read from '../../containers/child/Read'
import Footer from '../../components/Footer'

const Result = (props) => {
  // const { match } = props

  // const category = match.params.service

  return (
    <>
      <header className="header_guide">
        <div className="inner_global">
          <h1 className="title_brand">
            <span className="outer_cell">
              <a className="link_brand inner_cell" href="/beluga">
                <span className="ir_wa">데스티니 차일드 가이드</span>
              </a>
            </span>
          </h1>

          <div className="group_location_guide">홈 &gt; 가이드 &gt; ?</div>
        </div>
      </header>

      <section className="container guide">
        <h2 className="invisible">데스티니 차일드 (Destiny Child) 본문 영역</h2>

        <div className="inner_global">
          <div className="contents">
            <Read attribute={{ category: 'child' }} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default React.memo(Result)
