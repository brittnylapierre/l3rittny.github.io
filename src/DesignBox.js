import React, { Component } from 'react';
import './DesignBox.scss';
import Headline from 'grommet/components/Headline';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Title from 'grommet/components/Title';

const carleton = require('./img/carleton.svg');
const draw = require('./img/draw.png');

class DesignBox extends Component {
  render() {
    return (
      <div className="tk-baltica">
        <Headline className="duality-header">
          Design + Illustration
        </Headline>
        <List className="section-list">
          <Title className="list-title">
              Skills
          </Title>
          <ListItem className="item-list"
              separator='horizontal'>
              <img src={draw} width="20" class="icon carleton"/>
              <span className=''>
              Adoble Illustrator, Adoble Photoshop, Adoble XD, Balsamiq, CSS, SASS
              </span>
          </ListItem>
          <br/>
          <br/>
          <Title className="list-title">
              Volunteering
          </Title>
          <ListItem className="item-list"
              separator='horizontal'>
              <img src={carleton} width="20" class="icon carleton"/>
              <span className=''>
              Carleton Computer Science Society - Design Team Lead
              </span>
          </ListItem>
          <ListItem className="item-list"
              separator='horizontal'>
              <img src={carleton} width="20" class="icon carleton"/>
              <span className=''>
              CUHacking - Web Design Lead
              </span>
          </ListItem>
          <br/>
          <br/>
          <Title className="list-title">
              Behance Profile
          </Title>
          <iframe className="behance" src="https://brittnylapierre.myportfolio.com">
          </iframe>
        </List>
      </div>
    );
  }
}

export default DesignBox;