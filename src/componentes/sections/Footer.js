import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.foot}>
            <ul>
                <li><a href='https://www.instagram.com/omatheus99/' target='_blank'><FaInstagram size={30} /></a></li>
                <li><a href='https://github.com/matheusmschaffer' target='_blank'><FaGithub size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/matheus-martins-schaffer-54b4961b8/' target='_blank'><FaLinkedin size={30} /></a></li>
                <li><a href='mailto:martins.schaffer@gmail.com?subject=Olá Matheus, gostaríamos de te conhecer'><FaEnvelope size={30} /></a></li>
            </ul>
            <p>
                Matheus Schaffer © 2024
            </p>
        </div>
    )
}

export default Footer