import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutStyle>
      <h1>Hello my name is Brian Dobbe, I'm an artist, and craftsman, I have a passion for creating Beautiful and unique art. </h1>
      <Link to='forsell'>checkout some of the pieces I have for sale</Link>
    </AboutStyle>
  );
};

const AboutStyle = styled.div`
text-align: center;
margin: 7vh;
`

export default About;