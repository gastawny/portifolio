import './About.scss'
import { ReactComponent as Avatar } from 'assets/avatar.svg'

const About = () => (
    <section className="About">
        <div className='avatar'>
            <Avatar />
        </div>
        <div className='about-container'>
            <div className='title-container'>
                <span className='A'>A</span>
                <h2 className='title'>About</h2>
            </div>
            <p className='text'>
                {`Welcome to my website! I'm using this personal page to showcase
                some of my projects and test things out. You can see the sites and
                tools that I like. I'm an aspiring computer scientist, in my spare
                time I play online games and to de-stress I develop
                projects/websites/software :)`}
            </p>
        </div>
    </section >
)

export default About