import React, {Component} from 'react';
import ReactDom from 'react-dom'
import {HashRouter, BrowserRouter, Route, Link, Switch} from "react-router-dom"
import Navbar from './components/Navbar'
import "./App.css"
//import {BrowserRouter, Route} from 'react-router-dom'
import About from '../src/components/screens/About'
import Inspiration from '../src/components/screens/Inspiration'
import Story from '../src/components/screens/Story'
import Footer from '../src/components/screens/Footer'
import { render } from '@testing-library/react';


function App() {
  return (
    
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
        <Navbar/>
        <Route exact path = "/utkarsh-saxena">
          <About />
        </Route>
        <Route exact path = "/about">
          <About />
        </Route>
        <Route exact path = "/story">
          <Story />
        </Route>
        <Route exact path = "/inspiration">
          <Inspiration />
        </Route>
        <br></br>
        <br></br>
        <Footer />

    </BrowserRouter>


  );
}

export default App;
