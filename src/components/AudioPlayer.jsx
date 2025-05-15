import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer({ url, activeAudio, setActiveAudio }) {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
       setIsPlaying(false);
      setActiveAudio(null);
    } else {  if (activeAudio && activeAudio !== audioRef.current) {
        activeAudio.pause();
      }
      audioRef.current.play();
      setIsPlaying(true);
      setActiveAudio(audioRef.current);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (activeAudio !== audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [activeAudio]);

  return (
    <div className='player'>
      <audio ref={audioRef} src={url} onEnded={() => setIsPlaying(false)} />
      <button className='player__button' onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play Preview'}
      </button>
    </div>
  );
}