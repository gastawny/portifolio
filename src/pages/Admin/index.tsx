import useApi from 'hooks/useApi'
import useCookies from 'hooks/useCookies'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Admin = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const [message, setMessage] = useState('')
  const [registered, setRegistered] = useState(false)
  const navigate = useNavigate()
  const { login } = useApi()
  const {
    getCookies: { responseCookies },
  } = useCookies()

  useEffect(() => {
    if (responseCookies) setRegistered(true)
  }, [])

  function updateLogin(key: string, event: React.ChangeEvent<HTMLInputElement>) {
    setLoginData((currentLogin) => ({
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

    const data = await login(loginData)

    resultMessage(data?.message)
    setLoginData({ username: '', password: '' })
    setRegistered(true)
  }

  return registered ? (
    <>
      <RegisteredContainer>
        <Button onClick={() => navigate('/admin/technologies')}>Update technologies</Button>
        <Button onClick={() => navigate('/admin/users')}>Register new user</Button>
      </RegisteredContainer>
    </>
  ) : (
    <LoginContainer>
      <Login>
        <div>
          <label>
            Username
            <input
              type="text"
              value={loginData.username}
              onChange={(event) => updateLogin('username', event)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={loginData.password}
              onChange={(event) => updateLogin('password', event)}
            />
          </label>
        </div>
        <Button type="submit" onClick={loginSubmit}>
          Login
        </Button>
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

const RegisteredContainer = styled.div`
  height: 80vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`

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
`
const Button = styled.button`
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
`
