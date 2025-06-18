import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Header />
			<div className="pt-20 flex items-center justify-center">
				<div className="container flex items-center justify-center max-w-xl md:border-2 md:my-28 rounded-lg overflow-hidden">
					{children}
				</div>
			</div>
			<Footer />
		</div>
	);
}
