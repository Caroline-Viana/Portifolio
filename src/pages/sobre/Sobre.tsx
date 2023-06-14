import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaSass, FaFigma } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMysql, SiSpring } from 'react-icons/si'
import './Sobre.css'

function Sobre() {
    return (
        <div className='sobre'>
            <h1 className='sobre_titulo'>Sobre Mim</h1>
            <section className='sobre_info'>
                <div className='sobre_texto'>
                    <p className='sobre_conteudo'>
                        Sou formada em Gestão de Turismo, pelo Instituto Federal de São Paulo e, apesar de ter adorado a área, sempre tive um grande amor pela tecnologia. Por isso, decidi fazer uma transição de carreira para a programação e hoje estou me qualificando com o objetivo de trabalhar nesse campo!
                    </p>
                    <p className='sobre_conteudo'>
                        Durante a faculdade, trabalhei como monitora na disciplina de pesquisa de mercado e pude desenvolver minhas habilidades de comunicação e atenção aos detalhes. Essas habilidades têm sido muito úteis na minha carreira de programadora, já que a comunicação efetiva e a atenção aos detalhes são fundamentais para o desenvolvimento de softwares de qualidade.
                    </p>
                    <p className='sobre_conteudo'>
                        Fora isso, gosto de ler livros, assistir a documentários, e me exercitar ao ar livre. No geral, sou uma pessoa curiosa, dedicada e apaixonada pelo mundo da tecnologia, sempre procurando novas oportunidades para aprender e crescer.
                    </p>
                </div>
                <div className='sobre_tec'>
                    <h2 className='tec_titulo'>ALGUMAS HABILIDADES</h2>
                    <div className='tec_icons'>
                        <div className='icons_group'>
                            <FaHtml5 size={50} />
                            <FaCss3Alt size={50} />
                            <SiJavascript size={50} />
                            <SiTypescript size={50} />
                            <FaReact size={50} />
                            <FaJava size={50} />
                            <FaSass size={50} />
                            <SiMysql size={50} />
                            <FaFigma size={50} />
                            <SiSpring size={50} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='list'>
                <div className='list__conteudo'>
                    <h3 className='list__conteudo-titulo'>Escolaridade</h3>
                    <ol className='list__conteudo-item1'>
                        <li>Ensino médio - <span>Colégio Anna Taváres</span> - 2018</li>
                        <li>Tecnólogo em Gestão de Turismo -  <span>Instituto Federal de São Paulo</span> - 2021</li>
                        <li>Desenvolvedor Java FullStack - <span>Generation Brasil</span> - 2023 - 447h</li>
                    </ol>
                </div>
                <div className='list__conteudo'>
                    <h3 className='list__conteudo-titulo'>Experiência</h3>
                    <ol className='list__conteudo-item2'>
                        <li>Monitora de ensino - <span>Instituto Federal de São Paulo</span> - 2021</li>
                        <li>Supervisora (ACS) - <span>IBGE</span> - 2022</li>
                    </ol>
                </div>
                <div className='list__conteudo'>
                    <h3 className='list__conteudo-titulo'>Habilidades</h3>
                    <ul className='list__conteudo-item3'>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>MySQL</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Material UI</li>
                        <li>Figma</li>
                        <li>UX/UI</li>
                        <li>Node.js</li>
                        <li>Scrum</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Sobre