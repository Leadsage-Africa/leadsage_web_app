import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building, Plus, Users } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

import type { Metadata } from "next";
import { NoCustomers } from "@/components/shared/NoCustomers";
import { DashboardAnalytics } from "../components/DashboardAnalytics";
import { BookingsListings } from "../components/listings/BookingsListings";
import { CustomersListings } from "../components/listings/CustomersListings";
import { Nolistings } from "@/components/shared/NoListings";
import { Toplistings } from "../components/TopListings";
export const metadata: Metadata = {
	title: "Dashboard - Landlord - Leadsage",
};

const page = async () => {
	const clerkUser = await currentUser();
	// const user = await getUserInfo(clerkUser?.id!);

	// const customers = await getCustomers({ userId: user?.user?._id });
	// const spaces = await getSpaces({ userId: user?.user?._id });
	// const topSpaces = await getTopSpaces({ userId: user?.user?._id });
	// const bookings = await getBookings({ userId: user?.user?._id });

	return (
		<div className="py-8">
			<div className="container">
				{/* {spaces?.spaces?.length === 0 && <NoAdminData />} */}
				{/* {spaces?.spaces?.length !== 0 && ( */}
				<div>
					<h2 className="font-semibold text-2xl md:text-3xl">
						Welcome back, Adelae
					</h2>
					<DashboardAnalytics
						spaces={null}
						customers={null}
						bookings={null}
					/>
					<div className="p-4 md:p-8 mt-4 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
						<h3 className="font-medium text-base md:text-lg">
							Recent bookings
						</h3>
						{/* {bookings?.bookings?.length === 0 && <NoBookings />} */}
						{/* {bookings?.bookings?.length !== 0 && ( */}
						<div className="mt-2">
							<BookingsListings bookings={null} />
						</div>
						{/* )} */}
						{/* {bookings?.bookings?.length > 5 && ( */}
						<Button
							asChild
							size="md"
							className="mt-4 w-full md:w-auto"
						>
							<Link href="/all-bookings">View all bookings</Link>
						</Button>
						{/* )} */}
					</div>
					<div className="p-4 md:p-8 mt-4 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
						<h3 className="font-medium text-base md:text-lg">
							Top performing spaces
						</h3>
						{/* {topSpaces?.spaces?.length === 0 && ( */}
						<Nolistings
							description="No listings to display"
							showButton={false}
						/>
						{/* )} */}
						{/* {topSpaces?.spaces?.length !== 0 && ( */}
						<div className="mt-2">
							<Toplistings listings={null} />
						</div>
						{/* )} */}
					</div>
					<div className="p-4 md:p-8 mt-4 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
						<h3 className="font-medium text-base md:text-lg">
							Recent users
						</h3>
						{/* {customers?.customers?.length === 0 && ( */}
						<NoCustomers />
						{/* )} */}
						{/* {customers?.customers?.length !== 0 && ( */}
						<div className="mt-2">
							<CustomersListings customers={null} />
						</div>
						{/* )} */}
						{/* {customers?.customers?.length > 5 && ( */}
						<Button
							asChild
							size="md"
							className="mt-4 w-full md:w-auto"
						>
							<Link href="/all-users">View all customers</Link>
						</Button>
						{/* )} */}
					</div>
					<div className="p-4 md:p-8 mt-4 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
						<h3 className="font-medium text-base md:text-lg">
							Quick actions
						</h3>
						<div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							<Button
								className="rounded-lg"
								size="lg"
								variant={"outline"}
								asChild
							>
								<Link
									href="/all-listings/new"
									className="flex items-center justify-center flex-col gap-2 py-16"
								>
									<Plus className="size-5" />
									<span>Add new listing</span>
								</Link>
							</Button>
							<Button
								className="rounded-lg"
								size="lg"
								variant={"outline"}
								asChild
							>
								<Link
									href="/all-customers"
									className="flex items-center justify-center flex-col gap-2 py-16"
								>
									<Users className="size-5" />
									<span>Manage customers</span>
								</Link>
							</Button>
							<Button
								className="rounded-lg"
								size="lg"
								variant={"outline"}
								asChild
							>
								<Link
									href="/all-bookings"
									className="flex items-center justify-center flex-col gap-2 py-16"
								>
									<Building className="size-5" />
									<span>Manage bookings</span>
								</Link>
							</Button>
						</div>
					</div>
				</div>
				{/* )} */}
			</div>
		</div>
	);
};

export default page;
