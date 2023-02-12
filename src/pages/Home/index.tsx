import './Home.scss'
import About from "./About"
import Photograph from "./Photograph"
import Skills from './Skills'
import { ScrollProvider } from 'contexts/Scroll'
import BackGroundSVG from 'components/BackgroundSVG'

const Home = () => {
    return (
        <ScrollProvider>
            <div className='Home'>
                <BackGroundSVG />
                <Photograph />
                <About />
                <Skills />
            </div>
        </ScrollProvider>
    )
}

export default Home