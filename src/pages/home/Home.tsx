import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import "./Home.css"
import foto from '../../assets/Foto.png'

function Home() {
    return (
        <>
            <section className='banner'>
                <div className='banner_container'>
                    <img src={foto} className='banner_img' alt="Imagem da criadora do site" />
                <div className='banner_secao'>
                    <h1 className='banner_secao-titulo'>Caroline Viana de Medeiros</h1>
                    <h2 className='banner_secao-texto'>Desenvolvedora Java FullStack</h2>
                </div>
                </div>
            </section>
            <section className='bio'>
                <ul className='bio_link'>
                    <li><a href='#'><LinkedInIcon sx={{ fontSize: 50, color: "#0F7D7E" }}/></a></li>
                    <li><a href='#'><GitHubIcon sx={{ fontSize: 50, color: "#0F7D7E"}}/></a></li>
                    <li><a href='#'><ChangeHistoryIcon sx={{ fontSize: 50, color: "#0F7D7E"}}/></a></li>
                </ul>
                <p className='bio_texto'>Olá! Meu nome é Caroline Viana de Medeiros, tenho 22 anos e tenho o prazer de compartilhar com vocês um pouco da minha jornada profissional.</p>
                <a href='https://docs.google.com/document/d/1c3DkNhcnMP1N5l5eF0D50zSfW5h6eTtg/edit?usp=share_link&ouid=117009998513734034894&rtpof=true&sd=true' className='bio_cv'>Download CV</a>
            </section>
        </>
    )
}

export default Home