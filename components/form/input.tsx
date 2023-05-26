import { InputHTMLAttributes, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
}

export default function Input(props: InputProps) {
	const { register } = useFormContext();

	return (
		<input
			className="rounded w-full h-12 text-customGray font-normal p-3 no-focus-outline"
			{...register(props.name)}
			{...props}
		/>
	);
}
