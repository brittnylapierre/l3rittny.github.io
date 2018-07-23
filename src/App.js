import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Meter from 'grommet/components/Meter';
import Title from 'grommet/components/Title';
import Value from 'grommet/components/Value';
import Distribution from 'grommet/components/Distribution';
import Headline from 'grommet/components/Headline';
import Section from 'grommet/components/Section';

import Paragraph from 'grommet/components/Paragraph';


class Main extends Component {
  render() {
    return (
      <App centered={false}>
        <Header direction="row" justify="between" size="medium"
          pad={{ horizontal: 'medium' }} className="site-header">
          <Title>
            <img src="./assets/logo.png" width="24" height="24"/>
            brittny.tech
            </Title>
        </Header>
        <Box className="top-box">
          <Headline className="page-headline">
            <img src="./assets/brittny.jpg" class="profile-image"/>
            A title can't define me.
          </Headline>
          <Paragraph className="p">
          I could call myself a full-stack web developer, but there's just so much more to me than that.
In my career world I design and build web applications; my spare time is filled by drawing, 
learning languages, and seeking out memorable experiences.
          </Paragraph>
        </Box>
        <Box className="duality-box">
          <Section className="duality-section" id="development">
            <Headline className="duality-header">
              Development
            </Headline>
          </Section>
          <Section className="duality-section" id="design">
            <Headline className="duality-header">
              Design + Art
            </Headline>
          </Section>
        </Box>
      </App>
    );
  }
}

export default Main;
