import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './App.css';

export default class Game extends React.Component {
    
    render() {
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
            </div>
        )
    }
}