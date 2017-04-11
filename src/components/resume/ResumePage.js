import React from 'react';
import {Link} from 'react-router';
import ResumeData from './ResumeData';
import Education from '../common/Education';

const imgResume = require('../../../images/resume/resume.jpg');

class ResumePage extends React.Component {
  render() {
    return (
        <div id="container" className="resume">
            <div className="boxed boxed-lg">
                <h1>Resume</h1>

                <div className="resume-link">
                    <img className="center" src={imgResume}/>
                    <a className="btn btn-primary btn-lg" href="/pdf/travis-hoki-resume.pdf" target="_blank">
                        <i className="fa fa-download"></i> Download
                    </a>
                </div>

                <ul className="staggered">
                    {ResumeData.map((job, index)=>{
                        return (
                            <li key={index}>
                                <div className="image">
                                    <img src={job.img}/>
                                </div>
                                <div className="text">
                                    <h2>{job.title}</h2>
                                    <div className="sub-line">
                                        <h3>{job.position}</h3>
                                        <p className="date">{job.dateStart} - {job.dateEnd}</p>
                                    </div>
                                    <ul>
                                    {job.tasks.map((task, index)=>{
                                        return (
                                            <li key={index}>{task}</li>
                                        );
                                    })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Education />
        </div>
    );
  }
}

export default ResumePage;
