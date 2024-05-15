import VideoVille from '../assets/portfolio/motion_design/ville_comp.mp4';
import '../styles/Motion.css';

const MotionVille = () => {
    return (
        <div className='motionVideo' id="city">
             <div className='row justify-content-start col-md-2 mb-5'>
                <a href='/portfolio' type="button" class='button' id='btn_city'>Retour</a>
            </div>
            <div className='row justify-content-center'>
             <video  muted= "true" autoplay="true" loop src={VideoVille} width={800}/>
            </div>
        </div>
    );
};

export default MotionVille;