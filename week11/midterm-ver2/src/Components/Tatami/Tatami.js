// import './Tatami.css';

import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';

import './Tatami.css';

class Tatami extends Component {

    sketch = (p) => {
        let w = 100;
        let h = 100;
        let clr = 0;

        p.setup = function () {
            p.createCanvas(w, h);
        }

        p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
            clr = props.clr;
        };

        p.draw = function () {
            p.background(clr);


        }
    }
    render() {
        return (
            <div className="tatamiCanvas" key={this.props.id} id={this.props.id}>
                <P5Wrapper sketch={this.sketch} clr={this.props.clr}/>
            </div>

        );
    }
}

export default Tatami;