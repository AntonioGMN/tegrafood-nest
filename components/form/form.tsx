import React, { FormHTMLAttributes, ReactNode } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode;
}

export default function Form({ children }: FormProps) {
	return (
		<form className="rounded w-form flex flex-col space-y-6">{children}</form>
	);
}
