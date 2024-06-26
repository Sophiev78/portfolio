import VideoAvion from '../assets/portfolio/motion_design/avion_comp.mp4';
import '../styles/Motion.css';

const MotionAvion = () => {
    return (
        <div className='motionVideo container' id="avion">
            <div className='row justify-content-start col-md-2 mb-5'>
                <a href='/portfolio' type="button" class='button' id='btn_avion'>Retour</a>
            </div>
            <div className='row justify-content-center'>
                <video  muted= "true" autoplay="true" loop src={VideoAvion} width={800}/>
            </div>
        </div>
    );
};

export default MotionAvion;