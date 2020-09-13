import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

const $ = window.$

const Styled = {}

Styled.banner = styled.div`
  position: relative;
  box-sizing: border-box;
  font-size: 0;

  .slick-slider {
    margin-bottom: 0;
  }

  .link_banner {
    display: block;
    height: 231px;
    background-color: #f7f7f7;
  }

  .thumbnail_banner {
    max-width: 100%;
  }

  .banner_page {
    position: absolute;
    top: 0;
    right: 0;
  }

  .banner_page:before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 1px;
    height: 16px;
    margin: -8px 0 0 -1px;
    background-color: #e9e9e9;
    content: '';
  }

  /* banner_page
  ---------- ---------- ---------- ---------- ---------- */
  .banner_page .button_page {
    display: inline-block;
    position: relative;
    top: 0;
    left: 0;
    width: 48px;
    height: 48px;
    margin: 0;
    border: 0 none;
    background-color: #fff;
    font-size: 1px;
    color: transparent;
    vertical-align: top;
    cursor: pointer;
  }

  .banner_page .button_page:focus {
    z-index: 1;
  }
`

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
        indicator.$page.find('.emph_page').text(prevSlide + 1)
      })

      indicator.$arrow.find('.slick-prev').on('click', () => {
        $banner.slick('slickPrev')
      })

      indicator.$arrow.find('.slick-next').on('click', () => {
        $banner.slick('slickNext')
      })

      return () => {
        if (!loading && !!banner) {
          // console.log('components → common → [Banner.js] → useEffect(() => { .. } → return () => { .. }')
          // $banner.slick('unslick')
        }
      }
    }
  }, [banner, loading])

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → common → [Banner.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → common → [Banner.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !banner) {
    // console.group('components → common → [Banner.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <Loading attribute={{ height: 231 }} />
  }

  if (!banner) {
    // console.group('components → common → [Banner.js]')
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
              <li key={currentValue.number}>
                <Link to={`/beluga/${category}/read/${currentValue.number}`} className="link_banner">
                  <img src={`http://localhost:4000/uploads/${currentValue.thumbnail}`} alt="" className="thumbnail_banner" />
                </Link>
              </li>
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

export default React.memo(Banner)
