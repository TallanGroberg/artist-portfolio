import React from 'react';
import styled from 'styled-components'
import {Link } from 'react-router-dom'
const Nav = () => {
  return (
    <NavStyle>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/forsell'>for sell </Link>
    </NavStyle>
  );
};

const NavStyle = styled.div`
    height: 7vh;
    width: 105%;
    left: -5pt;
    align-content: center;
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
    background-color: #d7f4ed;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    font-family: "Almendra Display", cursive;
    text-align: center;

    a {
      font-size: 17pt;
      margin: 3%;
      text-decoration: none;
    }
  
    position: fixed;
    @media only screen and (max-width: 1000px) {
      text-align: center;
      bottom: 0;
    }

    @media only screen and (min-width: 1000px) {
      top: -1pt;
    }
`

export default Nav;