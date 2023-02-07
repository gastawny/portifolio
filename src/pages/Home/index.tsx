import './Home.scss'
import About from "./About"
import BackGroundSVG from "components/BackgroundSVG"
import Photograph from "./Photograph"
import Skills from './Skills'

const Home = () => {
    return (
        <div className='Home'>
            <BackGroundSVG />
            <Photograph />
            <About />
            <Skills />
        </div>
    )
}

export default Home