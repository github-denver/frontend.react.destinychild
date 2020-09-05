import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import Loading from '../common/Loading'

const $ = window.$

const Styled = {}

Styled.hero = styled.div``

const Hero = (props) => {
  const { hero, error, loading } = props

  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!loading && !!hero) {
      const $hero = $('.list_hero')
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
        console.log('components → slick → [Hero.js] → useEffect(() => { .. } → return () => { .. }')

        // $hero.slick('unslick')
      }
    }
  }, [hero, loading])

  if (error) {
    if (error.response && error.response.status === 404) {
      console.group('components → slick → [Hero.js]')
      console.log('존재하지 않는 데이터입니다.')
      console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    console.group('components → slick → [Hero.js]')
    console.log('에러가 발생했어요!')
    console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !hero) {
    console.group('components → slick → [Hero.js]')
    console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    console.groupEnd()

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!hero) {
    console.group('components → slick → [Hero.js]')
    console.log('목록이 존재하지 않습니다.')
    console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <div className="area_hero">
      <div className="list_hero slick">
        {hero.map((currentValue, index) => {
          return (
            <li style={{ backgroundImage: `url(http://localhost:4000/uploads/${currentValue.thumbnail})` }} key={currentValue.number}>
              <Link to="/" className="link_hero">
                <div className="information_hero">
                  <div className="outer_cell">
                    <div className="inner_cell">
                      <span className="text_date" dangerouslySetInnerHTML={{ __html: currentValue.contents }}></span>
                      <strong className="title_hero" dangerouslySetInnerHTML={{ __html: currentValue.subject }}></strong>
                      <p className="text_hero" dangerouslySetInnerHTML={{ __html: currentValue.description }}></p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
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
    </div>
  )
}

export default React.memo(Hero)
