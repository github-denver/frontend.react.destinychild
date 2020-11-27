import React from 'react'
import Header from '../containers/common/header/Header'
import Register from '../containers/Register'

const Result = () => {
  return (
    <>
      <Header attribute={{ minimal: true }} />

      <section className="minimal_container">
        <h2 className="invisible">본문 영역</h2>

        <Register />
      </section>

      <footer className="minimal_footer">
        <p className="text_copyright">
          이 사이트는 개인 포트폴리오 사이트입니다.
          <br />
          데스티니 차일드와 어떠한 관계도 없습니다.
        </p>
      </footer>
    </>
  )
}

export default Result
