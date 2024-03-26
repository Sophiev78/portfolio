import VideoRespi from '../assets/portfolio/motion_design/respiration_comp.mp4';
import '../styles/Motion.css';

const MotionRespiration = () => {
    return (
        <div className='motionVideo' id='respi'>
             <div className='row justify-content-start col-md-2 mb-5'>
                <a href='/portfolio' type="button" class='button' id='btn_respi'>Retour</a>
            </div>
            <video  muted= "true" autoplay="true" loop src={VideoRespi} width={800}/>
        </div>
    );
};

export default MotionRespiration;