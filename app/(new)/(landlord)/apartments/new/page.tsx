import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { newSpaceOverview } from "@/constants";
import Image from "next/image";
import { Footer } from "@/app/(new)/components/Footer";

export const metadata: Metadata = {
	title: "Create an listing - Landlord - Leadsage Africa",
};

const page = () => {
	return (
		<div>
			<div className="flex items-center justify-center py-8">
				<div className="container grid grid-cols-1 md:grid-cols-2 md:gap-4">
					<div className="flex items-center justify-center">
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 mb-4 font-bold">
							It's easy to get started on Leadsage Africa
						</h1>
					</div>
					<div>
						{newSpaceOverview.map(
							({ title, icon, description }, index) => (
								<div
									key={index}
									className={`flex items-center justify-between gap-4 ${
										index !== newSpaceOverview.length - 1 &&
										"border-b"
									} py-8`}
								>
									<div className="flex items-start justify-start gap-2 md:gap-4">
										<h5 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
											{index + 1}
										</h5>
										<div>
											<h5 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
												{title}
											</h5>
											<p className="text-sm md:text-base lg:text-lg text-muted-foreground">
												{description}
											</p>
										</div>
									</div>
									<Image
										src={icon}
										alt={`${icon} icon`}
										width={1000}
										height={1000}
										className="size-[50px] md:size-[70px] lg:size-[100px] object-cover"
									/>
								</div>
							)
						)}
					</div>
				</div>
			</div>
			<Footer>
				<div className="container flex items-center justify-end gap-4">
					<Button asChild size="lg">
						<Link href="/all-listings/landlord/new/category">
							Get started
						</Link>
					</Button>
				</div>
			</Footer>
		</div>
	);
};

export default page;
