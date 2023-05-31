import { ReactNode } from "react";

export default function ContainerInputWithIcon({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="flex items-center border border-borderColor rounded pl-4">
			{children}
		</div>
	);
}
