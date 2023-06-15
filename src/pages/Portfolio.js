import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';
import CV from "../assets/docs/CV_sophieV_alternance_CCI.pdf";
import Book from "../assets/docs/book.pdf";
import Profil from "../assets/photo-profil.png";
import Autoportrait from "../assets/autoportrait_2.png";
import Nom from "../assets/nom.png";
import Presentation from "../assets/presentation.png";
import Titre_Portfolio from "../assets/titre_portfolio.png";
import Outils from "../assets/outils.png";
import Aussi from "../assets/aussi.png";
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
import { FaLinkedinIn,FaHtml5,FaCss3Alt,FaPhp} from "react-icons/fa";
import { BsFillTelephoneFill,BsEnvelopeFill,BsFillBootstrapFill,BsWordpress } from "react-icons/bs";
import {SiAdobeaftereffects, SiAdobephotoshop,SiJquery} from "react-icons/si";
import {CgFigma} from "react-icons/cg"; 
import Avion from "../assets/portfolio/avion-min.jpg";
import Ville from "../assets/portfolio/ville-min.jpg";
import Respiration from "../assets/portfolio/respiration-min.jpg";
import Prototypage from "../assets/portfolio/prototype_appli_enfant-min.jpg";
import Mode from "../assets/portfolio/mode-min.jpg";
import Sweet from "../assets/portfolio/sweet-min.jpg";
import Montres from "../assets/portfolio/montres-min.jpg";
import Macarons from "../assets/portfolio/macarons.jpg";
import MusicStore from "../assets/portfolio/music-store.jpg";
import Zip from "../assets/docs/projet-music-store.zip";
import Belvindiere from "../assets/portfolio/Belvindiere-min.jpg";
import Merisiers from "../assets/portfolio/FermeMerisiers.jpg";


