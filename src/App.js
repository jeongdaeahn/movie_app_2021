import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import "./App.css";

function App(){
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route paht="/about" component={About}/>
      <Route paht="/movie-detail" component={Detail}/>
    </HashRouter>
    
  );
}

export default App;
