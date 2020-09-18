import React from 'react';
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div
		id="container"
		className="not-found"
	>
        <h1>Page Not Found</h1>

        <div className="row link-buckets">
            <div className="col-sm-4">
                <Link to="/projects">
                    <h2>Projects</h2>
                </Link>
            </div>
            <div className="col-sm-4">
                <Link to="/resume">
                    <h2>Resume</h2>
                </Link>
            </div>
            <div className="col-sm-4">
                <Link to="/about">
                    <h2>About</h2>
                </Link>
            </div>
        </div>
    </div>
);

export default NotFoundPage;
