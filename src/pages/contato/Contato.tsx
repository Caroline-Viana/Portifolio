import './Contato.css'
import QrCode from '../../assets/caroline_viana 1.svg'

function Contato() {
  return (
    <div className='contato'>
        <h1 className='contato__titulo'>Contato</h1>
        <div className='contato__container'>
            <div className='contato__info'>
                <p className='contato__item'><span className='contato__destaque'>Local: </span>São Paulo, SP</p>
                <p className='contato__item'><span className='contato__destaque'>Email: </span>tr.caroline.tr@gmail.com</p>
                <p className='contato__item'><span className='contato__destaque'>Telefone: </span>(11)  96227-6640</p>
                <p className='contato__item'><span className='contato__destaque'>Idiomas: </span>Português (nativo) | Inglês (intermediário)</p>
            </div>
            <div>
                <img src={QrCode} alt="QrCode com os likns dos meus contatos" />
            </div>
        </div>
    </div>
  )
}

export default Contato