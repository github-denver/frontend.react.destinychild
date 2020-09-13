import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

const Styled = {}

Styled.media = styled.div`
  .inner_triple.first {
    width: 320px;
    height: 360px;
  }

  .inner_triple {
    position: relative;
    width: 640px;
    height: 360px;
    padding-left: 0;
  }

  .inner_triple.last {
    width: 320px;
    height: 360px;
  }

  .link_media {
    display: block;
    position: relative;
    padding-top: 56.25%;
  }

  .link_media:focus {
    z-index: 10;
  }

  .thumbnail_media {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
  }

  .outer_cell {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
  }

  .inner_cell:before {
    display: inline-block;
    position: relative;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -18px;
    border-top: 24px solid transparent;
    border-right: 24px solid transparent;
    border-bottom: 24px solid transparent;
    border-left: 36px solid #fff;
    content: '';
  }

  .text_media {
    display: block;
    margin-top: 12px;
    font-family: 'NotoSansKR-Light-Hestia';
    font-size: 16px;
    color: #fff;
    text-align: center;
  }

  .dummy {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: #000;
    opacity: 0.5;
  }
`

const Media = (props) => {
  const { list, error, loading } = props

  if (error) {
    if (error.response && error.response.status === 404) {
      // console.group('components → common → media → [Media.js]')
      // console.log('존재하지 않는 데이터입니다.')
      // console.groupEnd()

      return <p>존재하지 않는 데이터입니다.</p>
    }

    // console.group('components → common → media → [Media.js]')
    // console.log('에러가 발생했어요!')
    // console.groupEnd()

    return <p>에러가 발생했어요!</p>
  }

  if (loading || !list) {
    // console.group('components → common → media → [Media.js]')
    // console.log('읽어들이는 중이거나 아직 데이터가 존재하지 않습니다.')
    // console.groupEnd()

    return <Loading attribute={{ height: 360 }} />
  }

  if (!list) {
    // console.group('components → common → media → [Media.js]')
    // console.log('목록이 존재하지 않습니다.')
    // console.groupEnd()

    return <p>목록이 존재하지 않습니다.</p>
  }

  return (
    <>
      <Styled.media className="group_media group_triple">
        <div className="inner_triple first">
          <Link to={{ pathname: `https://www.youtube.com/watch?v=${list[4].address}` }} target="_blank" className="link_media">
            <img src={`http://localhost:4000/uploads/${list[4].thumbnail}`} alt="" className="thumbnail_media" />
            <span className="outer_cell">
              <span className="inner_cell">
                <span className="text_media">{list[4].subject}</span>
              </span>
            </span>
            <span className="dummy"></span>
          </Link>

          <Link to={{ pathname: `https://www.youtube.com/watch?v=${list[3].address}` }} target="_blank" className="link_media">
            <img src={`http://localhost:4000/uploads/${list[3].thumbnail}`} alt="" className="thumbnail_media" />
            <span className="outer_cell">
              <span className="inner_cell">
                <span className="text_media">{list[3].subject}</span>
              </span>
            </span>
            <span className="dummy"></span>
          </Link>
        </div>

        <div className="inner_triple">
          <Link to={{ pathname: `https://www.youtube.com/watch?v=${list[2].address}` }} target="_blank" className="link_media">
            <img src={`http://localhost:4000/uploads/${list[2].thumbnail}`} alt="" className="thumbnail_media" />
            <span className="outer_cell">
              <span className="inner_cell">
                <span className="text_media">{list[2].subject}</span>
              </span>
            </span>
            <span className="dummy"></span>
          </Link>
        </div>

        <div className="inner_triple last">
          <Link to={{ pathname: `https://www.youtube.com/watch?v=${list[1].address}` }} target="_blank" className="link_media">
            <img src={`http://localhost:4000/uploads/${list[1].thumbnail}`} alt="" className="thumbnail_media" />
            <span className="outer_cell">
              <span className="inner_cell">
                <span className="text_media">{list[1].subject}</span>
              </span>
            </span>
            <span className="dummy"></span>
          </Link>

          <Link to={{ pathname: `https://www.youtube.com/watch?v=${list[0].address}` }} target="_blank" className="link_media">
            <img src={`http://localhost:4000/uploads/${list[0].thumbnail}`} alt="" className="thumbnail_media" />
            <span className="outer_cell">
              <span className="inner_cell">
                <span className="text_media">{list[0].subject}</span>
              </span>
            </span>
            <span className="dummy"></span>
          </Link>
        </div>
      </Styled.media>
    </>
  )
}

export default React.memo(Media)
