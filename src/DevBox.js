import React, { Component } from 'react';
import Headline from 'grommet/components/Headline';
import './DevBox.scss';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Title from 'grommet/components/Title';
const carleton = require('./img/carleton.svg');
const ibm = require('./img/bee_ibm.jpg');
const ericsson = require('./img/ericsson_econ.png');
const code = require('./img/code.png');

class DevBox extends Component {
  render() {
    return (
      <div class="tk-montserrat">
            <Headline className="duality-header">
                Development
            </Headline>
            
            <List className="section-list">
                <Title className="list-title">
                    Education
                </Title>
                <ListItem className="item-list"
                    separator='horizontal'>
                    <img src={carleton} width="20" class="icon carleton"/>
                    <span className=''>
                    Bachelor of Computer Science Major @ Carleton University
                    </span>
                </ListItem>
                <br/>
                <br/>

                <Title className="list-title">
                    Skills
                </Title>
                <ListItem className="item-list"
                    separator='horizontal'>
                    <img src={code} width="24" class="icon"/>
                    <span className=''>
                    Node.js, Express, Angular 2+, PHP, Python, MongoDB, DB2
                    </span>
                </ListItem>
                <ListItem className="item-list"
                    separator='horizontal'>
                    <img src={code} width="24" class="icon"/>
                    <span className=''>
                    C, C++, Java, Scheme, Prolog, Perl
                    </span>
                </ListItem>
                <br/>
                <br/>

                
                <Title className="list-title">
                    Work Experience
                </Title>
                <ListItem className="item-list"
                    separator='horizontal'>
                    <img src={ibm} width="24" class="icon rounded"/>
                    <span className=''>
                    IBM - Sales Accelleration Tools and Demo Developer
                    </span>
                </ListItem>
                <ListItem className="item-list"
                    separator='horizontal'>
                    <img src={ericsson} width="24" class="icon rounded"/>
                    <span className=''>
                    Ericsson - Tools Developer
                    </span>
                </ListItem>
                <ListItem className="item-list"
                    separator='horizontal'>
                    <img src={carleton} width="20" class="icon carleton"/>
                    <span className=''>
                    Carleton University<br/>- TA for School of Computer Science <br/>- Web Developer for School for of Journalism
                    </span>
                </ListItem>
                <br/>
                <br/>


                <Title className="list-title">
                    Vollunteering
                </Title>
                <ListItem className="item-list"
                    separator='horizontal'>
                    <img src={carleton} width="20" class="icon carleton"/>
                    <span className=''>
                    CUHacking - Webmaster
                    </span>
                </ListItem>
                <ListItem className="item-list"
                    separator='horizontal'>
                    <img src={carleton} width="20" class="icon carleton"/>
                    <span className=''>
                    Carleton Computer Science Society - Webmaster
                    </span>
                </ListItem>
                <ListItem className="item-list"
                    separator='horizontal'>
                    <img src={carleton} width="20" class="icon carleton"/>
                    <span className=''>
                    Science Student Success Center - Mentor
                    </span>
                </ListItem>
                <ListItem className="item-list"
                    separator='horizontal'>
                    <img src={carleton} width="20" class="icon carleton"/>
                    <span className=''>
                    Virtual Ventures - Girl Guides Day Volunteer
                    </span>
                </ListItem>
            </List>
      </div>
    );
  }
}

export default DevBox;