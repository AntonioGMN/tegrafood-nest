import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
	return <h1 className="font-bold text-customBlue mb-7">{children}</h1>;
}
