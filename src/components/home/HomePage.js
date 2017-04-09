import React from 'react';
import { Link } from 'react-router';

import SocialIcons from '../common/SocialIcons';

const img_uvu = require('../../../images/home/uvu.png');
const img_profile_pic = require('../../../images/home/travis-hoki.jpg');

class HomePage extends React.Component {
    componentDidMount() {
        document.body.classList.add('home');
    }
    componentWillUnmount() {
        document.body.classList.remove('home');
    }

  render() {
    return (
      <div>
        <div className="row">
            <div className="col-sm-6">
                <div className="contact-info">
                    <h1>Web Developer</h1>
                    <SocialIcons/>
                    <a className="btn btn-primary btn-lg" ng-click="setRoute('contact')">Contact Me</a>
                </div>
            </div>
            <div className="col-sm-6">
                <img className="profile-pic" src={img_profile_pic}/>
            </div>
        </div>

        <section className="white">
            <h3>Skills</h3>
        </section>

        <section className="">
            <h3>Projects</h3>
            <Link to="/projects" activeClassName="active" className="btn btn-primary btn-lg">Check Them Out</Link>
        </section>

        <section className="primary experience">
            <h3>5+ Years Experience</h3>
            <div className="boxed boxed-md">
                <div className="row">
                    <div className="col-sm-6">
                        <ul>
                            <li>Preprocessed CSS (Less and SCSS)</li>
                            <li>Responsive CSS with Media Queries</li>
                            <li>JavaScript and CoffeeScript</li>
                            <li>JavaScript Framework in Angular</li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <ul>
                            <li>Small and Large business experience</li>
                            <li>Content Management Systems</li>
                            <li>Custom Wordpress Themes</li>
                            <li>SQL and restful API integration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="white center education">
            <h3>Utah Valley University</h3>
            <img className="center" src={img_uvu}/>
            <p>Digital Media Major</p>
            <p className="degree">Bachelor of Science</p>
            <p>Internet Technology Emphasis</p>
        </section>
      </div>
    );
  }
}

export default HomePage;
