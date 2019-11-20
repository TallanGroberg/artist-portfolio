import React, {useContext} from 'react';
import { withTheme } from './providers/ThemeProvider';
import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import ArtPiece from './components/ArtPiece'
import Contact from './components/Contact'
import ForSell from './components/ForSell'


const App = props => {

  return (<>
    <Container>
      <Nav  />
          <Switch>
            <Route exact path='/' render={rProps => <Home {...rProps} />} /> 
            <Route exact path='/forsell' render={rProps => <ForSell {...rProps} />} /> 
            <Route exact path='/contact' render={rProps => <Contact {...rProps} />} /> 
            <Route exact path='/about' render={rProps => <About {...rProps} />} /> 
            <Route path='/art/:_id' render={rProps => <ArtPiece {...rProps} />} />
          </Switch>
    </Container>
          </>);
};

const Container = styled.div`
font-family: "Almendra Display", cursive;
background-color: #DEF1E6;
    text-align: center;
    h2 {
    font-size: 25pt;
  }
  h3 {
    font-size: 22pt;
  }
  h4 {
    font-size: 18pt;
  }
  p {
    font-size: 15pt;
  }
  a {
      text-decoration: none;
      color: black;
      transition: 0.3s
    }
    a:hover {
      color: #2F4F4F;
    }
    img {
      box-shadow: 0px 0px 9px -4px rgba(0,0,0,0.75);
    }
`



export default withTheme(App);
