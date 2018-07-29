import React, { Component } from 'react';
import './SocialLinks.scss';
import Headline from 'grommet/components/Headline';

class SocialLinks extends Component {
  render() {
    return (
        <div className="tk-montserrat icons">
            <a href= "https://www.behance.net/brittnylapaac5" target="_blank">
                <i className="fab fa-behance-square"></i>
            </a>
            <a href= "https://github.com/l3rittny" target="_blank">
                <i className="fab fa-github-square"></i>
            </a>
            <a href= "https://www.linkedin.com/in/brittny-lapierre" target="_blank">
                <i className="fab fa-linkedin last-icon"></i>
            </a>
        </div>
    );
  }
}

export default SocialLinks;