import Home from "pages/Home"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Header from "components/Header"
import Contact from "pages/Contact"
import Projects from "pages/Projects"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="projects" element={<Projects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes