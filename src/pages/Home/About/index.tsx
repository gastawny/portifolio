import './About.scss'
import A from 'assets/A.png'
import { ReactComponent as Avatar } from 'assets/avatar.svg'

const About = () => (
    <section className="About">
        <div className='avatar'>
            <Avatar />
        </div>
        <div className='about-container'>
            <div className='title-container'>
                <img src={A} />
                <h2 className='title'>About</h2>
            </div>
            <p className='text'>
                {`Bem-vindo ao meu site! Estou usando esta página pessoal para mostrar 
            alguns dos meus projetos e testar as coisas. Você pode ver os sites e 
            ferramentas que eu gosto. Sou um aspirante a cientista da computação, no 
            tempo livre passo raiva em jogos online e para desestressar desenvolvo 
            projetos/sites/softwares :)`}
            </p>
        </div>
    </section >
)

export default About