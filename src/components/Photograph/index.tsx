import './Photograph.scss'
import foto from 'assets/images/photograph.png'
import Button from 'components/Button'

const Photograph = () => (
    <div className='card'>
        <div className='lines'></div>
        <div className='imgBx'>
            <img src={foto} />
        </div>
        <div className='content'>
            <div className='details'>
                <h2>Gabriel Stawny<br /><span>Dev</span></h2>
                <div className='data'>
                    <h3>...<br /><span>...</span></h3>
                    <h3>...<br /><span>...</span></h3>
                    <h3>...<br /><span>...</span></h3>
                </div>
                <div className='actionBtn'>
                    <Button width='8.5rem' to='/'>Follow</Button>
                    <Button width='8.5rem' to='/'>Message</Button>
                </div>
            </div>
        </div>
    </div>
)

export default Photograph