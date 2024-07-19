import React from 'react'
import './Services.css'

const Services = () => {
  return (
 
    <div className="outer-container">
      <div className="services-container">
        <h1 className='sheadlap'>SERVICES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <h1 className='sheadmop'>SERVICES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <div className="service">
          <div className="service-number">1</div>
          <div className="service-name">WEB DEVELOPMENT</div>
        </div>
        <div className="service">
          <div className="service-number">2</div>
          <div className="service-name">GRAPHIC DESIGNING</div>
        </div>
        <div className="service">
          <div className="service-number">3</div>
          <div className="service-name">3D</div>
        </div>
        <div className="service">
          <div className="service-number">4</div>
          <div className="service-name">VIDEO EDITING</div>
        </div>
      </div>
    </div>
  );
}



export default Services