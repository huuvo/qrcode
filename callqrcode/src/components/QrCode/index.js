import React, { Component } from 'react';
import QRCode from "qrcode-react";

class CallQrCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objectQrCode: {
                id: 1,
                type: 2,
                usename: 'Huu',
                password: ''
            },
            qrString: ""
        };
    }
    componentDidMount() {
        // call API SEVER
  }

    handleChange = (e) => {
        this.setState({
            objectQrCode:  {
                ...this.state.objectQrCode,
                [e.target.name]: e.target.value
            } 
        });
    };

    handleTextAreaChange = e => {
        console.log(e.target.value);
    
        this.setState({
          qrString: e.target.value
        });
      };

    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>QRcode String</th>
                            <th>Span QRcode </th>
                            <th>Custom</th>
                            <th>QRcode key</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    className="m-input--text"
                                    name="id"
                                    placeholder="id"
                                    value={this.state.objectQrCode.id}
                                    onChange={this.handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    className="m-input--text"
                                    name="type"
                                    placeholder="type"
                                    value={this.state.objectQrCode.type}
                                    onChange={this.handleChange}
                                />
                            </td>
                            <td>
                                <p>{JSON.stringify(this.state.objectQrCode)}</p>
                                
                            </td>
                            <td>
                              <QRCode value={JSON.stringify(this.state.objectQrCode)} />
                            </td>
                            <td>
                            <textarea
                                style={{ margin: 0, height: "200px", width: "500px" }}
                                onChange={this.handleTextAreaChange}
                                value={this.state.qrString}/>
                            </td>
                            <td>
                            <QRCode value={this.state.qrString} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CallQrCode;