import React, { ReactNode } from "react";

interface FormProps {
	children: ReactNode;
	submit: React.FormEventHandler<HTMLFormElement>;
}

export default function Form({ children, submit }: FormProps) {
	return (
		<form onSubmit={submit} className="rounded w-form flex flex-col space-y-6">
			{children}
		</form>
	);
}
