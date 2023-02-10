import './Home.scss'
import About from "./About"
import BackGroundSVG from "components/BackgroundSVG"
import Photograph from "./Photograph"
import Skills from './Skills'
import Header from './Header'
import { ScrollProvider } from 'contexts/Scroll'

const Home = () => {
    return (
        <ScrollProvider>
            <div className='Home'>
                <BackGroundSVG />
                <Photograph />
                <Header />
                <About />
                <Skills />
            </div>
        </ScrollProvider>
    )
}

export default Home