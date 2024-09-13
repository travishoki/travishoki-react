import React from 'react';

export const Message = ({
	className,
	isVisible = false,
	text,
}: MessageProps) => {
	if (!isVisible) return null;

	return <p className={`form-message ${className}`}>{text}</p>;
};

type MessageProps = {
	className: string;
	isVisible: boolean;
	text: string;
};
