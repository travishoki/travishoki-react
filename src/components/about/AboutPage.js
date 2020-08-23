import React from 'react';
import { Link } from 'react-router';
import AboutData from './AboutData';

const AboutPage = () => (
    <div
		id="container"
		className="about"
	>
        <div className="boxed boxed-md">
            <h1>About Me</h1>

            <ul className="staggered">
                {AboutData.map((item, index) => (
                    <li key={index}>
                        <div className="image">
                            <img src={item.img}/>
                        </div>
                        <div className="text">
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default AboutPage;
