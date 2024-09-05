export interface FormState {
	ajaxCallsInProgress: number;
}

const initialState: FormState = {
	ajaxCallsInProgress: 0,
};

export default initialState;
