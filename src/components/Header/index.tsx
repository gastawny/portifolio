import { Outlet } from 'react-router-dom'
import useWidth from 'hooks/useWidth'
import MobileHeader from './mobileHeader'
import DesktopHeader from './desktopHeader'

const Header = () => {
  const { layoutType } = useWidth()

  return (
    <>
      {layoutType === 'mobile' && <MobileHeader />}
      {layoutType !== 'mobile' && <DesktopHeader />}
      <Outlet />
    </>
  )
}

export default Header
