import Home from "pages/Home"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes