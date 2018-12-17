import React, { Component } from 'react';
import ReactDropzone from 'react-dropzone';
import logo from './../logo.svg';
import './../App.css';
import { render } from "react-dom";
import request from "superagent";

class App extends Component {

  onDrop = (files) => {
    // POST to a test endpoint for demo purposes
    const req = request.post('https://httpbin.org/post');

    files.forEach(file => {
      req.attach(file.name, file);
    });

    req.end();
  }

  render() {
    return (
      <div className="App">
        <ReactDropzone
          onDrop={this.onDrop}
        >
          Drop your best gator GIFs here!!
        </ReactDropzone>
      </div>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);

export default App;
