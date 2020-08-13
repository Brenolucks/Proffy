import React from 'react'; 

/* Logos */
import logoimg from '../../assets/images/logo.svg';
import landingimg from '../../assets/images/landing.svg';

/* Icones */
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

/* Estilo */
import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoimg} alt="logo do aplicativo"/>
                    <h2> Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingimg} alt="´Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study"> 
                        <img src={studyIcon} alt="icon do aplicativo"/>
                        Estudar
                    </a>
                    <a href="" className="give-classes"> 
                        <img src={giveClassesIcon} alt="icon do aplicativo"/>
                        Dar aulas
                    </a>
                </div>

                <span className="total-conections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    );
}

export default Landing;