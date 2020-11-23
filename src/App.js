import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import StartApp from './components/start';
import FormApp from './components/form';
import ResultApp from './components/result';

class App extends Component {
  render () {
    return (
      <div>
        <h1 className="mainTitle">人生を豊かにするお金にまつわる5つの力 診断テスト！</h1>
        <Route path="/" component={StartApp} exact={true} />
        <Route path="/form" component={FormApp} />
        <Route path="/result" component={ResultApp} />
      </div>
    );
  }
}


export default App;
