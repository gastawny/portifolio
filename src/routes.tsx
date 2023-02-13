import Home from 'pages/Home'
import { Routes, Route, useLocation } from 'react-router'
import Header from 'components/Header'
import Contact from 'pages/Contact'
import Projects from 'pages/Projects'
import { AnimatePresence } from 'framer-motion'

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
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes
