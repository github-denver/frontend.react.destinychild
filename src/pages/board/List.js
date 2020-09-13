import React from 'react'
import Header from '../../containers/header/Header'
import Visual from '../../containers/visual/Visual'
import Hgroup from '../../components/Hgroup'
import List from '../../containers/board/List'
import Card from '../../containers/card/List'
import Footer from '../../components/Footer'

const Result = (props) => {
  const { match } = props

  const category = match.params.service

  return (
    <>
      <Header />

      <Visual attribute={{ category: 'hero' }} />

      <section className="container">
        <h2 className="invisible">데스티니 차일드 (Destiny Child) 본문 영역</h2>

        <div className="inner_global">
          <div className="contents">
            <Hgroup attribute={{ title: category }} />

            {category === 'notice' || category === 'talk' ? <List attribute={{ category: category }} /> : <Card attribute={{ category: category }} />}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default React.memo(Result)
