import React, { Component } from 'react';
import '../index.css';

class StartApp extends Component {

    startForm(){
        this.props.history.push('/form');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="startVisual">
                        <img width="600px" src="https://cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img,w_960/https://liberaluni.com/wp-content/uploads/2018/04/191003itutunotikara1.png" />
                        <br />
                        <button onClick={this.startForm.bind(this)}>5つの力を診断-さあ、あなたの5つの力は？-</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartApp;