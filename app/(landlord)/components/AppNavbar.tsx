"use client";
import { Logo } from "@/components/shared/Logo";
import React from "react";
import { ProfileDropdown } from "./ProfileDropdown";
import Link from "next/link";
import { landlordNavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sidebar } from "./Sidebar";

interface Props {
	user: any;
}

export const AppNavbar = ({ user }: Props) => {
	const pathname = usePathname();

	const isActive = (slug: string) =>
		pathname === slug || pathname.startsWith(`${slug}/`);

	return (
		<div className="h-20 py-4 w-full border-b flex items-center justify-center bg-primary text-black dark:bg-black fixed top-0 left-0 z-50">
			<div className="container flex items-center justify-between">
				<Logo />
				<nav className="hidden md:flex flex-1 items-center justify-center gap-1">
					{landlordNavLinks.map(({ slug, label }, index) => (
						<Link
							key={index}
							href={slug}
							className={cn(
								"text-sm text-muted-foreground hover:bg-[#F2F2F2] py-2 px-4 rounded-full font-medium hover:text-black transition-all",
								isActive(slug) && "text-black bg-[#F2F2F2]"
							)}
						>
							{label}
						</Link>
					))}
				</nav>
				<div className="flex items-center justify-end gap-4">
					<ProfileDropdown user={user} />
					<div className="md:hidden">
						<Sidebar />
					</div>
				</div>
			</div>
		</div>
	);
};
