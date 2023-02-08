import './Home.scss'
import About from "./About"
import BackGroundSVG from "components/BackgroundSVG"
import Photograph from "./Photograph"
import Skills from './Skills'
import Header from './Header'

const Home = () => {
    return (
        <div className='Home'>
            <BackGroundSVG />
            <Header />
            <Photograph />
            <About />
            <Skills />
        </div>
    )
}

export default Home