import styles from './Card.module.css'
import project1 from '../../Images/projects/project1.svg'
import ButtonB from './ButtonB'

function Card() {
    return (
        <div className={styles.card}>
            <img src={project1} alt="Error"></img>
            <div className={styles.div2}>
                <h3>Título</h3>
                <p>Tecnologia</p>
                <p>Descrição</p>
                <ButtonB text='Acesse o repositório' />
            </div>
        </div>
    )
}

export default Card