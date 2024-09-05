import {
	AJAX_CALL_ERROR,
	BEGIN_AJAX_CALL,
	FormActionTypes,
} from '~actions/actionTypes';

import initialState, { FormState } from './initialState';
import { Reducer } from 'redux';

const actionTypeEndsInSuccess = (type: string) => {
	return type.substring(type.length - 8) === '_SUCCESS';
};

const ajaxStatusReducer: Reducer<FormState, FormActionTypes> = (
	state = initialState,
	action,
) => {
	const { type } = action;
	if (type === BEGIN_AJAX_CALL) {
		return {
			ajaxCallsInProgress: state.ajaxCallsInProgress + 1,
		};
	} else if (type === AJAX_CALL_ERROR || actionTypeEndsInSuccess(type)) {
		return {
			ajaxCallsInProgress: state.ajaxCallsInProgress - 1,
		};
	}

	return state;
};

export default ajaxStatusReducer;
