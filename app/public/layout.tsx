import Image from "next/image";
import foodPresentation from "../../public/images/foodPresentation.png";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-screen h-screen flex">
			<Image src={foodPresentation} alt="err" className="h-full w-5/12" />
			{children}
		</div>
	);
}
