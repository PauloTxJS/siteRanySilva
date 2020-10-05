import React from 'react';
import SocialNetwork from '../components/SocialNetwork';
import Head from 'next/head';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css";
import Menu from '../components/Menu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Home = () => (
    <div>
        <Head>
            <title>Home - Rany Silva</title>
            <meta name="Description" content="Frango e Pescados" />
            <meta name="author" content="Paulo Teixeira" />
        </Head>
        <Menu />
        
        <Container className="text-center descr-top">
            <a name="inicio" className="inicio-link"/>
            <img src="logo.png" className="logoFront" alt="logo tipo"/>
            <h1 className="display-4 mb-4">Frangos e Pescados</h1>
            <p className="lead mb-4">
                Trabalhamos de quarta à segunda com produtos frescos e selecionados.<br />
                Frango abatido e peixe de água salgada e doce.<br />
                Rany Silva<br />
                (85) 99924-3177<br />
                Rua Senador Carlos Jereissati, 304 - Jardim das Oliveiras<br /> 
                Fortaleza/CE    
            </p>
            <div className="row text-center align-items-center bg-dark p-3">
                <div className="col-sm-6 textoemail">
                    <img src="/email.png" alt="e-mail" className="email"/> ranys1987@gmail.com
                </div>
                
                <div className="col-sm-6">
                    <a href="https://api.whatsapp.com/send?1=pt_BR&phone=558599243177" rel="noopener noreferrer" target="_blank" className="textowhatsapp">Você quer falar comigo?<img src="/whatsapp.png" alt="Whatsapp" className="whatsapp"/></a>	
                </div>
            </div>                                     
        </Container>
        
        <Container className="text-center servicos">
            <a name="servico" className="servico-link"/>
            <div>
                <h2 className="display-4">Serviços</h2>
                <p className="lead pb-4">Melhor frango e peixe da cidade</p>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="rounded-circle circulo centralizar">
                        <FontAwesomeIcon icon="fish"/>
                    </div>
                    <h2 className="mt-4 mb-4">Peixe</h2>
                    <p>Água doce e salgada</p>
                </div>
                <div className="col-lg-4">
                    <div className="rounded-circle circulo centralizar">
                        <FontAwesomeIcon icon="drumstick-bite"/>
                    </div>
                    <h2 className="mt-4 mb-4">Frango</h2>
                    <p>Frango abatido</p>   
                </div>
                <div className="col-lg-4">
                    <div className="rounded-circle circulo centralizar">
                        <FontAwesomeIcon icon="carrot"/>
                    </div>
                    <h2 className="mt-4 mb-4">Frutas e Verduras</h2>
                    <p>Frutas e legumes frescos</p>
                </div>
            </div>
        </Container>
        

        <Container className="text-center mercadorias">
            <a name="mercadoria" className="mercadorias-link"/>
            <div>
                <h2 className="display-4">Mercadorias</h2>
                <p className="lead pb-4">Nossas mercadorias</p>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card">
                        <img src="/atum.png" className="card-img-top" alt="Atum"/>
                        <div className="card-body">
                            <h5 className="card-title">Atum</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="serra.png" className="card-img-top" alt="Serra"/>
                        <div className="card-body">
                            <h5 className="card-title">Serra</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="/guaiuba.png" className="card-img-top" alt="Guaiuba"/>
                        <div className="card-body">
                            <h5 className="card-title">Guaiuba</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="/palombeta.png" className="card-img-top" alt="Palombeta"/>
                        <div className="card-body">
                            <h5 className="card-title">Palombeta</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="/dentao.png" className="card-img-top" alt="Dentão"/>
                        <div className="card-body">
                            <h5 className="card-title">Dentão</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="/arraia.png" className="card-img-top" alt="Arraia"/>
                        <div className="card-body">
                            <h5 className="card-title">Arraia</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="/cavala.png" className="card-img-top" alt="Cavala"/>
                        <div className="card-body">
                            <h5 className="card-title">Cavala</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="/pescadaAmarela.png" className="card-img-top" alt="Pescada Amarela"/>
                        <div className="card-body">
                            <h5 className="card-title">Pescada Amarela</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="/pargo.png" className="card-img-top" alt="Pargo"/>
                        <div className="card-body">
                            <h5 className="card-title">Pargo</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="/biquara.png" className="card-img-top" alt="Biquara"/>
                        <div className="card-body">
                            <h5 className="card-title">Biquara</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="/xareu.png" className="card-img-top" alt="Xaréu"/>
                        <div className="card-body">
                            <h5 className="card-title">Xaréu</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src="/cioba.png" className="card-img-top" alt="Cioba"/>
                        <div className="card-body">
                            <h5 className="card-title">Cioba</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>

                <div className="col mb-4">
                    <div className="card">
                        <img src="/frango.png" className="card-img-top" alt="Frango Abatido"/>
                        <div className="card-body">
                            <h5 className="card-title">Frango Abatido</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        
        <SocialNetwork />
    </div>   
);
 
export default Home;  