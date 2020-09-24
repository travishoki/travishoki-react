import axios from 'axios';
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
	return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
	return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
	return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
	return function(dispatch) {
		dispatch(beginAjaxCall());

		return courseApi.getAllCourses()
			.then(courses => {
				dispatch(loadCoursesSuccess(courses));
			})
			.catch(error => {
				throw(error);
			});
	};
}

export function saveContactForm(message) {
	return function (dispatch) {
		dispatch(beginAjaxCall());
		const { name, email, comment } = message;
		const cmd = 'sendContactForm';

		return axios.post('http://travishoki.com/portfolio-api.php', {
				cmd, name, email, comment
			})
			.then()
			.catch(function (error) {
				dispatch(ajaxCallError(error));
				throw(error);
			});
	};
}
