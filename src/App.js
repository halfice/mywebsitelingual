import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from "./header/header";
import Footer from "./footer/footer";
import Bodycards from "./bodycards";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="row"><Header /></div>
      <br></br>
      <div className="row">
        <div className="col-sm-4"><Bodycards /></div>
        <div className="col-sm-4"><Bodycards /></div>
        <div className="col-sm-4"><Bodycards /></div>
      </div>
      <div className="row">
        <div className="col-sm-4"><Bodycards /></div>
        <div className="col-sm-4"><Bodycards /></div>
        <div className="col-sm-4"><Bodycards /></div>
      </div>

      <div className="row"><Footer /></div>
    </div>
  );
}

export default App;
