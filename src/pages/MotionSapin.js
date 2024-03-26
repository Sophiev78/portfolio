import VideoSapin from '../assets/portfolio/motion_design/sapin_comp.mp4';
import '../styles/Motion.css';

const MotionSapin = () => {
    return (
        <div className='motionVideo' id='sapin'>
             <div className='row justify-content-start col-md-2 mb-5'>
                <a href='/portfolio' type="button" class='button' id='btn_sapin'>Retour</a>
            </div>
            <div className='row justify-content-center'>
                <video  muted= "true" autoplay="true" loop src={VideoSapin} width={800}/>
            </div>
        </div>
    );
};

export default MotionSapin;