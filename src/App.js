import React, { Component } from 'react';
import './App.scss';
import DevBox from './DevBox';
import DesignBox from './DesignBox';
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


class Main extends Component {
  render() {
    return (
      <App centered={false}>
        <Header direction="row" justify="between" size="medium"
          pad={{ horizontal: 'medium' }} className="site-header">
          <Title className="tk-montserrat">
            <img src="./assets/logo.png" width="24" height="24"/>
            brittny.tech
          </Title>
        </Header>  
        <div className="page-name">
          <div className="fade-in tk-montserrat">
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
        </div>
        <Section className="spacer">
          
        </Section>
        <div className="top-box ">
          <img src="./assets/brittny.jpg" class="profile-image fade-after"/>
          <span>
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
            <Section className="duality-section development">
                <DevBox/>
            </Section>
          </div>
          <div className="scroll-wrap design">
            <Section className="duality-section design">
                <DesignBox/>
            </Section>
          </div>
        </Box>
        <Footer justify='between'
          size='large'
          className="footer">
          <Title>
            <img src="./assets/logo.png" width="24" height="24"/>
            brittny.tech
          </Title>
        </Footer>
      </App>
    );
  }
}

export default Main;

/*
<CustomScroll heightRelativeToParent="100%">
        <Section className="duality-section design">
        </Section>
      </CustomScroll>
*/