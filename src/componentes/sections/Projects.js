import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>
                Projetos
            </h1>
            <Card />
            <ButtonB text='Acesse meu repositório' />
        </div>
    )
}

export default Projects