import React from 'react'
import Header from './Header'
import Main from './Main'
import './App.css';

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;

// import React, { Component } from 'react';
// import Header from './Components/Header/Header'
// import Main from './Main'
// import './App.css';

// class App extends Component {
//   render() {

//     return (
//       <div className="App">
//         <div>
//           <Header />
//           <Main />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


/*
class App extends Component {
  data = {
    sec1: [
      {
        id: 's1-1', title: 'Urban Sensing', year: 2019, artist: 'MIT Senseable City Lab',
        medium: 'Data visualization, digital sensors, vehicles',
        text: 'Urban Sensing is a project conducted under the guiding question of “how much urban area can be monitor with taxis equipped with sensors?”. By attaching sensors that measure air pollution, weather, traffic patterns and road quality onto to crowd-sourced urban vehicles, MIT Senseable Lab collected hyper-local data from six cities, and visualized it through tracing the traffic routes. Urban Sensing utilizes the power of digital technology to document and understand the urban environment.',
        img: 'http://senseable.mit.edu/urban-sensing/assets/og-img.jpg'
      },
      {
        id: 's1-2', title: 'Of Land and Dreams', year: 2017, artist: 'Teri Rueb and Alan Price with the Of Land and Dreams collective',
        medium: 'Web and mobile application',
        text: 'Of Land and Dreams is a collaborative mapping project on creating a portrait of Dakotas in the view of local community. The work uses a mobile application to invite audience submitting images, videos, sounds and texts that can be associated with representing the space. Each submission will become a tile on the map, preserving a piece of documentation on the local urban environment in the digital space.',
        img: 'http://terirueb.net/wp-content/uploads/2017/08/Of_Land_and_Dreams_banner-1024x281.jpg'
      },
      {
        id: 's1-3', title: 'CycleVR', year: 2017, artist: 'Aaron Puzey',
        medium: 'Google Street View, Unity, cadence monitor, stationary bicycle',
        text: 'CycleVR is a VR installation of cycling in Google Street View. Puzey shifts the primary purposes of exercising station for world exploration, assigns an indoor device with outdoor characteristics. Through exploring a virtual representation of geographical locations in interactive panorama images, CycleVR proposes an alternative way of exploring the real world virtually.',
        img: 'https://l3apq3bncl82o596k2d1ydn1-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/cycle-britain-vr-810x572.jpg'
      }
    ],
    sec2: [
      {
        id: 's2-1', title: 'Unnumbered Sparks', year: 2014, artist: 'Janet Echelman, Aaron Koblin',
        medium: 'Fiber, Google Chrome, Go, Web Sockets, Web audio, WebGL, Polymer',
        text: 'Unnumbered Sparks is a large-scale sculpture that is constantly changing based on visitor interactions. By connecting mobile devices with the sculpture, visitors can directly influence the view of the projected lighting on the sculpture in real time. As the received signals and visuals are processed and rendered through web technology, the sculpture can be seen as a physical presentation of a browser window. Unnumbered Sparks reflects the characteristics of the Internet through its interactivity and collective creation experience.',
        img: 'http://www.unnumberedsparks.com/images/index/gallery-01.jpg'
      },
      {
        id: 's2-2', title: 'Immaterials: Light painting WiFi', year: 2011, artist: 'Timo Arnall, Jørn Knutsen and Einar Sneve Martinussen',
        medium: 'Video',
        text: 'Immaterials: Light painting WiFi is a documentation on tracing the invisible landscape of WI-FI signal. Aiming to reveal the relationship between this immaterial field with the city space, the collective built a custom WI-FI measuring rod and used the technique of light painting to capture long-exposure photographs of the space. The results are images that display both the environment and an overlying structure of light.',
        img: 'http://res.cloudinary.com/voyoslo/image/upload/c_fill,dpr_3.0,h_231,q_60,w_382/aho_wifi'
      },
      {
        id: 's2-3', title: 'Alpha 3.4', year: 2002, artist: 'tsunamii.net',
        medium: 'Web browser, web server, live stream displays',
        text: 'Alpha 3.4 is a performance that reflects the infrastructure of the Internet. Documenting the entire walk from the exhibition site to the server of its website, Charles Lim Li Yong and Woon Tien Wei explores the physical presence of a seemingly virtual place. The gallery installation consists of a webcam live-stream of the server and four screens displaying the walking journey. The screens show the walker’s location interpreted as IP address, a web page of the IP address, the location on a map, and the traceroute to the IP address.',
        img: 'http://universes-in-universe.de/car/documenta/11/brau/img/tsunamii-1.jpg'
      }
    ],
    selected: null,
    page: "sec1"
  }

  constructor(props) {
    super(props);
    this.state = {
      showArtwork: false
    };
  }

  toggleArtwork = (e) => {
    let i = this.data[this.data.page].findIndex(record => record.id === e.target.id);
    this.setState({
      showArtwork: !this.state.showArtwork,
      selected: i
    });
  }

  render() {
    const idx = this.state.selected;
    let showArt = this.data[this.data.page][0];
    if (idx > -1) {
      showArt = this.data[this.data.page][idx];
    }

    const artworks = this.data[this.data.page].map(
      (t) =>
        <div className="app-artwork" id={t.id} key={t.id}>
          <div id={t.id} onClick={this.toggleArtwork.bind(this)}>{t.title}</div>
          {this.state.showArtwork && this.state.selected > -1 ?
            <Artwork
              img={showArt.img}
              title={showArt.title}
              artist={showArt.artist}
              year={showArt.year}
              medium={showArt.medium}
              text={showArt.text}
              closeArtwork={this.toggleArtwork.bind(this)} />
            : null
          }
        </div>
    );

    return (
      <div className="App">
        <div className="artworks">
          {artworks}
        </div>
        <button onClick={() => this.data.page = "sec1"}>sec1</button>
        <button onClick={() => this.data.page = "sec2"}>sec2</button>

      </div>
    );
  }
}

export default App;
*/