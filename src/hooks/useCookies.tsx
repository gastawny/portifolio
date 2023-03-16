import Cookies from 'universal-cookie'

const useCookies = () => {
  const cookies = new Cookies()
  const result = cookies.get('authorization')
  const getCookies = { responseCookies: result === undefined ? false : true, token: result?.key }

  const setCookie = (token: string) => {
    cookies.set(
      'authorization',
      { key: token },
      { path: '/admin', expires: new Date(Date.now() + 600000) }
    )
  }

  return { setCookie, getCookies }
}

export default useCookies
