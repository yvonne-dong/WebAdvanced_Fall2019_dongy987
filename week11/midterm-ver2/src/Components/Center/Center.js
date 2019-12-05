import React, { Component } from 'react';
import './Center.css';

// center text area
class Center extends Component {
    render() {
        // onClick: expand the clicked one to horizontal scroll area
        if (!this.props.show) return null

        return (
            // notClicked: show title of the text area
            <div className="centerText" id={this.props.id}>
                <h1>{this.props.children}</h1>
            </div>
        );

    }
}

export default Center;