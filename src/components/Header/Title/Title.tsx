import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.scss';

export const Title = () => (
	<NavLink className="nav-title" to="/">
		Travis Hoki
	</NavLink>
);
