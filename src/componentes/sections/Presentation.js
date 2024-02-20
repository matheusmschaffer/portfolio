import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Matheus Schaffer!!!', 'Desenvolvedor full stack!!!', 'Product Manager!!!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const min = 150;
    const max = 300
    const [delta, setDelta] = useState(Math.floor(Math.random() * max - min + 1) + min);


    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (!isDeleting) { setDelta(Math.floor(Math.random() * max - min + 1) + min) }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(100);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(Math.floor(Math.random() * max - min + 1) + min);
            setLoop(loop + 1);
        }

    }

    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio!</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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