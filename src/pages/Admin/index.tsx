import styled from 'styled-components'

const Admin = () => {
  return (
    <LoginContainer>
      <Login>
        <div>
          <label>
            Username
            <input type="text" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
        </div>
        <button type="submit">Login</button>
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

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
