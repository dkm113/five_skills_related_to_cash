
import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2'
import '../index.css';
import './result.css';


class ResultApp extends Component {
    constructor (props) {
        super (props);
        this.state = {
            data: {
                labels: ['貯める力', '稼ぐ力', '増やす力', '使う力', '守る力'],
                datasets: [{
                    label: '5つの力',
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: [
                        'rgba(25, 199, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(25, 199, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: false,
                responsiveAnimationDuration: 1000,
            
            }
        };
    }

    startForm(){
        this.props.history.push('/');
    }

    render () {
        return (
            <div>
                <div className="container">
                    <div className="resultVisual">
                        <div className="flexArea">
                            <div className="flex-1">
                                <img width="150px" src="https://frame-illust.com/fi/wp-content/uploads/2017/03/9620-480x480.png" />
                            </div>
                            <div className="flex-4 comment">
                                <p>
                                    あなたの5つの力の結果が出たよ。どうだったかな？足りない部分は動画を見て復習してみてね！
                                </p>
                            </div>
                        </div>
                        <Radar data={this.state.data} options={this.state.options} />
                        <div className="flexArea">
                            <div className="flex-4 comment">
                                <p>
                                    今日が人生で一番若い日やで！<br />焦らずゆっくり育てていこな^^
                                </p>
                            </div>
                            <div className="flex-1">
                                <img width="150px" src="https://frame-illust.com/fi/wp-content/uploads/2017/03/rion.png" />
                                
                            </div>
                        </div>

                        <button className="startBtn" onClick={this.startForm.bind(this)}>ホームに戻る</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default ResultApp;