const Portfolio = () => {
    
    return (
        <div className='container'>
            <div className='row mx-auto text-center'>
                <div className='photo col-lg-6 mt-5'>
                    <img src={Autoportrait} width={500} alt="photo_profil"/>
                </div>
                <div className='nom col-lg-6 mt-5'>
                    <img src={Nom} width={500} alt="nom et fonction"/>
                    <div className='icones-contact row mt-5'>
                        <a className="col-sm-4 contact" href="https://www.linkedin.com/in/sophie-van-hese/" target="blank"><FaLinkedinIn/></a>
                        <a className="col-sm-4 contact" href="tel:+33659887373"><BsFillTelephoneFill/></a>
                        <a className="col-sm-4 contact" href="mailto:sophievh78@gmail.com"><BsEnvelopeFill/></a>
                    </div>
                    <div className='telechargement row mt-5 mx-auto justify-content-evenly'>
                        <a href={CV} download="" className='col-lg-4'>Voir CV</a>
                        <a href={Book} download="" className='col-lg-4'> Voir BOOK</a>
                    </div>
                </div>
            </div>
            <div className='presentation row mx-auto justify-content-center mt-5'>
                <img src={Presentation} className='col-lg-8' alt="ma présentation"/>
                <h1 className='text-center mt-5'>
                    <Typewriter
                        // onInit={(typewriter) => {

                        //     typewriter.typeString('Écouter')
                        //     .pauseFor(300)
                        //     .deleteAll()
                        //     .typeString('Penser')
                        //     .pauseFor(300)
                        //     .deleteAll()
                        //     .typeString('Concevoir')
                        //     .pauseFor(300)
                        //     .deleteAll()
                        //     .start();
                            
                        // }}

                        options={{
                            strings: ['Écouter', 'Penser','Concevoir','Optimiser'],
                            delay:70,
                            pauseFor:500,
                            autoStart: true,
                            loop: true,
                          }}
                    />
                </h1>
                <p className='text-light mx-auto mt-5 col-md-6'>
                A l'écoute de mon environnement, je puise mon inspiration dans celui-ci 
                afin de proposer de nouvelles idées créatives toujours plus innovantes et 
                en adéquations avec votre besoin.</p>
            </div>
            <div className='portfolio row mt-5 justify-content-center mx-auto'>
                <img src={Titre_Portfolio} className='col-lg-8' alt="mon portfolio"/>
                <div className='grille mb-5 row text-center'>
                    <div className='liens_images col-lg-4'>
                        <img src={Avion} alt="image_avion"/>
                        <Link to="/motionAvion">
                            <div className='overlay'>
                                <p><SiAdobeaftereffects/></p>
                            </div>
                        </Link>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <img src={Ville} alt="image_ville"/>
                        <Link to="/motionVille">
                            <div className='overlay'>
                                <p><SiAdobeaftereffects/></p>
                            </div>
                        </Link>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <img src={Respiration} alt="image_respiration_bien_etre"/>  
                        <Link to="/motionRespiration">
                            <div className='overlay'>
                                <p><SiAdobeaftereffects/></p>
                            </div>
                        </Link>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <img src={Prototypage} alt="image_application_jeu_enfant"/>
                        <a href="https://www.figma.com/file/yLhL3gAVpOa3x2AfITjf7b/learningKid?node-id=0%3A1&t=GpseM7tWi1teXNkQ-1" target='blank'>
                            <div className='overlay'><p><CgFigma/></p></div>
                        </a>
                    </div>
                    <div  className='liens_images col-lg-4'>
                        <img src={Montres} alt="image_maquette_ecommerce"/>
                        <a href="https://www.figma.com/file/nsqplHN5tyd1psqSqC87hu/montres?type=design&t=g5ioxC5bUiZqE11Z-0" target='blank'>
                            <div className='overlay'><p><CgFigma/><SiAdobephotoshop/></p></div>
                        </a>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <img src={Mode} alt="one_page_mode"/>
                        <a href="https://sectorial-felt.000webhostapp.com/mode/" target='blank'>
                            <div className='overlay'><p><FaHtml5/><FaCss3Alt/><SiJquery/></p></div>
                        </a>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <img src={Macarons} alt="site_macarons"/>
                        <a href="https://sectorial-felt.000webhostapp.com/macarons/" target='blank'>
                            <div className='overlay'><p><FaHtml5/><FaCss3Alt/><SiJquery/></p></div>
                        </a>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <img src={Sweet} alt="image_parallax_donut"/>
                        <a href="https://sectorial-felt.000webhostapp.com/sweety/" target='blank'>
                            <div className='overlay'><p><SiJquery/></p></div>
                        </a>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <img src={MusicStore} alt="site-php"/>
                        <a href="" download={Zip}>
                            <div className='overlay'><p><FaPhp/></p></div>
                        </a>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <img src={Belvindiere} alt="wordpress"/>
                        <a href="https://ferme-belvindiere.fr/" target='blank'>
                            <div className='overlay'><p><BsWordpress/></p></div>
                        </a>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <img src={Merisiers} alt="image_parallax_donut"/>
                        <a href="https://fermedesmerisiers.fr/bienvenue/" target='blank'>
                            <div className='overlay'><p><BsWordpress/></p></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='outils row mt-5 justify-content-center mx-auto'>
                <img src={Outils} className='col-lg-8' alt="mon portfolio"/>
                <div className='icones_outils row mt-5 justify-content-evenly'>
                    <img className='col-lg-1' src={Xd} alt="Adobe XD"/>
                    <img className='col-lg-1' src={Illustrator} alt="Illustrator"/>
                    <img className='col-lg-1' src={Photoshop} alt="Photoshop"/>
                    <img className='col-lg-1' src={After} alt="After"/>
                    <img className='col-lg-1' src={Figma} alt="Figma"/> 
                </div>
            </div>
            <div className='aussi row mt-5 pb-5 justify-content-center mx-auto'>
                <img src={Aussi} className='col-lg-8' alt="mon portfolio"/>
                <div className='icones_aussi row mt-5 justify-content-evenly'>
                    <img className='col-sm-2 col-lg-1'src={Html} alt="icone-html"/>
                    <img className='col-sm-2 col-lg-1' src={Javascript} alt="icone_javascript"/>
                    <img className='col-sm-2 col-lg-1' src={Reactjs} alt="icone_react"/>
                    <img className='col-sm-2 col-lg-1' src={Php} alt="icone-php"/>
                    <img className='col-sm-2 col-lg-1' src={Mysql} alt="icone-mysql"/>
                    <img className='col-sm-2 col-lg-1' src={Wp} alt="icone-wordpress"/>
                    <img className='col-sm-2 col-lg-1' src={Prestashop} alt="icone-prestashop"/>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;