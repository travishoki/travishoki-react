/**
 * @jest-environment jsdom
 */
import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { CareerOverview } from './CareerOverview';

describe('CareerOverview', () => {
	afterEach(() => {
		jest.useRealTimers();
	});

	it('computes the years of experience from the current date', () => {
		jest.useFakeTimers();
		jest.setSystemTime(new Date('2026-11-22'));

		render(<CareerOverview />);

		expect(
			screen.getByText(/with over 15 years of experience/),
		).toBeInTheDocument();
	});

	it('updates the years when the next November arrives', () => {
		jest.useFakeTimers();
		jest.setSystemTime(new Date('2027-11-22'));

		render(<CareerOverview />);

		expect(
			screen.getByText(/with over 16 years of experience/),
		).toBeInTheDocument();
	});
});
