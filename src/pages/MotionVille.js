import VideoVille from '../assets/portfolio/ville_comp.mp4';
const MotionVille = () => {
    return (
        <div>
            <div className='respi container'>
            <video  muted= "true" autoplay="true" loop src={VideoVille} width={800}/>
        </div>
        </div>
    );
};

export default MotionVille;