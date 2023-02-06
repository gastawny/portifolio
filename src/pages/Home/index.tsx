import './Home.scss'
import About from "components/About"
import BackGroundSVG from "components/BackgroundSVG"
import Photograph from "components/Photograph"
import Header from 'components/Header'

const Home = () => {
    return (
        <div className='Home'>
            <BackGroundSVG />
            <Photograph />
            <About />
        </div>
    )
}

export default Home