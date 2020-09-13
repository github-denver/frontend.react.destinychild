import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

const $ = window.$

const Styled = {}

Styled.visual = styled.div`
  position: relative;
  padding-top: 75px;
  background-color: #f7f7f7;

  .inner_visual {
    position: relative;
    margin-bottom: 0;
  }

  .box_visual {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    outline: none;
  }

  .link_visual {
    display: block;
    position: relative;
    max-width: 1280px;
    height: 412px;
    margin: 0 auto;
  }

  .information_visual {
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

  .title_visual {
    display: block;
    margin-top: 12px;
    font-size: 52px;
    line-height: 1.2;
  }

  .description_visual {
    margin-top: 24px;
    font-size: 16px;
  }

  /* visual_page
---------- ---------- ---------- ---------- ---------- */
  .visual_page {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 1280px;
    margin: -56px 0 0 -705px;
  }

  .visual_page .button_page {
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

  .visual_page .slick-prev {
    left: 0;
    background-position: 0 -60px;
  }

  .visual_page .slick-next {
    right: 0;
    background-position: -40px -60px;
  }

  /* visual_indicator
  ---------- ---------- ---------- ---------- ---------- */
  .visual_indicator {
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

  .visual_indicator_page {
    display: inline-block;
    width: 70px;
    border-left: 1px solid #1c1e1e;
    box-sizing: border-box;
    font-size: 0;
    background-color: rgba(0, 0, 0, 0.8);
    text-align: center;
    vertical-align: top;
  }

  .visual_indicator_page .emph_page {
    font-style: normal;
    font-size: 16px;
    line-height: 70px;
    color: #fff;
  }

  .visual_indicator_page .text_slash,
  .visual_indicator_page .text_total {
    font-size: 16px;
    line-height: 70px;
    color: #868686;
  }

  .visual_indicator_arrow {
    display: inline-block;
    position: relative;
    width: 141px;
    margin-left: 1px;
    border-left: 1px solid #1c1e1e;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.8);
    vertical-align: top;
  }

  .visual_indicator_arrow:before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 16px;
    margin: -8px 0 0 -1px;
    background-color: #e9e9e9;
    content: '';
  }

  .visual_indicator_arrow .button_indicator {
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

  .visual_indicator_arrow .button_indicator:before {
    content: '';
  }

  .visual_indicator_arrow .button_indicator:focus {
    z-index: 1;
  }

  .visual_indicator .button_detail {
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
        // console.log('components → common → visual → [Visual.js] → useEffect(() => { .. } → return () => { .. }')
        // $visual.slick('unslick')
      }
    }
  }, [visual, total, loading])

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → common → visual → [Visual.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → common → visual → [Visual.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !visual) {
    // console.group('components → common → visual → [Visual.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <Loading attribute={{ paddingTop: 75, height: 412 }} />
  }

  if (!visual) {
    // console.group('components → common → visual → [Visual.js]')
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

export default React.memo(Visual)
