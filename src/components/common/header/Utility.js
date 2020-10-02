import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.utility = styled.div``

const Utility = ({ attribute }) => {
  const { user, logout } = attribute

  return (
    <ul className="list_utility">
      {user ? (
        <>
          <li>
            <button type="button" className="button_global button_small" onClick={logout}>
              로그아웃
            </button>
          </li>
          <li>
            <Link
              to="#"
              className="button_global button_small"
              onClick={() => {
                alert('개발 진행 중입니다.')
              }}>
              마이페이지
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/beluga/member/login" className="button_global button_small">
              로그인
            </Link>
          </li>
          <li>
            <Link to="/beluga/member/register" className="button_global button_small">
              회원가입
            </Link>
          </li>
        </>
      )}
    </ul>
  )
}

export default Utility
