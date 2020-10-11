import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const $ = window.$

const Styled = {}

Styled.banner = styled.div``

const Loading = () => {
  return (
    <Styled.banner className="group_banner">
      <div className="loading"></div>
    </Styled.banner>
  )
}

const Banner = (props) => {
  const { category, banner, error, loading } = props

  useEffect(() => {
    if (!loading && !!banner) {
      const $banner = $('.inner_banner')
      const $page = $('.banner_page')
      const indicator = {
        $page: $('.banner_indicator_page'),
        $arrow: $('.banner_indicator_arrow')
      }

      $banner.not('.slick-initialized').slick({
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

      $banner.on('beforeChange', (event, slick, currentSlide, prevSlide) => {
        indicator.$page.find('.emphasis_page').text(prevSlide + 1)
      })

      indicator.$arrow.find('.slick-prev').on('click', () => {
        $banner.slick('slickPrev')
      })

      indicator.$arrow.find('.slick-next').on('click', () => {
        $banner.slick('slickNext')
      })

      return () => {
        if (!loading && !!banner) {
          // console.log('components → banner → [Banner.js] → useEffect(() => { .. } → return () => { .. }')
          // $banner.slick('unslick')
        }
      }
    }
  }, [banner, loading])

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → banner → [Banner.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → banner → [Banner.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !banner) {
    // console.group('components → banner → [Banner.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <Loading />
  }

  if (!banner) {
    // console.group('components → banner → [Banner.js]')
    // console.log('목록이 존재하지 않습니다.')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <Styled.banner className="group_banner">
        <div className="inner_banner slick">
          {banner.map((currentValue, index) => {
            return (
              <div key={currentValue.number}>
                <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_banner">
                  <span className="thumbnail_banner" style={{ backgroundImage: `url(http://localhost:4000/uploads/${currentValue.thumbnail})` }}></span>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="banner_page">
          <button type="button" className="button_page slick-prev">
            <span>이전</span>
          </button>
          <button type="button" className="button_page slick-next">
            <span>다음</span>
          </button>
        </div>
      </Styled.banner>
    </>
  )
}

export default Banner
