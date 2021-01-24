import React from "react";
import './App.css';
import {NavigationBar} from './components/NavigationBar';
import Routes from './components/Routes'
import {BrowserRouter} from 'react-router-dom';


class App extends React.Component {
  render() {
    console.log("render app");
    return (
      <BrowserRouter>
      <div className="container">
        <NavigationBar />
        <Routes />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
