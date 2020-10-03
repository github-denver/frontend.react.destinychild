import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const $ = window.$

const Styled = {}

Styled.visual = styled.div``

const Loading = () => {
  return (
    <Styled.visual className="group_visual">
      <div className="inner_visual">
        <div className="box_visual">
          <span className="loading"></span>
        </div>
      </div>
    </Styled.visual>
  )
}

const Visual = (props) => {
  const { visual, error, loading } = props

  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!loading && !!visual) {
      const $visual = $('.inner_visual')
      const $item = $visual.find('.slide')
      const $page = $('.visual_page')
      const indicator = {
        $page: $('.visual_indicator_page'),
        $arrow: $('.visual_indicator_arrow')
      }

      setTotal($item.length)

      $visual.not('.slick-initialized').on('init', (event, slick) => {
        indicator.$page.find('.emph_page').text(1)
        indicator.$page.find('.text_total').text(total)
      })

      $visual.not('.slick-initialized').slick({
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

      $visual.on('beforeChange', (event, slick, currentSlide, prevSlide) => {
        indicator.$page.find('.emph_page').text(prevSlide + 1)
      })

      indicator.$arrow.find('.slick-prev').on('click', () => {
        $visual.slick('slickPrev')
      })

      indicator.$arrow.find('.slick-next').on('click', () => {
        $visual.slick('slickNext')
      })

      return () => {
        // console.log('components → visual → [Visual.js] → useEffect(() => { .. } → return () => { .. }')
        // $visual.slick('unslick')
      }
    }
  }, [visual, total, loading])

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → visual → [Visual.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → visual → [Visual.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !visual) {
    // console.group('components → visual → [Visual.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <Loading />
  }

  if (!visual) {
    // console.group('components → visual → [Visual.js]')
    // console.log('목록이 존재하지 않습니다.')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <Styled.visual className="group_visual">
      <div className="inner_visual">
        {visual.map((currentValue, index) => {
          return (
            <div className="box_visual" style={{ backgroundImage: `url(http://localhost:4000/uploads/${currentValue.thumbnail})` }} key={currentValue.number}>
              <Link to="/" className="link_visual">
                <div className="information_visual">
                  <div className="outer_cell">
                    <div className="inner_cell">
                      <span className="text_date" dangerouslySetInnerHTML={{ __html: currentValue.contents }}></span>
                      <strong className="title_visual" dangerouslySetInnerHTML={{ __html: currentValue.subject }}></strong>
                      <p className="description_visual" dangerouslySetInnerHTML={{ __html: currentValue.description }}></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </Styled.visual>
  )
}

export default Visual
