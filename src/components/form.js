import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import '../index.css';
import './form.css';

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
            q1: "2",
            q2: "2",
            q3: "2",
            q4: "2",
            q5: "2"
        };
    }

    sendForm(){
        this.props.history.push('/result');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="formVisual">
                        <dl>
                            <dt>Q1:確定申告を利用していますか？</dt>
                            <dd>
                                <Radio name="q1" value="2" checked={this.state.q1 === "2"} onChange={()=>this.setState({q1: "2"})} />
                                <label>利用している</label>
                                <br />
                                <Radio name="q1" value="0" checked={this.state.q1 === "0"} onChange={()=>this.setState({q1: "0"})} />
                                <label>利用していない</label>
                            </dd>
                            <dt>Q2:月々の保険料はいくらですか？</dt>
                            <dd>
                                <Radio name="q2" value="2" checked={this.state.q2 === "2"} onChange={()=>this.setState({q2: "2"})} />
                                <label>5000円以内</label>
                                <br />
                                <Radio name="q2" value="0" checked={this.state.q2 === "0"} onChange={()=>this.setState({q2: "0"})} />
                                <label>5000円を超えている</label>
                            </dd>
                            <dt>Q3:複数の収入源を持っていますか？</dt>
                            <dd>
                                <Radio name="q3" value="2" checked={this.state.q3 === "2"} onChange={()=>this.setState({q3: "2"})} />
                                <label>2つ以上持っている</label>
                                <br />
                                <Radio name="q3" value="0" checked={this.state.q3 === "0"} onChange={()=>this.setState({q3: "0"})} />
                                <label>1つの収入源しかない</label>
                            </dd>
                            <dt>Q4:私募ファンドに投資していますか？</dt>
                            <dd>
                                <Radio name="q4" value="2" checked={this.state.q4 === "2"} onChange={()=>this.setState({q4: "2"})} />
                                <label>投資していない</label>
                                <br />
                                <Radio name="q4" value="0" checked={this.state.q4 === "0"} onChange={()=>this.setState({q4: "0"})} />
                                <label>投資している or 投資を検討している</label>
                            </dd>
                            <dt>Q5:プレゼント用口座を持っていますか？</dt>
                            <dd>
                                <Radio name="q5" value="2" checked={this.state.q5 === "2"} onChange={()=>this.setState({q5: "2"})} />
                                <label>持っている</label>
                                <br />
                                <Radio name="q5" value="0" checked={this.state.q5 === "0"} onChange={()=>this.setState({q5: "0"})} />
                                <label>持っていない</label>
                            </dd>
                        </dl>
                        <button className="formBtn" onClick={this.sendForm.bind(this)}>結果を送信 <small>- あなたの5つの力は？ -</small></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormApp;