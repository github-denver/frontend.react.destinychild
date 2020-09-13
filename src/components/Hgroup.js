import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.hgroup = styled.div`
  margin-bottom: 24px;

  .title_hgroup {
    display: inline-block;
    font-family: 'NotoSansKR-Medium-Hestia';
    font-weight: 500;
    font-size: 32px;
    line-height: 1;
  }

  .inner_half {
    text-align: right;
    vertical-align: bottom;
  }

  .inner_half:first-child {
    text-align: left;
  }

  /* group_location
  ---------- ---------- ---------- ---------- ---------- */
  .group_location {
    display: inline-block;
    font-size: 0;
  }

  .group_location .text_location {
    display: inline-block;
    font-size: 14px;
    line-height: 1;
  }
`

const Hgroup = (props) => {
  const { attribute } = props

  return (
    <>
      <Styled.hgroup className="hgroup_global">
        <div className="group_half">
          <div className="inner_half">
            <h3 className="title_hgroup">{attribute.title}</h3>
          </div>
          <div className="inner_half">
            {attribute.location && (
              <div className="group_location">
                <span className="text_location">{attribute.title}</span>
                <span className="text_location">{attribute.title}</span>
              </div>
            )}
          </div>
        </div>
      </Styled.hgroup>
    </>
  )
}

export default React.memo(Hgroup)
