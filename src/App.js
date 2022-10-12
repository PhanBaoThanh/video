import './App.scss';
import video from './video/video.mp4'
import {useState,useRef,useEffect} from 'react'

function App() {
  const [isPause,setIsPause] = useState(false)
  const videoRef = useRef()
  useEffect(() => {
    if(isPause)
      videoRef.current.pause()
    else
      videoRef.current.play()
  },[isPause])
  return (
    <div className="App">

      <video ref={videoRef} autoPlay muted loop className='video'>
        <source src={video} type='video/mp4' />
      </video>
      <div className='box'>
        <h1 className='header'>Video Project</h1>
      </div>

      <div className='button' onClick={() => setIsPause(!isPause)}>
        <p>Play</p>
        <p>Pause</p>
        <div className={`btn ${isPause ? 'right' : ''}`}></div>
      </div>
    </div>
  );
}

export default App;
