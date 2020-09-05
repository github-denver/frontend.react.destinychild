import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.contents = styled.section``

const Contents = (props) => {
  const { attribute } = props

  return (
    <>
      <section className={attribute && attribute.className ? `contents ${attribute.className}` : 'contents'}>
        {attribute && attribute.title && (
          <h3 className="title_contents">
            <Link to={{ pathname: `/beluga/${attribute.category}/list`, query: { title: attribute.title } }} className="link_contents">
              {attribute.title}
            </Link>
          </h3>
        )}

        {props.children}
      </section>
    </>
  )
}

export default React.memo(Contents)
