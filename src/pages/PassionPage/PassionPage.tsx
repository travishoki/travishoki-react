import React from 'react';

import { Outlet } from 'react-router-dom';

import { PassionNav } from './PassionNav/PassionNav';

export const PassionPage = () => (
	<div className="passion" id="container">
		<h1>Passion Projects</h1>
		<PassionNav />
		<Outlet />
	</div>
);
