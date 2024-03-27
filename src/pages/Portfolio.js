import { useState } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import '../styles/Portfolio.css';

import CV from "../assets/docs/CV_Bachelor.pdf";

import Autoportrait from "../assets/dessin_autoportrait-rose.png";

import CreaArt from "../assets/portfolio/logos/creaArt.png";
import PtisPots from "../assets/portfolio/logos/ptis_pots.png";
import Oeuf from "../assets/portfolio/logos/oeuf.png";
import Ekotitude from "../assets/portfolio/logos/ekoti.png";
import Sorbet from "../assets/portfolio/logos/givresorbet.png";
import Rencontre from "../assets/portfolio/logos/rencontres.png";
import Positive from "../assets/portfolio/logos/positive1.png";
import initiales from "../assets/portfolio/logos/sv.png";

import Avion from "../assets/portfolio/motion_design/avion-min.jpg";
import Ville from "../assets/portfolio/motion_design/ville-min.jpg";
import Respiration from "../assets/portfolio/motion_design/respiration-min.jpg";
import Sapin from "../assets/portfolio/motion_design/sapin-min.jpg";
import Flowers from "../assets/portfolio/motion_design/flowers-min.jpg";

import Juice from "../assets/portfolio/packagings/juice.png";
import Canette from "../assets/portfolio/packagings/canette.png";
import Cereales from "../assets/portfolio/packagings/epidelice.png";
import KitEkotitude from "../assets/portfolio/packagings/packaging.png";

import Draw1 from "../assets/portfolio/dessins/dessin_1.png";
import Draw2 from "../assets/portfolio/dessins/dessin_2.png";
import Draw3 from "../assets/portfolio/dessins/dessin_3.png";
import Draw4 from "../assets/portfolio/dessins/dessin_4.png";
import Bike from "../assets/portfolio/dessins/velo2.png";
import Mushroom from "../assets/portfolio/dessins/champ2.png";
import City from "../assets/portfolio/dessins/city_2.png";

import Belvindiere from "../assets/portfolio/sites&templates/Belvindiere-min.jpg";
import Merisiers from "../assets/portfolio/sites&templates/FermeMerisiers.jpg";
import Confitures from "../assets/portfolio/sites&templates/sandrine_saveur.png";
import Chanbara from "../assets/portfolio/sites&templates/kobukan.png";

import Xd from "../assets/xd.png";
import Illustrator from "../assets/illustrator.png";
import Photoshop from "../assets/photoshop.png";
import After from "../assets/after.png";
import Figma from "../assets/figma.png";
import Html from "../assets/html-css.png";
import Javascript from "../assets/js.png";
import Reactjs from "../assets/react.png";
import Php from "../assets/php.png";
import Mysql from "../assets/mysql.png";
import Wp from "../assets/wordpress.png";
import Prestashop from "../assets/prestashop.png";

import { FaLinkedinIn,FaHtml5,FaCss3Alt} from "react-icons/fa";
import { BsFillTelephoneFill,BsEnvelopeFill,BsWordpress } from "react-icons/bs";
import {SiAdobeaftereffects, SiAdobephotoshop, SiAdobeillustrator} from "react-icons/si";
import {CgFigma} from "react-icons/cg"; 

