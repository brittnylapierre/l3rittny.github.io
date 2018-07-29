import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Parallax, Background } from 'react-parallax';

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
import CustomScroll from 'react-custom-scroll';

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
const image1 = require('./img/retro-furnish.png');
const image2 = require('./img/paint.jpg');

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
        <Parallax bgImage={image2}
          strength={500}>
          <div style={{height: 150}}>
          </div>
        </Parallax>
        <div className="top-box">
          <img src="./assets/brittny.jpg" class="profile-image"/>
          <span>
            <div className="fade-in">
              <span className="fade-in-2">B</span>
              <span className="fade-in-1">R</span>
              <span className="fade-in-7">I</span>
              <span className="fade-in-5">T</span>
              <span className="fade-in-4">T</span>
              <span className="fade-in-6">N</span>
              <span className="fade-in-3">Y</span>
              &nbsp;
              <span className="fade-in-1">L</span>
              <span className="fade-in-7">A</span>
              <span className="fade-in-4">P</span>
              <span className="fade-in-3">I</span>
              <span className="fade-in-6">E</span>
              <span className="fade-in-5">R</span>
              <span className="fade-in-2">R</span>
              <span className="fade-in-8">E</span>
            </div>
            <span>
              <Headline className="page-headline fade-after">
                <span>
                  A title can't define me.
                </span>
              </Headline>
              <Paragraph className="p less-margin fade-after">
              I could call myself a full-stack web developer, but there's just so much more to me than that.
    In my career world I design and build web applications; my spare time is filled by drawing, 
    learning languages, and seeking out memorable experiences.
              </Paragraph>
            </span>
          </span>
        </div>
        <Box className="duality-box">
          <div className="scroll-wrap development">
            <CustomScroll heightRelativeToParent="100%">
              <Section className="duality-section development">
                  <Headline className="duality-header">
                    Development
                  </Headline>
                  <div className="filler"></div>
              </Section>
            </CustomScroll>
          </div>
          <div className="scroll-wrap design">
            <CustomScroll heightRelativeToParent="100%">
              <Section className="duality-section design">
                  <Headline className="duality-header">
                    Design + Art
                  </Headline>
                  <div className="filler"></div>
              </Section>
            </CustomScroll>
          </div>
        </Box>
      </App>
    );
  }
}

export default Main;

//