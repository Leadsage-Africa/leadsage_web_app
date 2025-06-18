import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Log into my account - Leadsage Africa",
};

export default function page() {
	return (
		<div className="w-full py-16 md:pt-0 md:pb-8">
			<div className="border-b py-4 text-center hidden md:block">
				<p className="font-semibold text-lg">Log in</p>
			</div>
			<div className="px-[32px] mt-12 hidden md:block">
				<h2 className="text-2xl md:text-3xl font-semibold leading-0">
					Welcome to Leadsage Africa
				</h2>
			</div>
			<div className="md:hidden">
				<h2 className="text-2xl md:text-3xl font-semibold leading-0">
					Log into Leadsage Africa
				</h2>
			</div>
			<div className="mt-1">
				<SignIn />
			</div>
			<p className="text-sm text-center text-muted-foreground mt-4">
				Don't have an account?{" "}
				<Link
					className="text-black hover:text-primary transition-all"
					href="/sign-up"
				>
					Sign up
				</Link>
			</p>
		</div>
	);
}
