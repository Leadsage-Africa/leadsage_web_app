import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { navLinks } from "@/constants";
import { MobileNavbar } from "./MobileNavbar";
import { Button } from "../ui/button";

export const Header = ({ user = null }: { user?: any }) => {
	return (
		<header className="z-50 bg-primary text-white dark:bg-black py-4 h-20 flex items-center justify-center fixed top-0 w-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
			<div className="container flex items-center justify-between gap-4">
				<Logo />
				<nav className="hidden flex-1 lg:flex items-center justify-center gap-2 lg:gap-8">
					{navLinks.map((link, idx) => (
						<Link
							key={idx}
							href={link.slug}
							className="text-sm font-medium hover:text-secondary transition-all"
						>
							{link.label}
						</Link>
					))}
				</nav>
				<div className="flex items-center justify-end gap-4">
					<div className="hidden md:block">
						{user?.isAdmin && (
							<Button variant="secondary" asChild size="md">
								<Link href="/dashboard">Admin Dashboard</Link>
							</Button>
						)}
						{!user?.isAdmin && (
							<div className="flex items-center justify-end gap-2">
								<Button variant="ghost" asChild size="md">
									<Link href="/sign-up">
										Become a landlord
									</Link>
								</Button>
								<Button variant="white" asChild size="md">
									<Link href="/listings">Rent a house</Link>
								</Button>
							</div>
						)}
					</div>
					{/* <SignedIn>
						<ProfileDropdown user={user} />
					</SignedIn> */}
					<div className="lg:hidden">
						<MobileNavbar user={user} />
					</div>
				</div>
			</div>
		</header>
	);
};
