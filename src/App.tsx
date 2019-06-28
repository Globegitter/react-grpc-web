import React from 'react';
import * as grpcWeb from 'grpc-web';
import {GreeterClient} from './grpc-web/HelloworldServiceClientPb';
import {HelloReply, HelloRequest} from './grpc-web/helloworld_pb';

import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const greeterService = new GreeterClient('http://localhost:8080', null, null);
  const request = new HelloRequest();
  request.setName("Markus")
  const call = greeterService.sayHello(request, {}, (err, response) => {
    if (err) {
      if (err.code !== grpcWeb.StatusCode.OK) {
        console.log(
            'Error code: ' + err.code + ' "' + err.message + '"');
      }
    } else {
      console.log(response.getMessage());
    }
  });
  console.log(call);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. Haylo!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

