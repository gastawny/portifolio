import './Header.scss'
import { Link, Outlet } from 'react-router-dom'
import Button from 'components/Button'

const Header = () => (
    <>
        <header className='Header'>
            <div className='container'>
                <h2 className='name'>Gabriel Stawny</h2>
                <nav>
                    <ul className='links'>
                        <li><Link className='link' to='projects'>Projects</Link></li>
                        <li><Link className='link' to='/'>Portfolio</Link></li>
                        <li><Link className='link' to='contact'>
                            <Button fontSize='1.5rem' width='7rem'>Contact</Button>
                        </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />
    </>
)

export default Header