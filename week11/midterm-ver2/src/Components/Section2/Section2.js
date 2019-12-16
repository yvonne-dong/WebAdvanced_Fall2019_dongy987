import React, { Component } from 'react';
import Artwork from '../Artwork/Artwork';
import './Section2.css';

class Section2 extends Component {
    data = {
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
    }

    constructor(props) {
        super(props);
        this.state = {
            showArtwork: false
        };
    }

    toggleArtwork = (e) => {
        let i = this.data.sec2.findIndex(record => record.id === e.target.id);
        this.setState({
            showArtwork: !this.state.showArtwork,
            selected: i
        });
    }

    render() {
        const idx = this.state.selected;
        let showArt = this.data.sec2[0];
        if (idx > -1) {
            showArt = this.data.sec2[idx];
        }

        const artworks = this.data.sec2.map(
            (t) =>
                <div className="sec2-titles" id={t.id} key={t.id}>
                    <div className="sec2-expand" id={t.id} onClick={this.toggleArtwork.bind(this)}>
                        {t.title}
                    </div>
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
            <div className="sec2-artworks">
                <img className="plan-img" src="https://66.media.tumblr.com/9b726771a1b5af6bdf38e1c912512fdc/b9de8cf3bf4db4e3-1a/s1280x1920/588d03b46cb50cb8f5e973c5a173ccd614ddeba4.png" alt="" />
                {artworks}
            </div>
        );
    }
}

export default Section2;