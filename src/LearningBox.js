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
                <li>I'm learning React.js through this website (which is deployed on Github Pages) and through maintaining a web app initially developed by a coworker at work.</li>
                <li>I'm studying The Brain and Technology: Brain Science in Interface Design from The Interaction Design Foundation.</li>
                <li>This summer I am also taking elective courses in introductory cognitive science and introductory psychology to better my ability to design human-centric web applications.</li>
                <li>As always, I'm trying to improve my artistic abilities. I especially want to be able to draw realistic water.</li>
                <li>I am studying German, and can speak it at an elementary level.</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default LearningBox;