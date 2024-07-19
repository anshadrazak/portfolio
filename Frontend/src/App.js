import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Tag from './Tag';
import Main from './Main';
import IntroTexts from './IntroTexts';
import Video from './Video';
import Projects from './Projects';
import OutroTexts from './OutroTexts';
import Services from './Services';
import Footer from './Footer';
import React, { useEffect, useRef } from 'react';
import { TweenLite } from 'gsap';
import './Cursor.css';

function App() {

  const circleRef = useRef(null);

  useEffect(() => {
    const moveCircle = (e) => {
      console.log('Mouse coordinates:', e.pageX, e.pageY); // Log mouse coordinates
      console.log('circleRef.current:', circleRef.current); // Log the ref to check if it's correctly assigned
      
      if (circleRef.current) {
        TweenLite.to(circleRef.current, 0.5, {
          css: {
            left: e.pageX,
            top: e.pageY,
          },
        });
      }
    };

    window.addEventListener('mousemove', moveCircle);

    return () => {
      window.removeEventListener('mousemove', moveCircle);
    };
  }, []);

  return (
    <div className="App">
      <div className="circle" ref={circleRef}></div>
      <header className="App-header">
        <Header />
        <br></br>
        <Tag />
        <Main />
        <IntroTexts />
        <Video />
        <Projects />
        <OutroTexts />
        <Services />
        <Footer />
      </header>
    </div>
  );
}

export default App;
