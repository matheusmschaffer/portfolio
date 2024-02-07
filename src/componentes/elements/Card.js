import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({ img, title, tech, description, repo, site }) {
    return (
        <div className={styles.card}>
            <a href={site} target="_blank">
                <img src={img} alt="Error"></img>
            </a>
            <div className={styles.div2}>
                <h3>{title}</h3>
                <p><strong>Tecnologia: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo} />
            </div>
        </div>
    )
}

export default Card