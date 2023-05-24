import React, { ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputWithIconProps {
	name: string;
	type: string;
	placeholder: string;
	register: UseFormRegister<FieldValues>;
	children: ReactNode;
}

export default function InputWithIcon({
	name,
	type,
	placeholder,
	register,
	children,
}: InputWithIconProps) {
	return (
		<div className="flex items-center border border-borderColor rounded pl-4">
			{children}
			<input
				type={type}
				placeholder={placeholder}
				{...register(name)}
				className="w-full h-12 p-2 no-focus-outline mr-3"
			/>
		</div>
	);
}
