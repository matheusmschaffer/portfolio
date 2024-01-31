import styles from './ButtonA.module.css'

function ButtonA({ text, link }) {
    return (
        <div>
            <a href={link}>
                <button className={styles.btnA}>{text}</button>
            </a>
        </div>
    )
}

export default ButtonA