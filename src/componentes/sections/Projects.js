import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import project1 from '../../Images/projects/project1.svg'

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>
                Projetos
            </h1>
            <Card img={project1} title="Projeto DNC" tech="HTML, CSS e JavaScript" description="Projeto desenvolvido no curso DNC" repo="http://www.globo.com" site="http://www.google.com" />

            <ButtonB text='Acesse meu repositório' />ß
        </div>
    )
}

export default Projects