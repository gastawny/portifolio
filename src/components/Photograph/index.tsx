import './Foto.scss'
import foto from 'assets/images/photograph.png'

const Photograph = () => {
    return (
        <div className='card'>
            <div className='lines'></div>
            <div className='imgBx'>
                <img src={foto} />
            </div>
            <div className='content'>
                <div className='details'>
                    <h2>Gabriel Stawny<br /><span>Dev</span></h2>
                    <div className='data'>
                        <h3>342<br /><span>Posts</span></h3>
                        <h3>120k<br /><span>Followes</span></h3>
                        <h3>285<br /><span>Following</span></h3>
                    </div>
                    <div className='actionBtn'>
                        <button>Follow</button>
                        <button>Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photograph