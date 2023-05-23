import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata = {
	title: "Meu primeira projeto Next",
	description: "Bora que bora",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br" className={`${poppins.variable}`}>
			<body>{children}</body>
		</html>
	);
}
