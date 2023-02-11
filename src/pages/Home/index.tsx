import './Home.scss'
import About from "./About"
import Photograph from "./Photograph"
import Skills from './Skills'
import { ScrollProvider } from 'contexts/Scroll'

const Home = () => {
    return (
        <ScrollProvider>
            <div className='Home'>
                <Photograph />
                <About />
                <Skills />
            </div>
        </ScrollProvider>
    )
}

export default Home