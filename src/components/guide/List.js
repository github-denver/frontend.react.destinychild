import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.list = styled.ul`
  font-size: 0;
  margin: -24px 0 0 -24px;

  & > li {
    display: inline-block;
    width: 260.8px;
    padding: 24px 0 0 24px;
    box-sizing: border-box;
    vertical-align: top;
  }

  .title_guide {
    display: block;
    padding: 12px;
    border: 1px solid #ccc;
    border-top: 1px solid #000;
    font-family: 'NotoSansKR-Regular-Hestia';
    font-weight: 400;
    font-size: 16px;
    background-color: #eeeff4;
    text-align: center;
  }

  .list_common {
    min-height: 360px;
    margin-top: -1px;
    padding: 12px;
    border: 1px solid #ccc;
    border-top: 1px solid #999;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }

  .list_common li + li {
    margin-top: 12px;
  }

  .link_guide {
    display: inline-block;
    padding: 0 12px;
    font-family: 'NotoSansKR-DemiLight-Hestia';
    font-weight: 350;
    font-size: 14px;
    text-align: left;
  }
`

const List = (props) => {
  return (
    <>
      <Styled.list className="list_guide">
        <li>
          <strong className="title_guide">홈화면</strong>
          <ul className="list_common">
            <li>
              <Link to="/beluga/dictionary/detail/1" className="link_guide" target="_blank">
                메인 홈 화면
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <strong className="title_guide">옵션</strong>
          <ul className="list_common">
            <li>
              <Link to="/beluga/dictionary/detail/2" className="link_guide" target="_blank">
                게임 설정
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <strong className="title_guide">메인 메뉴</strong>
          <ul className="list_common">
            <li>
              <Link to="/beluga/dictionary/detail/3" className="link_guide" target="_blank">
                차일드
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/4" className="link_guide" target="_blank">
                아이템
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/5" className="link_guide" target="_blank">
                마이룸
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/6" className="link_guide" target="_blank">
                소환
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/7" className="link_guide" target="_blank">
                커뮤니티
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <strong className="title_guide">스킬</strong>
          <ul className="list_common">
            <li>
              <Link to="/beluga/dictionary/detail/8" className="link_guide" target="_blank">
                스킬 소개
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <strong className="title_guide">앨범, 유닛과 칭호</strong>
          <ul className="list_common">
            <li>
              <Link to="/beluga/dictionary/detail/9" className="link_guide" target="_blank">
                앨범 소개
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/10" className="link_guide" target="_blank">
                유닛 소개
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <strong className="title_guide">시스템</strong>
          <ul className="list_common">
            <li>
              <Link to="/beluga/dictionary/detail/11" className="link_guide" target="_blank">
                직업과 속성
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/12" className="link_guide" target="_blank">
                상태이상 (버프, 디버프)
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/13" className="link_guide" target="_blank">
                레벨업 (합성)
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/14" className="link_guide" target="_blank">
                진화
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/15" className="link_guide" target="_blank">
                한계돌파
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/16" className="link_guide" target="_blank">
                어팩션
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/17" className="link_guide" target="_blank">
                진화재료 변환
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/18" className="link_guide" target="_blank">
                장비 강화
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <strong className="title_guide">월드맵</strong>
          <ul className="list_common">
            <li>
              <Link to="/beluga/dictionary/detail/19" className="link_guide" target="_blank">
                전투 대기 화면
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/20" className="link_guide" target="_blank">
                전투
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <strong className="title_guide">밤 세계</strong>
          <ul className="list_common">
            <li>
              <Link to="/beluga/dictionary/detail/21" className="link_guide" target="_blank">
                데빌럼블
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/22" className="link_guide" target="_blank">
                이벤트 던전
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/23" className="link_guide" target="_blank">
                탐험
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/24" className="link_guide" target="_blank">
                언더그라운드
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/25" className="link_guide" target="_blank">
                리버스 라비린스
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/26" className="link_guide" target="_blank">
                바 리플레이
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/27" className="link_guide" target="_blank">
                엔들리스 듀얼
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/28" className="link_guide" target="_blank">
                온천
              </Link>
            </li>
            <li>
              <Link to="/beluga/dictionary/detail/29" className="link_guide" target="_blank">
                환생관
              </Link>
            </li>
          </ul>
        </li>
      </Styled.list>
    </>
  )
}

export default React.memo(List)
