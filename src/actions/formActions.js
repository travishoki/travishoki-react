import axios from 'axios';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export const saveContactForm = (message) => {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		const { name, email, comment } = message;
		const cmd = 'sendContactForm';

		return axios.post('http://travishoki.com/portfolio-api.php', {
				cmd, name, email, comment
			})
			.then()
			.catch((error) => {
				dispatch(ajaxCallError(error));
				throw(error);
			});
	};
};
