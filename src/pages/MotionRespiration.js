import VideoRespi from '../assets/portfolio/respiration_comp.mp4';
import '../styles/Respi.css';

const MotionRespiration = () => {
    return (
        <div className='respi container'>
            <video  muted= "true" autoplay="true" loop src={VideoRespi} width={800}/>
        </div>
    );
};

export default MotionRespiration;