import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Hgroup from '../Hgroup'

const $ = window.$

const Styled = {}

Styled.hero = styled.div``

const Loading = () => {
  return (
    <Styled.hero className="group_hero">
      <div className="inner_hero">
        <div className="box_hero">
          <span className="loading"></span>
        </div>
      </div>
    </Styled.hero>
  )
}

const Hero = (props) => {
  // const { category, hero, error, loading } = props
  const { hero, error, loading } = props

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
        indicator.$page.find('.emphasis_page').text(1)
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
        indicator.$page.find('.emphasis_page').text(prevSlide + 1)
      })

      indicator.$arrow.find('.slick-prev').on('click', () => {
        $hero.slick('slickPrev')
      })

      indicator.$arrow.find('.slick-next').on('click', () => {
        $hero.slick('slickNext')
      })

      return () => {
        // $hero.slick('unslick')
      }
    }
  }, [hero, loading])

  if (error) {
    if (error.response && error.response.status === 404) {
      return <p>존재하지 않는 데이터입니다.</p>
    }

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !hero) {
    return <Loading />
  }

  if (hero.length === 0) {
    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <Hgroup attribute={{ title: '히어로 영역', invisible: true }} />

      <Styled.hero className="group_hero">
        <div className="inner_hero slick">
          {hero.map((currentValue, index) => {
            return (
              <div className="box_hero" style={{ backgroundImage: `url(http://localhost:4000/uploads/${currentValue.thumbnail})` }} key={currentValue.number}>
                <Link to={currentValue.url} className="link_hero">
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
            <em className="emphasis_page"></em>
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

          <Link to="/beluga/update/list" className="button_indicator button_detail">
            더 보기
          </Link>
        </div>
      </Styled.hero>
    </>
  )
}

export default Hero
