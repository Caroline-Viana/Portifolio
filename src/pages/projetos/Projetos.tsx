import React from 'react'
import './Projetos.css'
import projects from './projetos.json'
import Projeto from './projeto/Projeto';
import { useState } from 'react';

function Projetos() {
    const [lista, setLista] = useState(projects);
  return (
    <>
        <h1 className="projetos_titulo">Projetos</h1>
        <div className='projetos'>
            {lista.map((projeto) => (
                <Projeto key={projeto.id} {...projeto}/>
            ))}
        </div>
    </>
  )
}

export default Projetos