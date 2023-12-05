import React from "react";
import './Home.css';

import { 
    FaLinkedinIn,
     FaGithub,
      FaPhone,
      FaWhatsapp 
    } from "react-icons/fa";
import spin from '../img/animacao.png';
import author from '../img/author.png';

//bandeiras
import bandeiraA from '../img/pt.png';
import bandeiraB from '../img/eua.png';

import MeusProjetos from "../components/Projetos/Projetos";

export default function Home() {
  return (
    <>
        <section>
            <div className="home-container">    
                <div className="logo">
                    <div className="imagem-author">
                        <img src={author} alt="logo" />
                        <h2>Olá, me chamo Jonatas</h2>
                    </div>
                    <div className="title-head">
                        <h3>Sou desenvolvedor <span>Web</span></h3>
                    </div>
                </div>
                <div className="main-content">
                    <div className="education">
                        <h2>Educação</h2>
                        <p>Bacharel em Engenharia da Computação - Universidade do Estado de São Paulo.</p>
                    </div>
                    <div className="idiomas">
                        <h2>Idiomas</h2>
                        <p>
                            <img src={bandeiraA} alt="brasil" />
                            Português - Fluente
                        </p>
                        <p>
                            <img src={bandeiraB} alt="Estados Unidos" />
                            English - B2
                        </p>
                    </div>
                </div>
                <div className="footer">
                    <div className="spin">
                        <a href="#projects">
                            <img src={spin} alt="spin" />
                        </a>
                    </div>
                    <div className="rede-social">
                        <h2>Redes Sociais</h2>
                        <nav>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/jonatas-elieser-moreira-948632270">
                                        <FaLinkedinIn className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/jonatasemoreira">
                                        <FaGithub   className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/5518998045921">
                                        <FaWhatsapp    className="icon"/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <a className="btn-contact" href="mailto:jonatas.em20@gmail.com">
                        Fale Comigo
                            <span className="icon-phone">
                                <FaPhone />
                            </span>
                        </a>
                    </div>
                </div>  
            </div>  
        </section>
        <section className="container-projects" id="projects">
                <h1>Projetos</h1>
                <div>{MeusProjetos}</div>
        </section>
    </>
  );
}