import { currentUser } from "@clerk/nextjs/server";
import { AppNavbar } from "./components/AppNavbar";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Admin dashboard - Reenite",
	description:
		"Browse our wide collection of workspaces for ease and comfort. Quality guaranteed.",
	keywords: "Reenite, spaces, space, our spaces, all spaces",
};

export default async function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const clerkUser = await currentUser();
	// const user = await getUserInfo(clerkUser?.id!);

	// if (!user?.user || !user?.user.isLandlord) return redirect("/sign-in");

	return (
		<div>
			<AppNavbar user={null} />
			<div className="pt-20 min-h-[90vh]">{children}</div>
			{/* <Footer /> */}
		</div>
	);
}
