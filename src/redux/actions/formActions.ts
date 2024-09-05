import axios from 'axios';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import { MessageType } from 'src/pages/ContactPage/ContactForm';
import { Dispatch } from 'redux';

export const saveContactForm = (message: MessageType) => {
	return (dispatch: Dispatch) => {
		dispatch(beginAjaxCall());
		const { comment, email, name } = message;
		const cmd = 'sendContactForm';

		return axios
			.post('http://travishoki.com/portfolio-api.php', {
				cmd,
				comment,
				email,
				name,
			})
			.then()
			.catch((error) => {
				dispatch(ajaxCallError());
				throw error;
			});
	};
};
