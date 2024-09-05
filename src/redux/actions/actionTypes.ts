// AJAX Calls
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';
export const BEGIN_AJAX_CALL = 'BEGIN_AJAX_CALL';

interface AjaxCallErrorAction {
	type: typeof AJAX_CALL_ERROR;
}

interface BeginAjaxCallAction {
	type: typeof BEGIN_AJAX_CALL;
}

export type FormActionTypes = AjaxCallErrorAction | BeginAjaxCallAction;
