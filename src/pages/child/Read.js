import React from 'react'
import Read from '../../containers/child/Read'
import Footer from '../../components/Footer'

/* const navigation = [
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
] */

/* const func = (category) => {
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
} */

const Result = ({ location }) => {
  // const category = match.params.service

  // const result = func(category)

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

          <div className="group_location_guide">홈 &gt; 게임 가이드</div>
        </div>
      </header>

      <section className="container guide">
        <h2 className="invisible">본문 영역</h2>

        <div className="inner_global">
          <div className="contents">
            <Read attribute={{ category: 'child', location: location }} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Result
