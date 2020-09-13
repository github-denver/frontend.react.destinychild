import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.loading = styled.div`
  overflow: hidden;
  position: relative;

  .thumbnail_loading {
    /* padding-top: 56.25%; */
    background-color: #f1f1f1;
  }

  /* .caption_loading {
    margin-top: 24px;
  }

  .subject_loading {
    display: block;
    height: 20px;
    margin: 0 12px;
    background-color: #f1f1f1;
  }

  .text_loading {
    display: block;
    height: 20px;
    margin: 4px 12px 0;
    background-color: #f1f1f1;
  } */

  .layer_effect:after {
    -webkit-animation: effectLoading 0.4s linear infinite forwards;
    -moz-animation: effectLoading 0.4s linear infinite forwards; /* animation:effectLoading 4s linear infinite alternate forwards; IE Don't use */
    animation: effectLoading 0.4s linear infinite forwards;
    -webkit-animation-play-state: running;
    -moz-animation-play-state: running; /* animation-play-state:running IE Don't use */
    animation-play-state: running;
  }

  /* layer_effect
  ---------- ---------- ---------- ---------- ---------- */
  .layer_effect {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: 0.4s cubic-bezier(0.48, 0, 0, 1);
    -moz-transition: 0.4s cubic-bezier(0.48, 0, 0, 1);
    -o-transition: 0.4s cubic-bezier(0.48, 0, 0, 1);
    transition: 0.4s cubic-bezier(0.48, 0, 0, 1);
  }

  .layer_effect:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(120deg, transparent 25%, hsla(0, 0%, 90%, 0.5) 50%, transparent 75%);
    opacity: 1;
    content: '';
    -webkit-transform: translate3d(-100%, 0, 0);
    -moz-transform: translate3d(-100%, 0, 0);
    -ms-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    -webkit-transition: transform 0.4s linear;
    -moz-transition: transform 0.4s linear;
    -o-transition: transform 0.4s linear;
    transition: transform 0.4s linear;
  }

  /* keyframes
  ---------- ---------- ---------- ---------- ---------- */
  @-webkit-keyframes effectLoading {
    0% {
      -webkit-transform: translate3d(-100%, 0, 0);
      -moz-transform: translate3d(-100%, 0, 0);
      -ms-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(100%, 0, 0);
      -moz-transform: translate3d(100%, 0, 0);
      -ms-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }

  @-moz-keyframes effectLoading {
    0% {
      -webkit-transform: translate3d(-100%, 0, 0);
      -moz-transform: translate3d(-100%, 0, 0);
      -ms-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(100%, 0, 0);
      -moz-transform: translate3d(100%, 0, 0);
      -ms-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }

  @keyframes effectLoading {
    0% {
      -webkit-transform: translate3d(-100%, 0, 0);
      -moz-transform: translate3d(-100%, 0, 0);
      -ms-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(100%, 0, 0);
      -moz-transform: translate3d(100%, 0, 0);
      -ms-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }
`

const Loading = (props) => {
  const { attribute } = props

  return (
    <>
      <Styled.loading className="group_loading" style={{ paddingTop: attribute.paddingTop }}>
        <div className="thumbnail_loading" style={{ height: attribute.height }}></div>
        <div className="caption_loading">
          <span className="subject_loading"></span>
          <span className="text_loading"></span>
        </div>
        <span className="layer_effect"></span>
      </Styled.loading>
    </>
  )
}

export default React.memo(Loading)
