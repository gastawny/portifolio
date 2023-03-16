import ITechnology from 'interfaces/Technology'
import useCookies from './useCookies'

const useApi = () => {
  async function login(loginData: { username: string; password: string }) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: loginData.username, password: loginData.password }),
    }

    const response = await fetch('https://api.gastawny.com/auth', requestOptions)
    const data = await response.json()

    if (data?.token === undefined) return

    const { setCookie } = useCookies()
    setCookie(data.token)

    return {
      message: data.message,
    }
  }

  async function getTechnologies() {
    const response = await fetch('http://api.gastawny.com/technologies')
    const data: ITechnology[] = await response.json()

    return data
  }

  async function updateTechnology({
    technology,
    value,
    iconSize,
    fontSize,
    iconName,
  }: ITechnology) {
    const {
      getCookies: { token },
    } = useCookies()

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', authorization: token },
      body: JSON.stringify({ value, iconSize, fontSize, iconName }),
    }

    await fetch(`https://api.gastawny.com/technologies/${technology}`, requestOptions)
  }

  return { login, updateTechnology, getTechnologies }
}

export default useApi
