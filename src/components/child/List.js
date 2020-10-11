import React, { useEffect } from 'react'
import styled from 'styled-components'

const $ = window.$

const Styled = {}

Styled.child = styled.div``

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
        indicator.$page.find('.emphasis_page').text(prevSlide + 1)
      })

      indicator.$arrow.find('.slick-prev').on('click', () => {
        $list.slick('slickPrev')
      })

      indicator.$arrow.find('.slick-next').on('click', () => {
        $list.slick('slickNext')
      })

      return () => {
        if (!loading && !!list) {
          // console.log('components → [List.js] → useEffect(() => { .. } → return () => { .. }')
          // $list.slick('unslick')
        }
      }
    }
  }, [list, loading])

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → child → [List.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → child → [List.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !list) {
    // console.group('components → child → [List.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <p>읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.</p>
  }

  if (!list) {
    // console.group('components → child → [List.js]')
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

export default Child
