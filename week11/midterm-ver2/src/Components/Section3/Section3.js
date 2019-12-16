import React, { Component } from 'react';
import Artwork from '../Artwork/Artwork';
import './Section3.css';

class Section3 extends Component {
    data = {
        sec3: [
            {
                id: 's3-1', title: 'Do Androids Dream of Electric Cows?', year: 2017, artist: 'Baoyang Chen',
                medium: 'VR, mirror maze, and sound installation',
                text: 'Do Androids Dream of Electric Cows? disrupts the immersive and enclosed environment that VR exhibits with its onsite mirror glass structure. Presenting the experience that connects digital simulation with physical barriers, Chen explores the ontology and definition of “virtual reality”. The displayed virtual space is independent from the structure, imposing a restriction and dilemma on how the audience would navigate around the space. The mirror glass walls expose the participants movements to outsiders, integrating their actions as performance that completes the experience.',
                img: 'https://freight.cargo.site/t/original/i/b706b1bc7a8cc7e8eefb266627b66e17fc348293424ab23d2df5a9243dc78016/BCHEN_04.jpg'
            },
            {
                id: 's3-2', title: 'Studio Visit', year: 2018, artist: 'Theo Triantafyllidis',
                medium: 'Prints on Plywood, HDTVs on Wooden stands Room, Scale Tracking, Gaming PC, Performance Documentation',
                text: 'IN PROGRESS',
                img: 'https://miro.medium.com/max/2400/0*hpe87LoVQNe8OkxU.jpg'
            },
            {
                id: 's3-3', title: 'Hyper-Reality', year: 2016, artist: 'Matsuda Keiichi',
                medium: '3D Video',
                text: 'IN PROGRESS',
                img: 'http://hyper-reality.co/assets/HQ_images/hyper-reality_02.jpg'
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
        let i = this.data.sec3.findIndex(record => record.id === e.target.id);
        this.setState({
            showArtwork: !this.state.showArtwork,
            selected: i
        });
    }

    render() {
        const idx = this.state.selected;
        let showArt = this.data.sec3[0];
        if (idx > -1) {
            showArt = this.data.sec3[idx];
        }

        const artworks = this.data.sec3.map(
            (t) =>
                <div className="sec3-titles" id={t.id} key={t.id}>
                    <div className="sec3-expand" id={t.id} onClick={this.toggleArtwork.bind(this)}>
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
            <div className="sec3-artworks">
                <img className="plan-img" src="https://66.media.tumblr.com/6a99f83b2932c5ec3ec419a172d0b22a/b9de8cf3bf4db4e3-2b/s1280x1920/2640942addc0710099a5bb6f91d8e527d5a911d1.png" alt="" />
                {artworks}
            </div>
        );
    }
}

export default Section3;