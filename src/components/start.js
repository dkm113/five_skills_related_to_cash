import React, { Component } from 'react';

class StartApp extends Component {

    startForm(){
        this.props.history.push('/form');
    }

    render() {
        return (
            <div>
                <h2>さあ、はじまるよ</h2>
                <button onClick={this.startForm.bind(this)}>5つの力を診断-さあ、あなたの5つの力は？-</button>
            </div>
        )
    }
}

export default StartApp;