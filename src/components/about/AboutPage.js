import React from 'react';
import {Link} from 'react-router';

const imgProfilePic = require('../../../images/about/travis-and-lindsey-hoki.png');
const imgGuitar = require('../../../images/about/guitar.png');
const imgBallroom = require('../../../images/about/ballroom.png');
const imgBreakdance = require('../../../images/about/breakdance.png');
const imgWedding = require('../../../images/about/wedding.png');
const imgSkateboard = require('../../../images/about/skateboarding.png');

class AboutPage extends React.Component {
  render() {
      const items = [
            {
                title: 'Hey',
                desc: 'My name is Travis. I\'m from Orem. I\'m 26 years old.',
                img: imgProfilePic
            },
            {
                title: 'Newlywed',
                desc: 'I am married to my best friend and high school sweet heart Lindsey. We’ve had many adventures together in the last 9 years.',
                img: imgWedding
            },
            {
                title: 'Guitar',
                desc: 'I like to play the guitar. There\'s nothing more calming then playing those six strings.',
                img: imgGuitar
            },
            {
                title: 'Breakdance',
                desc: 'Breakdancing is my favorite form of exercise. Other developer don\'t seem to have the need to spin on the ground like I do, wierd.',
                img: imgBreakdance
            },
            {
                title: 'Ballroom',
                desc: 'Though my wife and I don\'t dance as much as we did back in highschool. We still love to dance together.',
                img: imgBallroom
            },
            {
                title: 'Skateboarding',
                desc: 'Skating is a big stress reliever for me. I always have my board in the trunk of my car and use it whenever possible. Why walk anywhere when you can skateboard.',
                img: imgSkateboard
            }
      ];

    return (
        <div className="boxed boxed-md">
            <h1>About Me</h1>
            <ul className="staggered">
                {items.map((item, index)=>{
                    return (
                        <li key={index}>
                            <div className="image">
                                <img src={item.img}/>
                            </div>
                            <div className="text">
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
  }
}

export default AboutPage;
