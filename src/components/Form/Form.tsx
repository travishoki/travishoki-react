import React, { ReactNode } from 'react';

export const Form = ({ children, onSubmit }: FormProps) => {
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
