import React from 'react'
import projects from '../projetos.json'
import './Projeto.css'

type Props = typeof projects[0];

function Projeto(props: Props) {
    const { categoria, foto, titulo, linkgit, linkapp } = props;
    return (
        <>
            <div className='projeto'>
                <div className='projeto_img'>
                    <img src={foto} alt="" className='img'/>
                </div>
                <div className='projeto_conteudo'>
                    <h3 className='projeto_conteudo-titulo'>{titulo}</h3>
                    <p className='projeto_conteudo-categoria'>{categoria.nome}</p>
                    <a href={linkgit} className='projeto_conteudo-link'>GitHub</a>
                </div>
            </div>
        </>
    )
}

export default Projeto