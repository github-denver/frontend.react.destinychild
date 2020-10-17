import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.pagination = styled.div``

const queryString = ({ service, number }) => {
  return `/beluga/${service}/list/${number}`
}

const Pagination = (props) => {
  const { category, pagination } = props

  const list = []

  for (let i = pagination.start; i <= pagination.end; i++) {
    list.push(
      <Link to={queryString({ service: category, number: i })} key={i} className="link_pagination current">
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
          <ul className="list_pagination">
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

export default Pagination
