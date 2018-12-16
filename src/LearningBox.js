import React, { Component } from 'react';
import './LearningBox.scss';
import Headline from 'grommet/components/Headline';

class LearningBox extends Component {
  render() {
    return (
      <div className="tk-montserrat">
        <Headline className="header">
            Always remain passionately curious
        </Headline>
        <div class="center">
            <h3>What have I been learning lately?</h3>
            <ul className="learning-list">
                <li>I've been using out Golang + Vue.js lately for my web apps. Lots of my apps have been built using Node.js/Angular 2+ and I've heard Go is crazy fast so I'm giving it a go. ;) ;)</li>
                <li>I'm learning React.js through this website (which is deployed on Github Pages) and through maintaining a web app initially developed by a coworker at work.</li>
                <li>I've added a minor in psycology to my degree so that I can have a better understanding of the needs of people in general.</li>
                <li>This winter I'll be taking a course on computer graphics with OpenGL - I'm super excited to try a new creative application of programming.</li>
                <li>As always, I'm trying to improve my artistic abilities. I'm hoping to publish a web comic someday soon.</li>
                <li>I am studying German, and can speak it at an elementary level.</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default LearningBox;