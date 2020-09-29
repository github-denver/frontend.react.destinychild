import React from 'react'
import styled from 'styled-components'

const Styled = {}

Styled.footer = styled.div``

const Footer = () => {
  return (
    <>
      <Styled.footer className="footer">
        <div className="inner_global">
          <p className="text_copyright">이 사이트는 개인 포트폴리오 사이트입니다. 데스티니 차일드와 어떠한 관계도 없습니다.</p>
        </div>
      </Styled.footer>
    </>
  )
}

export default Footer
