import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = {}

Styled.form = styled.div``

const text = {
  login: '로그인',
  register: '등록'
}

const Form = ({ type, form, onChange, onSubmit, error }) => {
  // console.log('components → authorization → [Form.js] → type: ', type)

  const result = text[type]
  // console.log('components → authorization → [Form.js] → result: ', result)

  return (
    <Styled.form>
      {/* <strong>{result}</strong> */}

      <form onSubmit={onSubmit}>
        <fieldset>
          <legend className="invisible">회원가입 양식</legend>

          {type === 'register' && (
            <>
              {/* <div className="group_picture">
                <img src="/images/common/default_picture.png" alt="" className="image_picture" />

                <div className="group_upload">
                  <label htmlFor="picture" className="label_upload">
                    <span className="icon_global">프로필 사진 올리기</span>
                  </label>

                  <input type="file" name="picture" id="picture" className="textfield_upload" />
                </div>
              </div> */}
            </>
          )}

          <div className="group_field stairs">
            <label htmlFor="id" className="label_field">
              아이디
            </label>

            <span className="box_field">
              <input
                type="text"
                name="id"
                id="id"
                className="field_local"
                autoComplete="id"
                placeholder="아이디를 입력해 주세요."
                onChange={onChange}
                value={form.id}
              />
            </span>
          </div>

          <div className="group_field stairs">
            <label htmlFor="password" className="label_field">
              패스워드
            </label>

            <span className="box_field">
              <input
                type="password"
                name="password"
                id="password"
                className="field_local"
                autoComplete="password"
                placeholder="패스워드를 입력해 주세요."
                onChange={onChange}
                value={form.password}
              />
            </span>
          </div>

          {type === 'register' && (
            <>
              <div className="group_field stairs">
                <label htmlFor="confirm" className="label_field">
                  패스워드 확인
                </label>

                <span className="box_field">
                  <input
                    type="password"
                    name="confirm"
                    id="confirm"
                    className="field_local"
                    autoComplete="password"
                    placeholder="패스워드를 한 번 더 입력해 주세요."
                    onChange={onChange}
                    value={form.confirm}
                  />
                </span>
              </div>

              <div className="group_field stairs">
                <label htmlFor="name" className="label_field">
                  닉네임
                </label>

                <span className="box_field">
                  <input
                    type="text"
                    name="name"
                    className="field_local"
                    autoComplete="name"
                    placeholder="닉네임을 입력해 주세요."
                    onChange={onChange}
                    value={form.name}
                  />
                </span>
              </div>

              <div className="group_field stairs">
                <label htmlFor="email" className="label_field">
                  이메일
                </label>

                <span className="box_field">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="field_local"
                    autoComplete="email"
                    placeholder="이메일을 입력해 주세요."
                    onChange={onChange}
                    value={form.email}
                  />
                </span>
              </div>
            </>
          )}

          {error && <p>{error}</p>}

          <div className="group_button">
            <button type="submit" className="button_global button_default">
              {result}
            </button>
          </div>
        </fieldset>
      </form>

      <ul className="list_utility">
        {type === 'login' ? (
          <li>
            <Link to="/beluga/member/register" className="link_utility">
              회원가입
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/beluga/member/login" className="link_utility">
              로그인
            </Link>
          </li>
        )}
        {/* <li>
          <Link to="/" className="link_utility">
            아이디 찾기
          </Link>
        </li>
        <li>
          <Link to="/" className="link_utility">
            패스워드 찾기
          </Link>
        </li> */}
      </ul>
    </Styled.form>
  )
}

export default Form
