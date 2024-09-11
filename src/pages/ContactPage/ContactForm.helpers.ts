import axios from 'axios';

type SaveContactFormProps = {
	comment: string;
	email: string;
	name: string;
};

export const saveContactForm = ({
	comment,
	email,
	name,
}: SaveContactFormProps) => {
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
			throw error;
		});
};
