import { Logo } from "@/components/shared/Logo";
import React from "react";
import { ProfileDropdown } from "./ProfileDropdown";
import { MobileNavbar } from "@/components/shared/MobileNavbar";

export const AppNavbar = ({ user }: { user: any }) => {
	return (
		<div className="h-20 py-4 w-full border-b flex items-center justify-center bg-primary text-white dark:bg-black fixed top-0 left-0 z-50">
			<div className="container flex items-center justify-between">
				<Logo />
				<div className="flex-1 w-full flex items-center justify-end gap-4">
					<ProfileDropdown user={user} />
					<div className="lg:hidden">
						<MobileNavbar user={user} />
					</div>
				</div>
			</div>
		</div>
	);
};
