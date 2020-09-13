import React, { useEffect } from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import Loading from '../Loading'

const $ = window.$

const Styled = {}

Styled.child = styled.div`
  position: relative;

  .slick-slider {
    margin-bottom: 0;
  }

  .slick-dots {
    bottom: 0;
    text-align: left;
  }

  .slick-dots li {
    width: auto;
    height: auto;
    margin: 0;
  }

  .slick-dots li + li {
    margin-left: 12px;
  }

  .slick-dots li button {
    width: 60px;
    height: 6px;
    padding: 0;
    background-color: #e9e9e9;
  }

  .slick-dots li button:before {
    display: none;
  }

  .slick-dots .slick-active button {
    background-color: #000;
  }

  .text_child {
    margin-top: 12px;
    font-family: 'NotoSansKR-Regular-Hestia';
    font-size: 22px;
  }

  .description_child {
    margin-top: 24px;
    font-family: 'NanumGothic';
    font-size: 16px;
    word-break: keep-all;
  }

  .thumbnail_child {
    position: absolute;
    top: 0;
    right: 0;
    max-height: 640px;
  }

  .box_child {
    height: 640px;
    outline: none;
  }

  /* hgroup_child
  ---------- ---------- ---------- ---------- ---------- */
  .hgroup_child .title_child {
    font-family: 'NotoSansKR-Bold-Hestia';
    font-weight: 700;
    font-size: 48px;
    line-height: 1;
  }

  /* list_property
  ---------- ---------- ---------- ---------- ---------- */
  .list_property {
    margin-top: 24px;
    font-size: 0;
  }

  .list_property li {
    display: inline-block;
    font-family: 'NotoSansKR-Light-Hestia';
    font-size: 16px;
    vertical-align: top;
  }

  .list_property li + li {
    margin-left: 12px;
  }

  .list_property .thumbnail_property {
    display: inline-block;
    width: 24px;
    vertical-align: middle;
  }

  .list_property .text_property {
    display: inline-block;
    margin-left: 4px;
    vertical-align: middle;
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

const Child = (props) => {
  const { list, error, loading } = props

  useEffect(() => {
    if (!loading && !!list) {
      const $list = $('.list_child')
      const $page = $('.banner_page')
      const indicator = {
        $page: $('.banner_indicator_page'),
        $arrow: $('.banner_indicator_arrow')
      }

      $list.not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'cubic-bezier(0.76, 0, 0.24, 1)',
        prevArrow: $page.find('.slick-prev'),
        nextArrow: $page.find('.slick-next'),
        dots: true
      })

      $list.on('beforeChange', (event, slick, currentSlide, prevSlide) => {
        indicator.$page.find('.emph_page').text(prevSlide + 1)
      })

      indicator.$arrow.find('.slick-prev').on('click', () => {
        $list.slick('slickPrev')
      })

      indicator.$arrow.find('.slick-next').on('click', () => {
        $list.slick('slickNext')
      })

      return () => {
        if (!loading && !!list) {
          // console.log('components → common → [Child.js] → useEffect(() => { .. } → return () => { .. }')
          // $list.slick('unslick')
        }
      }
    }
  }, [list, loading])

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → common → child → [Child.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → common → child → [Child.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !list) {
    // console.group('components → common → child → [Child.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <Loading attribute={{ height: 640 }} />
  }

  if (!list) {
    // console.group('components → common → child → [Child.js]')
    // console.log('목록이 존재하지 않습니다.')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <Styled.child className="group_child">
        <div className="list_child slick">
          {list.map((currentValue, index) => {
            return (
              <div className="box_child" key={index}>
                <div className="hgroup_child" key={index}>
                  <h3 className="title_child">{currentValue.subject}</h3>
                  <p className="text_child" dangerouslySetInnerHTML={{ __html: currentValue.description }}></p>

                  <ul className="list_property">
                    <li>
                      <img src={`/uploads/${currentValue.natural_thumbnail}`} alt="" className="thumbnail_property" />
                      <span className="text_property">{currentValue.natural}</span>
                    </li>
                    <li>
                      <img src={`/uploads/${currentValue.class_thumbnail}`} alt="" className="thumbnail_property" />
                      <span className="text_property">{currentValue.class}</span>
                    </li>
                  </ul>

                  <p className="description_child" dangerouslySetInnerHTML={{ __html: currentValue.story }}></p>
                </div>

                <img src={`http://localhost:4000/uploads/${currentValue.portrait}`} alt="" className="thumbnail_child" />
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
      </Styled.child>
    </>
  )
}

export default React.memo(Child)
