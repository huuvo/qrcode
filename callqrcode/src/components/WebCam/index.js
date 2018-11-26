import React, { Component } from 'react';
import Webcam from "react-webcam";


const videoConstraints = {
  facingMode: { exact: "environment" }
};

const REF = "camera"

class CallWebCam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: {},
      UserMedia: true,
      UserMediaError: true
    }
  }
  // componentDidMount() {

  // }

  setRef = webcam => {
    this.webcam = webcam;
  };

  CallBackCapTure = () => {
    const camera = this.refs.camera
    const imageSrc = camera.getScreenshot();
    if (this.props.ImageCapture) {
      this.props.ImageCapture(imageSrc)
    };
    this.setState({
      imageSrc: imageSrc,
    })
    return imageSrc
  };

  handleError = (err) => {
    this.setState({
      UserMediaError: false
    });
    console.log('camera connection failed', err);
    alert("camera connection failed", err)
  }

  handleStart = () => {
    this.setState({
      UserMedia: true
    });
    console.log('Connect successfully');
    alert("あなたは開いていないカメラを同意します")
  }

  render() {
    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={REF}
          screenshotFormat="image/jpeg"
          width={350}
          onUserMediaError={this.handleError}
          onUserMedia={this.handleStart}
          audioConstraints={videoConstraints}
        />
        <button onClick={this.CallBackCapTure}>Capture photo</button>
        <img src={this.state.imageSrc} alt="" />
      </div>
    )
  }
}
export default CallWebCam;