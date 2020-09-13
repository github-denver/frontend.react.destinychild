import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

const $ = window.$

const Styled = {}

Styled.hero = styled.div`
  position: relative;
  padding-top: 75px;

  .inner_hero {
    position: relative;
    margin-bottom: 0;
  }

  .box_hero {
    background-position: 50% 0;
    background-repeat: no-repeat;
    outline: none;
  }

  .link_hero {
    display: block;
    position: relative;
    max-width: 1280px;
    height: 588px;
    margin: 0 auto;
  }

  .information_hero {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .text_date {
    display: block;
    font-family: 'NotoSansKR-Medium-Hestia';
    font-size: 20px;
  }

  .title_hero {
    display: block;
    margin-top: 12px;
    font-size: 52px;
    line-height: 1.2;
  }

  .description_hero {
    margin-top: 24px;
    font-size: 16px;
  }

  /* hero_page
  ---------- ---------- ---------- ---------- ---------- */
  .hero_page {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 1280px;
    margin: -56px 0 0 -705px;
  }

  .hero_page .button_page {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 29px;
    height: 57px;
    border: 0 none;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
  }

  .hero_page .slick-prev {
    left: 0;
    background-position: 0 -60px;
  }

  .hero_page .slick-next {
    right: 0;
    background-position: -40px -60px;
  }

  /* hero_indicator
  ---------- ---------- ---------- ---------- ---------- */
  .hero_indicator {
    overflow: visible;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 1280px;
    margin: 0 auto;
    font-size: 0;
    text-align: right;
  }

  .hero_indicator_page {
    display: inline-block;
    width: 70px;
    border-left: 1px solid #1c1e1e;
    box-sizing: border-box;
    font-size: 0;
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
    vertical-align: top;
  }

  .hero_indicator_page .emph_page {
    font-style: normal;
    font-size: 16px;
    line-height: 70px;
    color: #fff;
  }

  .hero_indicator_page .text_slash,
  .hero_indicator_page .text_total {
    font-size: 16px;
    line-height: 70px;
    color: #868686;
  }

  .hero_indicator_arrow {
    display: inline-block;
    position: relative;
    width: 141px;
    margin-left: 1px;
    border-left: 1px solid #1c1e1e;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.8);
    vertical-align: top;
  }

  .hero_indicator_arrow:before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 16px;
    margin: -8px 0 0 -1px;
    background-color: #e9e9e9;
    content: '';
  }

  .hero_indicator_arrow .button_indicator {
    display: inline-block;
    position: relative;
    top: 0;
    left: 0;
    width: 70px;
    height: 70px;
    margin: 0;
    border: 0 none;
    background-color: transparent;
    font-size: 1px;
    color: transparent;
    vertical-align: top;
    cursor: pointer;
  }

  .hero_indicator_arrow .button_indicator:before {
    content: '';
  }

  .hero_indicator_arrow .button_indicator:focus {
    z-index: 1;
  }

  .hero_indicator .button_detail {
    display: inline-block;
    position: relative;
    width: 70px;
    max-width: 1280px;
    height: 70px;
    margin-left: 1px;
    background-color: rgba(0, 0, 0, 0.8);
    vertical-align: top;
  }
`

const Hero = (props) => {
  const { category, hero, error, loading } = props

  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!loading && !!hero) {
      const $hero = $('.inner_hero')
      const $item = $hero.find('.slide')
      const $page = $('.hero_page')
      const indicator = {
        $page: $('.hero_indicator_page'),
        $arrow: $('.hero_indicator_arrow')
      }

      setTotal($item.length)

      $hero.not('.slick-initialized').on('init', (event, slick) => {
        indicator.$page.find('.emph_page').text(1)
        indicator.$page.find('.text_total').text(hero.length)
      })

      $hero.not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'cubic-bezier(0.76, 0, 0.24, 1)',
        prevArrow: $page.find('.slick-prev'),
        nextArrow: $page.find('.slick-next')
      })

      $hero.on('beforeChange', (event, slick, currentSlide, prevSlide) => {
        indicator.$page.find('.emph_page').text(prevSlide + 1)
      })

      indicator.$arrow.find('.slick-prev').on('click', () => {
        $hero.slick('slickPrev')
      })

      indicator.$arrow.find('.slick-next').on('click', () => {
        $hero.slick('slickNext')
      })

      return () => {
        // console.log('components → slick → [Hero.js] → useEffect(() => { .. } → return () => { .. }')
        // $hero.slick('unslick')
      }
    }
  }, [hero, loading])

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → slick → [Hero.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → slick → [Hero.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !hero) {
    // console.group('components → slick → [Hero.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <Loading attribute={{ paddingTop: 75, height: 588 }} />
  }

  if (hero.length === 0) {
    // console.group('components → slick → [Hero.js]')
    // console.log('목록이 존재하지 않습니다.')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <Styled.hero className="group_hero">
      <div className="inner_hero slick">
        {hero.map((currentValue, index) => {
          return (
            <div className="box_hero" style={{ backgroundImage: `url(http://localhost:4000/uploads/${currentValue.thumbnail})` }} key={currentValue.number}>
              <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_hero">
                <div className="information_hero">
                  <div className="outer_cell">
                    <div className="inner_cell">
                      <span className="text_date" dangerouslySetInnerHTML={{ __html: currentValue.contents }}></span>
                      <strong className="title_hero" dangerouslySetInnerHTML={{ __html: currentValue.subject }}></strong>
                      <p className="description_hero" dangerouslySetInnerHTML={{ __html: currentValue.description }}></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      <div className="hero_page">
        <button type="button" className="button_page slick-prev">
          <span>이전</span>
        </button>
        <button type="button" className="button_page slick-next">
          <span>다음</span>
        </button>
      </div>

      <div className="hero_indicator">
        <div className="hero_indicator_page">
          <em className="emph_page"></em>
          <span className="text_slash">/</span>
          <span className="text_total">{total}</span>
        </div>

        <div className="hero_indicator_arrow">
          <button type="button" className="button_indicator slick-prev">
            이전
          </button>
          <button type="button" className="button_indicator slick-next">
            다음
          </button>
        </div>

        <Link to="/" className="button_indicator button_detail">
          전체 이벤트 보러가기
        </Link>
      </div>
    </Styled.hero>
  )
}

export default React.memo(Hero)
