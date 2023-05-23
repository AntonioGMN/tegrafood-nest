interface InputProps {
	name: string;
	type: string;
	placeholder: string;
	register: (name: string) => object;
}

export default function Input({
	name,
	type,
	placeholder,
	register,
}: InputProps) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			{...register(name)}
			className="rounded w-full h-12 p-2 border border-borderColor no-focus-outline"
		/>
	);
}
