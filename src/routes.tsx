import Home from "pages/Home"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import BackGroundSVG from "components/BackgroundSVG"
import Header from "components/Header"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <BackGroundSVG />
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="contact" />
                    <Route path="projects" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes