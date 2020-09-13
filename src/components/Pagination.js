import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.pagination = styled.div`
  display: inline-block;
  font-size: 0;
  vertical-align: top;

  &.current {
    border-color: #000;
    font-family: 'NotoSansKR-Regular-Hestia';
  }

  .link_pagination {
    display: inline-block;
    padding: 4px 12px;
    border: 1px solid transparent;
    font-family: 'NotoSansKR-Light-Hestia';
    font-size: 14px;
    background-color: #fff;
    vertical-align: middle;
  }
`

const queryString = ({ service, number }) => {
  // const query = qs.stringify({ tag, page })

  return `/${service}/list/${number}`
}

const Pagination = (props) => {
  const { pagination } = props

  const list = []

  for (let i = pagination.start; i <= pagination.end; i++) {
    list.push(
      <Link to={queryString({ service: 'notice', number: i })} key={i} className="link_pagination current">
        {i}
      </Link>
    )
  }

  return (
    <>
      {list.length !== 0 && (
        <Styled.pagination className="group_pagination">
          <Link disabled={pagination.current === 1} to={pagination.current === 1 ? '/' : queryString({ service: 'notice', number: pagination.current - 1 })}>
            이전
          </Link>
          <ul>
            <li>{list}</li>
          </ul>
          <Link
            disabled={pagination.current === pagination.end}
            to={pagination.current === pagination.end ? '/' : queryString({ service: 'notice', number: pagination.current + 1 })}>
            다음
          </Link>
        </Styled.pagination>
      )}
    </>
  )
}

export default React.memo(Pagination)
