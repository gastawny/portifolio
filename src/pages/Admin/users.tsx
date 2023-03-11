import { useState } from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie'

const Users = () => {
  const [auth, setAuth] = useState({ username: '', password: '', confirmPassword: '' })
  const [message, setMessage] = useState('')

  const updateAuth = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth((currentAuth) => ({
      ...currentAuth,
      [key]: event.target.value,
    }))
  }

  const cookies = new Cookies()
  const authorizationCookie = cookies.get('authorization')

  if (authorizationCookie === undefined) return <></>

  async function registerSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()

    if (auth.password !== auth.confirmPassword) return setMessage('Different passwords')

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', authorization: authorizationCookie.key },
      body: JSON.stringify({ username: auth.username, password: auth.password }),
    }

    const response = await fetch('https://api.gastawny.com/users', requestOptions)
    const data = await response.json()
    setMessage(data.message)

    setAuth({ username: '', password: '', confirmPassword: '' })
  }

  return (
    <LoginContainer>
      <h1>Register new user</h1>
      <Login>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={auth.username}
            onChange={(event) => updateAuth('username', event)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={auth.password}
            onChange={(event) => updateAuth('password', event)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={auth.confirmPassword}
            onChange={(event) => updateAuth('confirmPassword', event)}
          />
        </div>
        <button type="submit" onClick={registerSubmit}>
          Register
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

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  height: 100vh;

  h1 {
    font-size: 3.5rem;
    letter-spacing: 0.3rem;
    font-weight: 600;
  }
`

const Login = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-size: 1.6rem;
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
    transition: 0.5s;

    &:focus {
      border: 3px solid #07090e;
      outline: none;
    }
  }

  button {
    font-size: 1.8rem;
    padding: 1rem 4rem;
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

export default Users
