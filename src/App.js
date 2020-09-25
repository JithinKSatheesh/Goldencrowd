import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import Menu from './components/Menu'


import Test from './components/Test'



function App() {
  return (
    <div className="App" >
    <BrowserRouter>
    <Navbar/>
    {/* <Menu/> */}
    {/* <Test/> */}
    <Sidebar/>
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/WhatWeDo" component={WhatWeDo} />
      </Switch>
    </BrowserRouter> 
    </div>
  );
}

export default App;