const Portfolio = () => {

    const [toggle, setToggle]= useState(1);

    return (
        <div className='container-fluid'>
            <div className='row mx-auto text-center top p-2'>
                <div className='photo col-lg-6 mt-5'>
                    <img src={Autoportrait} width={500} alt="photo_profil"/>
                </div>
                <div className='nom col-lg-6 mt-5'>
                    <h1> Sophie Van Hese, <br/>Webdesigner & Développeur WordPress</h1>
                    <div className='icones-contact row mt-3'>
                        <a className="col-sm-4 contact" href="https://www.linkedin.com/in/sophie-van-hese/" target="blank"><FaLinkedinIn/></a>
                        <a className="col-sm-4 contact" href="tel:+33659887373"><BsFillTelephoneFill/></a>
                        <a className="col-sm-4 contact" href="mailto:sophievh78@gmail.com"><BsEnvelopeFill/></a>
                    </div>
                    <div className='telechargement row mt-5 mx-auto justify-content-evenly'>
                        <a href={CV} download="" className='col-lg-4'>Télécharger CV</a>
                    </div>
                </div>
            </div>
            <div className='mx-auto text-center mt-5 presentation '>
                <h2> Mes valeurs</h2>
                    <h3 className=' mt-5 mb-5'>
                        <Typewriter
                            options={{
                                strings: ['Écouter','Échanger', 'Penser', 'Concevoir','Optimiser'],
                                delay:70,
                                pauseFor:500,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <div className='row mb-5 text-center justify-content-evenly valeurs'>
                            <div className='col-xs-12 col-md-3 valeur'>
                                <h4>La créativité</h4>
                                <p>J'aime donner vie à des idées naissantes à travers le design et le développement web. 
                                    Chaque projet est une nouvelle opportunité de créer quelque chose d'unique.
                                </p>
                            </div>
                            <div className='col-xs-12 col-md-3 valeur'>
                                <h4> Le graphisme:</h4>
                                <p>Les images parlent plus fort que les mots. Mon amour pour le graphisme me permets de créer des visuels
                                     attractifs.
                                </p>
                            </div>
                            <div className=' col-xs-12 col-md-3 valeur'>
                                <h4> La conception Web</h4>
                                <p>De la planification initiale à la mise en œuvre,
                                    je m'efforce de créer des expériences en ligne à l'image de votre entreprise et dans le respect de vos valeurs.
                                </p>
                            </div>
                    </div>
            </div>
            <div className='portfolio row mt-5 justify-content-center mx-auto'>
                <h2 className='text-center mb-5'>Portfolio</h2>
                    <div className="row mt-5 mb-5 justify-content-evenly">
                        <button type="button" class="btn col-md-2" onClick={()=>setToggle(1)}>Logos</button>
                        <button type="button" class="btn col-md-2" onClick={()=>setToggle(2)}>Motion Design</button>
                        <button type="button" class="btn col-md-2"onClick={()=>setToggle(3)}>Packaging</button>
                        <button type="button" class="btn col-md-2" onClick={()=>setToggle(4)}>Dessins</button>
                        <button type="button" class="btn col-md-2" onClick={()=>setToggle(5)}>Site web</button>
                    </div>
                    <div className={`row grid ${toggle === 1 ? "show" : "hide"}`}>
                        <div className='styles_images col-lg-4'>
                            <img src={CreaArt} alt="mockup logo"/>
                                <div className='overlay'>
                                    <p><SiAdobephotoshop/></p>
                                </div>
                        </div>
                        <div className='styles_images  col-lg-4'>
                            <img src={initiales} alt="mockup logo"/>
                                <div className='overlay'>
                                    <p><SiAdobephotoshop/></p>
                                </div>
                        </div>
                        <div className='styles_images  col-lg-4'>
                            <img src={Ekotitude} alt="mockup logo"/>
                                <div className='overlay'>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                        </div>
                        <div className='styles_images  col-lg-4'>
                            <img src={Sorbet} alt="mockup logo"/>
                                <div className='overlay'>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                        </div>
                        <div className='styles_images  col-lg-4'>
                            <img src={Oeuf} alt="mockup logo"/>
                                <div className='overlay'>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                        </div>
                        <div className='styles_images  col-lg-4'>
                            <img src={Rencontre} alt="mockup logo"/>
                                <div className='overlay'>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                        </div>
                        <div className='styles_images  col-lg-4'>
                            <img src={Positive} alt="mockup logo"/>
                                <div className='overlay'>
                                    <p><SiAdobephotoshop/></p>
                                </div>
                        </div>
                        <div className='styles_images  col-lg-4'>
                            <img src={PtisPots} alt="mockup logo"/>
                                 <div className='overlay'>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                        </div>
                    </div>
                    <div className={`row grid ${toggle === 2 ? "show" : "hide"}`}>
                        <div className='styles_images col-lg-4'>
                            <img src={Avion} alt="image_avion"/>
                            <Link to="/motionAvion">
                                <div className='overlay'>
                                    <p><SiAdobeaftereffects/></p>
                                </div>
                            </Link>
                        </div>
                        <div className='styles_images col-lg-4'>
                            <img src={Ville} alt="image_ville"/>
                            <Link to="/motionVille">
                                <div className='overlay'>
                                    <p><SiAdobeaftereffects/></p>
                                </div>
                            </Link>
                        </div>
                        <div className='styles_images col-lg-4'>
                            <img src={Respiration} alt="image_respiration_bien_etre"/>  
                            <Link to="/motionRespiration">
                                <div className='overlay'>
                                    <p><SiAdobeaftereffects/></p>
                                </div>
                            </Link>
                        </div>
                        <div className='styles_images col-lg-4'>
                            <img src={Flowers} alt="image_fleurs qui bougent dans un vase"/>  
                            <Link to="/motionFleurs">
                                <div className='overlay'>
                                    <p><SiAdobeaftereffects/></p>
                                </div>
                            </Link>
                        </div>
                        <div className='styles_images col-lg-4'>
                            <img src={Sapin} alt="image_sapin noël"/>  
                            <Link to="/motionSapin">
                                <div className='overlay'>
                                    <p><SiAdobeaftereffects/></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={`row grid ${toggle === 3 ? "show" : "hide"}`}>
                        <div className='styles_images  col-lg-4'>
                            <img src={Juice} alt="mockup pub"/>
                                <div className='overlay'>
                                    <p><SiAdobephotoshop/></p>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                        </div>
                        <div className='styles_images  col-lg-4'>
                            <img src={Canette} alt="mockup pub"/>
                                <div className='overlay'>
                                    <p><SiAdobephotoshop/></p>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                        </div>
                        <div className='styles_images  col-lg-4'>
                            <img src={Cereales} alt="mockup pub"/>
                                <div className='overlay'>
                                    <p><SiAdobephotoshop/></p>
                                </div>
                        </div>
                        <div className='styles_images  col-lg-4'>
                            <img src={KitEkotitude} alt="mockup pub"/>
                                <div className='overlay'>
                                    <p><SiAdobephotoshop/></p>
                                </div>
                        </div>
                    </div>
                    <div className={`row grid ${toggle === 4 ? "show" : "hide"}`}>
                        <div className='styles_images  col-lg-3'>
                            <img src={Mushroom} alt="mockup pub"/>
                                <div className='overlay'>
                                    <p><SiAdobephotoshop/></p>
                                </div>
                                <p>Tabelette graphique </p>
                        </div>
                        <div className='styles_images  col-lg-3'>
                            <img src={City} alt="mockup pub"/>
                            <div className='overlay'>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                                <p>PC</p>
                        </div>
                        <div className='styles_images  col-lg-3'>
                            <img src={Bike} alt="mockup pub"/>
                            <div className='overlay'>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                                <p>PC</p>
                        </div>
                        <div className='styles_images  col-lg-3'>
                            <img src={Draw1} alt="mockup pub"/>
                            <div className='overlay'>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                                <p>Tabelette graphique </p>
                        </div>
                        <div className='styles_images  col-lg-3'>
                            <img src={Draw2} alt="mockup pub"/>
                            <div className='overlay'>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                                <p>Tabelette graphique </p>
                        </div>
                        <div className='styles_images  col-lg-3'>
                            <img src={Draw3} alt="mockup pub"/>
                            <div className='overlay'>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                                <p>Tabelette graphique </p>
                        </div>
                        <div className='styles_images  col-lg-3'>
                            <img src={Draw4} alt="mockup pub"/>
                            <div className='overlay'>
                                    <p><SiAdobeillustrator/></p>
                                </div>
                                <p>Tabelette graphique </p>
                        </div>
                    </div>
                    <div className={`row grid ${toggle === 5 ? "show" : "hide"}`}>
                        <div className='styles_images col-lg-3'>
                            <img src={Belvindiere} alt="mockup pub"/>
                            <a href="https://ferme-belvindiere.fr/" target='blank'>
                                <div className='overlay'>
                                    <p><BsWordpress/></p>
                                </div>
                            </a>
                        </div>
                        <div className='styles_images col-lg-3'>
                            <img src={Merisiers} alt="mockup pub"/>
                            <a href="https://fermedesmerisiers.fr/bienvenue/" target='blank'>
                                <div className='overlay'>
                                    <p><BsWordpress/></p>
                                </div>
                            </a>
                        </div>
                        <div className='styles_images col-lg-3'>
                            <img src={Confitures} alt="mockup pub"/>
                            <a href="https://www.sandrine-saveurs.fr/" target='blank'>
                                <div className='overlay'>
                                    <p><BsWordpress/></p>
                                </div>
                            </a>
                        </div>
                        <div className='styles_images col-lg-3'>
                            <img src={Chanbara} alt="mockup pub"/>
                            <a href="https://kobukankendojo.fr/" target='blank'>
                                <div className='overlay'>
                                    <p><BsWordpress/></p>
                                </div>
                            </a>
                        </div>
                    </div>
            </div>

            <div className='outils row mt-5 pb-5 justify-content-center mx-auto'>
                <h2 className='text-center mb-5'> Mes outils </h2>
                <div className='icones_outils row mt-5 justify-content-evenly'>
                    <img className='col-lg-1 m-1' src={Illustrator} alt="Illustrator"/>
                    <img className='col-lg-1 m-1' src={Photoshop} alt="Photoshop"/>
                    <img className='col-lg-1 m-1' src={After} alt="After"/>
                    <img className='col-lg-1 m-1' src={Xd} alt="Adobe XD"/>
                    <img className='col-lg-1 m-1' src={Figma} alt="Figma"/> 
                </div>
            </div>
            <div className='aussi row mt-5 pb-5 justify-content-center mx-auto'>
                <h2 className='text-center mb-5'> Mes connaissances</h2>
                <div className='icones_aussi row mt-5 justify-content-evenly'>
                    <img className='col-sm-2 col-lg-1 m-1'src={Html} alt="icone-html"/>
                    <img className='col-sm-2 col-lg-1 m-1' src={Javascript} alt="icone_javascript"/>
                    <img className='col-sm-2 col-lg-1 m-1' src={Reactjs} alt="icone_react"/>
                    <img className='col-sm-2 col-lg-1 m-1' src={Php} alt="icone-php"/>
                    <img className='col-sm-2 col-lg-1 m-1' src={Mysql} alt="icone-mysql"/>
                    <img className='col-sm-2 col-lg-1 m-1' src={Wp} alt="icone-wordpress"/>
                    <img className='col-sm-2 col-lg-1 m-1' src={Prestashop} alt="icone-prestashop"/>
                </div>
            </div>
            <footer>
                © 2024 Sophie Van hese. Tous droits réservés
            </footer>
        </div>
    );
};

export default Portfolio;