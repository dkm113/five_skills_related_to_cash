
import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2'


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
        responsive: false,
        legend: false
      }
    };
  }

  startForm(){
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <h2>あなたの5つの力はこれ！</h2>
        <Radar data={this.state.data} options={this.state.options} />
        <button onClick={this.startForm.bind(this)}>ホームに戻る</button>
      </div>
    );
  }
}


export default ResultApp;