import VideoAvion from '../assets/portfolio/avion_comp.mp4';
import '../styles/Avion.css';

const MotionAvion = () => {
    return (
        <div className='avion container'>
            <video  muted= "true" autoplay="true" loop src={VideoAvion} width={800}/>
        </div>
    );
};

export default MotionAvion;