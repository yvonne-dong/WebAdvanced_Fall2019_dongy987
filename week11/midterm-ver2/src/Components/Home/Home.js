import React from 'react'
import './Home.css';

const Home = () => (
  <div className="main-container">
    <div className="home-title">
      <h1>Liminality:</h1>
      <h2>the Intersection of Digital and Physical Space</h2>
      <h3 id="name-credit">Yanwen Dong FA19 Curating Digital Art</h3>
    </div>
    <div className="concept-container">
      <h1>Exhibition concept:</h1>
      <h2 id="concept">Liminality: the Intersection of Digital and Physical Space is <br></br>a thematic exhibition 
        about the connection <br></br> between digital and physical, virtual and real worlds. <br></br>
        <br></br>
        It features works by 11 artists and collectives in the form of gallery displays and installations, 
        AR app platform showcases, and a special event. 
        The exhibition is divided into three sections: tangible Internet, beyond virtuality, and extended reality.</h2>
    </div>
  </div>
);

export default Home
