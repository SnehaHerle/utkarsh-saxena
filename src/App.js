import React from 'react';
import Navbar from './components/Navbar'
import "./App.css"
import {BrowserRouter, Route} from 'react-router-dom'
import About from '../src/components/screens/About'
import Inspiration from '../src/components/screens/Inspiration'
import Story from '../src/components/screens/Story'
import Footer from '../src/components/screens/Footer'


function App() {
  return (
    
    <BrowserRouter>
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
