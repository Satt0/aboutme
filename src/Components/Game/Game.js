import React, { Component } from 'react';
import './Game.scss';


class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="bot">

                </div>
                <div className="result">

                </div>
                <div className="player">
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                    <div className="img-container"></div>
                </div>
            </div>
        );
    }
}

export default (Game);