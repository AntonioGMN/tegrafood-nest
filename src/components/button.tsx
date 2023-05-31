import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	type: "button" | "submit" | "reset" | undefined;
}

export default function Button({ children, type }: ButtonProps) {
	return (
		<button
			type={type}
			className="h-12 bg-customOrage text-white font-bold rounded"
		>
			{children}
		</button>
	);
}
