import Home from 'pages/Home'
import { Routes, Route, useLocation } from 'react-router'
import Header from 'components/Header'
import Contact from 'pages/Contact'
import Projects from 'pages/Projects'
import { AnimatePresence } from 'framer-motion'
import { lazy } from 'react'

const Admin = lazy(() => import('pages/Admin'))
const Users = lazy(() => import('pages/Admin/users'))
const Technologies = lazy(() => import('pages/Admin/technologies'))

const AppRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="/admin">
          <Route index element={<Admin />} />
          <Route path="users" element={<Users />} />
          <Route path="technologies" element={<Technologies />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes
