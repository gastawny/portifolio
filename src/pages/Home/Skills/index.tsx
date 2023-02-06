import ProgressBar from './ProgressBar'
import './Skills.scss'

const Skills = () => (
    <section className="Skills">
        <ProgressBar fontSize='1.5rem' progress={70}>
            <span>React<br />TypeScript</span>
        </ProgressBar>
        <ProgressBar fontSize='2rem' progress={20}>
            Mysql
        </ProgressBar>
        <ProgressBar fontSize='2rem' progress={40}>
            Java
        </ProgressBar>
    </section >
)

export default Skills