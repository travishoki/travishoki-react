import expect from 'expect';
import { createStore } from 'redux';

import * as courseActions from '../actions/courseActions';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

describe('Store', function() {
	it('Should handle creating courses', function() {
		// arrange
		const store = createStore(rootReducer, initialState);
		const course = {
			title: "Clean Code"
		};

		// act
		const action = courseActions.createCourseSuccess(course);
		store.dispatch(action);

		// assert
		const actual = store.getState().courses[0];
		const expected = {
			title: "Clean Code"
		};

		expect(actual).toEqual(expected);
	});
});
