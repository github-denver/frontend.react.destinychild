import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.navigation = styled.nav``

const Navigation = ({ attribute }) => {
  useEffect(() => {
    const header = document.querySelector('.header')

    header.addEventListener('mouseenter', () => {
      header.classList.add('active')
    })

    header.addEventListener('mouseleave', () => {
      header.classList.remove('active')
    })

    const first = document.querySelector('.link_gnb.first')
    first.addEventListener('focus', () => {
      header.classList.add('active')
    })

    const last = document.querySelector('.link_lnb.last')
    last.addEventListener('keyup', (event) => {
      if ((event.which === 9) === event.shiftKey && event.which === 9) {
        header.classList.add('active')
      }
    })

    last.addEventListener('keydown', (event) => {
      if ((event.which === 9) !== event.shiftKey && event.which === 9) {
        header.classList.remove('active')
      }
    })
  }, [])

  return (
    <>
      <Styled.navigation className="gnb">
        <ul className="list_gnb">
          <li>
            <Link to="#" className="link_gnb first">
              새소식
            </Link>

            <ul className="list_lnb">
              <li>
                <Link to="/beluga/notice/list" className="link_lnb">
                  공지사항
                </Link>
              </li>
              <li>
                <Link to="/beluga/update/list" className="link_lnb">
                  업데이트
                </Link>
              </li>
              <li>
                <Link to="/beluga/event/list" className="link_lnb">
                  이벤트
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="link_gnb">
              가이드
            </Link>

            <ul className="list_lnb">
              <li>
                <Link to="/beluga/dictionary/book" className="link_lnb">
                  게임 가이드
                </Link>
              </li>
              <li>
                <Link to="/beluga/child/book" className="link_lnb">
                  차일드
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="link_gnb">
              커뮤니티
            </Link>

            <ul className="list_lnb">
              <li>
                <Link to="/beluga/talk/list" className="link_lnb">
                  톡톡 한마디
                </Link>
              </li>
              <li>
                <Link to="/beluga/gallery/list" className="link_lnb">
                  이미지
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#" className="link_gnb">
              자료실
            </Link>

            <ul className="list_lnb">
              <li>
                <Link to="/beluga/video/list" className="link_lnb">
                  동영상
                </Link>
              </li>
              <li>
                <Link to="/beluga/music/list" className="link_lnb last">
                  음악
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="link_lnb last">
                  월 페이퍼
                </Link>
              </li> */}
            </ul>
          </li>
        </ul>
      </Styled.navigation>
    </>
  )
}

export default Navigation
