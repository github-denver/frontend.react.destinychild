import React from 'react'
import Header from '../../containers/common/header/Header'
import Visual from '../../containers/visual/Visual'
import Hgroup from '../../components/Hgroup'
import Modify from '../../containers/board/Modify'
import Footer from '../../components/Footer'
// import WriteActionButton from '../../containers/WriteActionButton'

const navigation = [
  {
    category: 'news',
    text: '새소식',
    description: '새소식 게시판입니다.',
    children: [
      {
        parent: '새소식',
        category: 'notice',
        text: '공지사항'
      },
      {
        parent: '새소식',
        category: 'update',
        text: '업데이트'
      },
      {
        parent: '새소식',
        category: 'event',
        text: '이벤트'
      }
    ]
  },
  {
    category: 'guide',
    text: '게임 가이드',
    description: '게임 가이드 게시판입니다.',
    children: [
      {
        parent: '게임 가이드',
        category: 'dictionary',
        text: '게임 가이드'
      },
      {
        parent: '게임 가이드',
        category: 'child',
        text: '차일드'
      }
    ]
  },
  {
    category: 'community',
    text: '커뮤니티',
    description: '커뮤니티 게시판입니다.',
    children: [
      {
        parent: '커뮤니티',
        category: 'talk',
        text: '톡톡 한마디'
      },
      {
        parent: '커뮤니티',
        category: 'gallery',
        text: '이미지 갤러리'
      }
    ]
  },
  {
    category: 'reference',
    text: '자료실',
    description: '자료실 게시판입니다.',
    children: [
      {
        parent: '자료실',
        category: 'video',
        text: '동영상'
      },
      {
        parent: '자료실',
        category: 'music',
        text: '음악'
      }
    ]
  }
]

const func = (category, navigation) => {
  let result = []

  loop: for (let i in navigation) {
    for (let j in navigation[i].children) {
      if (navigation[i].children[j].category === category) {
        result = navigation[i].children

        break loop
      }
    }
  }

  return result
}

const Result = ({ location, match }) => {
  const category = match.params.service

  const result = func(category, navigation)

  return (
    <>
      <Header />

      <Visual attribute={{ category: 'hero', location: location }} />

      <section className="container">
        <h2 className="invisible">본문 영역</h2>

        <div className="inner_global">
          <div className="contents read">
            <Hgroup attribute={{ level: 3, category: category, navigation: result }} />

            <Modify attribute={{ category: category, location: location }} />

            {/* <WriteActionButton attribute={{ category: category }} /> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Result
