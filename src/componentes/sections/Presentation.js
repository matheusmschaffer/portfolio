import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation() {
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio!</strong></h4>
            <h1>Olá, eu sou Matheus Schaffer!</h1>
            <p>
                Sou um resolvedor de problemas nato, apaixonado por soluções práticas e inovadoras.<br />
                Como analista de sistemas, busco resolver as barreiras que impedem os clientes e<br />
                usuários de terem sucesso na utilização de nossos produtos. Fidelizar e criar novas<br />
                oportunidades de negócio são os meus motivadores diários, estes refletem em receitas<br />
                diretas e indiretas para os negócios.
            </p>
            <ButtonA link='https://github.com/matheusmschaffer' text='Conecte-se comigo!' />
        </div >
    )
}

export default Presentation