import React from 'react'
import Header from '../containers/common/header/Header'
import Visual from '../components/common/visual/Visual'
import Hgroup from '../components/common/Hgroup'
import List from '../containers/common/board/List.js'
import Card from '../containers/common/card/Card'
import Footer from '../components/common/Footer'
// import Search from '../components/common/search/Search'
// import { Link } from 'react-router-dom'

const Result = (props) => {
  const { location, match, attribute } = props

  const number = typeof location.pathname.split('/').splice(-1)[0] !== 'string' ? location.pathname.split('/').splice(-1)[0] : 1
  console.log('pages → [List.js] → number: ', number)
  console.log('')

  const category = match.params.service
  console.log('pages → [List.js] → category: ', category)
  console.log('')

  return (
    <>
      <Header />

      <Visual />

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
