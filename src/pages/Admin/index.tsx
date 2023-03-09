import { useState } from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie'

const Admin = () => {
  const [login, setLogin] = useState({ username: '', password: '' })
  const [message, setMessage] = useState('')

  function updateLogin(key: string, event: React.ChangeEvent<HTMLInputElement>) {
    setLogin((currentLogin) => ({
      ...currentLogin,
      [key]: event.target.value,
    }))
  }

  const resultMessage = (currentMessage: string) => {
    setMessage(currentMessage)
    setTimeout(() => {
      setMessage('')
    }, 1200)
  }

  async function loginSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: login.username, password: login.password }),
    }

    const response = await fetch('https://api.gastawny.com/auth', requestOptions)
    const data = await response.json()
    resultMessage(data.message)

    setLogin({ username: '', password: '' })

    if (data?.token === undefined) return

    const cookies = new Cookies()
    cookies.set(
      'authorization',
      { key: data.token },
      { path: '/admin', expires: new Date(Date.now() + 600000) }
    )
  }

  return (
    <LoginContainer>
      <Login>
        <div>
          <label>
            Username
            <input
              type="text"
              value={login.username}
              onChange={(event) => updateLogin('username', event)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={login.password}
              onChange={(event) => updateLogin('password', event)}
            />
          </label>
        </div>
        <button type="submit" onClick={loginSubmit}>
          Login
        </button>
        {message !== '' && (
          <div className="message">
            <h3>{message}</h3>
          </div>
        )}
      </Login>
    </LoginContainer>
  )
}

export default Admin

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Login = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .message {
    background: #10151e;
    padding: 1rem;
    border-radius: 15px;
    position: absolute;
    bottom: -6rem;
    max-width: min-content;

    h3 {
      font-size: 2.4rem;
      letter-spacing: 0.2rem;
      text-align: center;
    }
  }

  label {
    font-size: 2rem;
    color: #fbfbfb;
    letter-spacing: 0.2rem;
  }

  input {
    background: transparent;
    border: 3px solid #10151e;
    color: #fbfbfb;
    font-size: 2rem;
    padding: 0.5rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
    width: 22rem;
    margin-left: 1rem;
    transition: 0.5s;

    &:focus {
      border: 3px solid #07090e;
      outline: none;
    }
  }

  button {
    font-size: 2rem;
    padding: 1rem 5rem;
    background: #10151e;
    color: #fbfbfb;
    letter-spacing: 0.4rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: 0.5s;

    &:hover {
      background: #07090e;
    }
  }
`
