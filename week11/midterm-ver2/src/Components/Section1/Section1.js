import React, { Component } from 'react';
import Artwork from '../Artwork/Artwork';
import './Section1.css';

class Section1 extends Component {
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
        selected: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            showArtwork: false
        };
    }

    toggleArtwork = (e) => {
        let i = this.data.sec1.findIndex(record => record.id === e.target.id);
        this.setState({
            showArtwork: !this.state.showArtwork,
            selected: i
        });
    }

    render() {
        const idx = this.state.selected;
        let showArt = this.data.sec1[0];
        if (idx > -1) {
            showArt = this.data.sec1[idx];
        }

        const artworks = this.data.sec1.map(
            (t) =>
                <div className="sec1-titles" id={t.id} key={t.id}>
                    <div className="sec1-expand" id={t.id} onClick={this.toggleArtwork.bind(this)}>
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
            <div className="sec1-artworks">
                <img className="plan-img" src="https://66.media.tumblr.com/c6240b497d1ea45fea66826eb51f92c1/b9de8cf3bf4db4e3-18/s1280x1920/e4fbfddf80aac8ddcbf4c03845ecbb34fbfd7f76.png" alt="" />
                {artworks}
            </div>
        );
    }
}

export default Section1;