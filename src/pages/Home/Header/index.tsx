import './Header.scss'
import { Link } from 'react-router-dom'
import Button from 'components/Button'

const Header = () => {
    return (
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
    )
}

export default Header