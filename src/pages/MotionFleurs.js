import VideoFleurs from '../assets/portfolio/motion_design/flowers_comp.mp4';
import '../styles/Motion.css';

const MotionFleurs = () => {
    return (
        <div className='motionVideo' id='flowers'>
            <div className='row justify-content-start col-md-2 mb-5'>
                <a href='/portfolio' type="button" class='button' id='btn_flowers'>Retour</a>
            </div>
            <video  muted= "true" autoplay="true" loop src={VideoFleurs} width={800}/>
        </div>
    );
};

export default MotionFleurs;