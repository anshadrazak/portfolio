import React, { useEffect, useRef } from 'react';
import './Video.css';
import vid from './Images/vid.mkv';

const Video = () => {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = videoRef.current;
      const videoElement2 = videoRef2.current;
      const rect = videoElement2.getBoundingClientRect();
      const isCentered = rect.top <= window.innerHeight/8.2;
      
      if (isCentered) {
        videoElement.classList.add('fixed');
      } else {
        videoElement.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="vidcont" id="vidcont">
      <video ref={videoRef2} className="video2" src={vid} autoPlay muted loop></video>
      <video ref={videoRef} className="video" src={vid} autoPlay muted loop></video>
    </div>
  );
};

export default Video;
