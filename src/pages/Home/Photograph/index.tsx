import { useRef } from 'react'
import './Photograph.scss'
import foto from 'assets/images/photograph.png'
import Button from 'components/Button'
import { BsLinkedin, BsGithub, BsDiscord, BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { useScroll } from 'contexts/Scroll'

const Photograph = () => {
    const alertRef = useRef<HTMLDivElement>(null)
    const { scrollToLocal } = useScroll()

    const discordClick = () => {
        navigator.clipboard.writeText('Gastawny#5067')
        setTimeout(() => alertRef.current?.classList?.toggle('active'), 800)
        alertRef.current?.classList?.toggle('active')
    }

    return (
        <>
            <div ref={alertRef} className='discordAlert'>
                <span>
                    Usuário copiado para a<br />Área de Transferência
                </span>
            </div>
            <main className='Photograph'>
                <div className='card'>
                    <div className='lines'></div>
                    <div className='imgBx'>
                        <img src={foto} />
                    </div>
                    <div className='content'>
                        <div className='details'>
                            <h2>Gabriel Stawny<br /><span>Dev</span></h2>
                            <div className='medias'>
                                <a onClick={() => discordClick()}>
                                    <BsDiscord />
                                </a>
                                <a href='https://wa.me/5542999099180' target='_blank'>
                                    <BsWhatsapp />
                                </a>
                                <a href='https://github.com/gastawny' target='_blank'>
                                    <BsGithub />
                                </a>
                                <a href='https://t.me/gastawny' target='_blank'>
                                    <BsTelegram />
                                </a>
                                <a href='https://www.linkedin.com/in/gabriel-stawny-ab4529234/' target='_blank'>
                                    <BsLinkedin />
                                </a>
                            </div>
                            <div className='actionBtn'>
                                <Button clicked={() => scrollToLocal('About')} width='8.5rem'>About</Button>
                                <Button clicked={() => scrollToLocal('Skills')} width='8.5rem'>Skills</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Photograph