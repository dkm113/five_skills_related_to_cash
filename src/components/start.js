import React, { Component } from 'react';
import '../index.css';
import './start.css';

class StartApp extends Component {

    startForm(){
        this.props.history.push('/form');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="startVisual">
                        <div className="flexArea">
                            <div className="flex-1">
                                <img width="200px" src="https://frame-illust.com/fi/wp-content/uploads/2017/03/9694-480x480.png" />
                            </div>
                            <div className="flex-4 comment">
                                <p>
                                    ここでは、リベラルアーツ大学で最も大切にしている「5つの力」について、
                                    あなたの今現在の力を分析するよ。楽しんでいってね。
                                </p>
                            </div>
                        </div>
                        <img width="600px" src="https://cdn.shortpixel.ai/client/to_avif,q_glossy,ret_img,w_960/https://liberaluni.com/wp-content/uploads/2018/04/191003itutunotikara1.png" />
                        <br />
                        <button className="startBtn" onClick={this.startForm.bind(this)}>5つの力を診断!<br /><small>- さあ、あなたの5つの力は？ -</small></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartApp;