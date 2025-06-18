import { currentUser } from "@clerk/nextjs/server";
import React from "react";

import type { Metadata } from "next";
import { Category } from "@/app/(new)/components/forms/Category";
export const metadata: Metadata = {
	title: "Choose a category - Landlord - Leadsage Africa",
};

const page = async ({ searchParams }: { searchParams: any }) => {
	const { id } = await searchParams;
	// const clerkUser = await currentUser();
	// const user = await getUserInfo(clerkUser?.id!);

	// const categories = await getCategories({ userId: user?.user?._id });

	let spaceDetails;

	// if (id) {
	// 	spaceDetails = await getSpaceDetails({
	// 		userId: user?.user?._id,
	// 		spaceId: id,
	// 	});
	// }

	return (
		<div className="py-8">
			<div className="container max-w-3xl">
				<h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
					Which of these best describes your space?
				</h2>
			</div>
			<Category userId={""} categories={[]} category={""} />
		</div>
	);
};

export default page;
