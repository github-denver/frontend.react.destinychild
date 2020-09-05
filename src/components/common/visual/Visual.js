import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import Loading from '../Loading'

// const $ = window.$

const Styled = {}

Styled.visual = styled.section``

const Visual = (props) => {
  // const { visual, error, loading } = props

  useEffect(() => {
    // console.log('components → common → slick → [Visual.js] → useEffect(() => { .. }')
  }, [])

  return (
    <div className="sub_visual">
      <div className="sub_visual_lst">
        <div className="slide">
          <Link to="/">
            <div className="thumbnail_container">
              <img src="/images/common/thumbnail_visual.png" alt="" />
            </div>
            <div className="desc_container">
              <span className="date">2020.04.06 - 2020.04.28</span>
              <h2 className="evt_tit">테스트 서버 리스타트</h2>
              <p className="evt_desc">고객님께 감사하는 마음을 담아 보너스 이벤트를 진행합니다.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Visual)
