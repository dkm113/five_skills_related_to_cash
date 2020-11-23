import React, { Component } from 'react';

class FormApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /* -- 5つの力 -- */
            power_save: 0,
            power_earn: 0,
            power_grow: 0,
            power_use: 0,
            power_protect:0,
            /* -- フォーム選択 -- */
            /* Q1: */
            q1: "1"

        };
    }

    sendForm(){
        this.props.history.push('/result');
    }

    render() {
        return (
            <div>
                <p>Q1:</p>
                <label>hoge</label>
                <input type="radio" name="q1" value="1" checked={this.state.q1 === "1"} onChange={()=>this.setState({q1: "1"})} />
                <label>humu</label>
                <input type="radio" name="q1" value="2" checked={this.state.q1 === "2"} onChange={()=>this.setState({q1: "2"})} />
                <br />
                <button onClick={this.sendForm.bind(this)}>結果を送信-あなたの5つの力は？-</button>
            </div>
        )
    }
}

export default FormApp;