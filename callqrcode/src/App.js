import React, { Component } from 'react';
import WebCam from './components/WebCam';
import CallQrCode from './components/QrCode';
import './App.css';

class App extends Component {
  AppCapture = (base64) => {
    console.log(base64)
  }
  render() {
    return (
      <div className="App">
         <WebCam ImageCapture={this.AppCapture} />
        <CallQrCode />
      </div>
    );
  }
}

export default App;
