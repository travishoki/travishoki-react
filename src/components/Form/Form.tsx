import React, { ReactNode } from 'react';

const Form = ({ children, onSubmit }: FormProps) => {
	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		onSubmit(e);
	};

	return <form onSubmit={submit}>{children}</form>;
};

type FormProps = {
	children: ReactNode;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default Form;
