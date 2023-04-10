import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';
import CV from "../assets/docs/CV_sophieV_alternance_jaune.pdf";
import Book from "../assets/docs/book.pdf";
import Profil from "../assets/photo-profil.png";
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
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill,BsEnvelopeFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import Avion from "../assets/portfolio/avion-min.jpg";
import Respiration from "../assets/portfolio/respiration-min.jpg";
import Prototypage from "../assets/portfolio/prototype_appli_enfant-min.jpg";
import Sweet from "../assets/portfolio/sweet-min.jpg";
import Montres from "../assets/portfolio/montres-min.jpg";
import Macarons from "../assets/portfolio/macarons.jpg";




const Portfolio = () => {

    return (
        <div className='container'>
            <div className='row mx-auto text-center'>
                <div className='col-lg-6 mt-5'>
                    <img src={Profil} width={500} alt="photo_profil"/>
                </div>
                <div className='col-lg-6 mt-5'>
                    <img src={Nom} width={500} alt="mon nom"/>
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
            <div className='text-center mx-auto mt-5 presentation'>
                <img src={Presentation} className='col-sm-12 col-lg-8' alt="ma présentation"/>
                <h1 className='mt-5'>
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
            <div className=' portfolio mt-5 text-center mx-auto'>
                <img src={Titre_Portfolio} className='col-sm-12 col-lg-8' alt="mon portfolio"/>
                <div className='grille mb-5 row'>
                    <div className='liens_images col-lg-4'>
                        <div className='overlay'><p>Motion avion<br/>After Effects</p></div>
                        <Link to="/motionAvion"><img src={Avion} alt="image_avion"/></Link>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <div className='overlay'><p>Motion respiration<br/>After Effects</p></div>
                        <Link to="/motionRespiration" target='blank'><img src={Respiration} alt="image_respiration_bien_etre"/></Link>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <div className='overlay'><p>Prototypage<br/>Figma</p></div>
                        <a href="https://www.figma.com/file/yLhL3gAVpOa3x2AfITjf7b/learningKid?node-id=0%3A1&t=GpseM7tWi1teXNkQ-1" target='blank'><img src={Prototypage} alt="image_application_jeu_enfant"/></a>
                    </div>
                    <div  className='liens_images col-lg-4'>
                        <div className='overlay'><p>Maquette e-commerce (en cours de production)<br/>Figma - Photoshop</p></div>
                        <a href="" target='blank'><img src={Montres} alt="image_maquette_ecommerce"/></a>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <div className='overlay'><p>Site vitrine <br/> HTML-CSS-jQuery</p></div>
                        <a href="https://sectorial-felt.000webhostapp.com/macarons/" target='blank'><img src={Macarons} alt="image_maquette_crytpomoannaie"/></a>
                    </div>
                    <div className='liens_images col-lg-4'>
                        <div className='overlay'><p>Effet parallax<br/>jQuery</p></div>
                        <a href="https://sectorial-felt.000webhostapp.com/sweety/" target='blank'><img src={Sweet} alt="image_parallax_donut"/></a>
                    </div>
                </div>
            </div>
            <div className='outils mt-5 text-center mx-auto'>
                <img src={Outils} className='col-sm-12 col-lg-8' alt="mon portfolio"/>
                <div className='row mt-5 justify-content-evenly'>
                    <img className='col-sm-2 col-lg-1' src={Xd} alt="Adobe XD"/>
                    <img className='col-sm-2 col-lg-1' src={Illustrator} alt="Illustrator"/>
                    <img className='col-sm-2 col-lg-1' src={Photoshop} alt="Photoshop"/>
                    <img className='col-sm-2 col-lg-1' src={After} alt="After"/>
                    <img className='col-sm-2 col-lg-1' src={Figma} alt="Figma"/> 
                </div>
            </div>
            <div className='aussi mt-5 pb-5 text-center mx-auto'>
                <img src={Aussi} className='col-sm-12 col-lg-8' alt="mon portfolio"/>
                <div className='row mt-5 justify-content-evenly'>
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