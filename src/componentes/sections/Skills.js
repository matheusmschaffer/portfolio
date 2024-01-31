import style from './Skills.module.css'
import javascript from '../../Images/skills/javascript.svg'
import html from '../../Images/skills/html.svg'
import css from '../../Images/skills/css.svg'
import react from '../../Images/skills/react.svg'
import typescript from '../../Images/skills/typescript.svg'

function Skills() {
    return (
        <div id="Skills" className={style.skill}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
                <img src={typescript}></img>
            </div>
        </div>
    )
}

export default Skills