import { redirect } from "next/navigation";
import { AppNavbar } from "./components/AppNavbar";
import { Sidebar } from "./components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "User - Leadsage",
};

export default async function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const clerkUser = await currentUser();
	// const user = await getUserInfo(clerkUser?.id!);

	// if (!user?.user) return redirect("/sign-in");
	return (
		<div>
			<AppNavbar user={{}} />
			<div className="pt-20 flex items-center justify-start">
				<Sidebar user={{}} />
				<div className="flex-1 py-8 lg:ml-[400px]">{children}</div>
			</div>
		</div>
	);
}
