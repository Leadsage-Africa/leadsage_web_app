import React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Link from "next/link";
import Image from "next/image";
import { listings, DEFAULT_LISTING_IMAGE } from "@/constants";

export const PopularInPortHarcourt = () => {
	return (
		<div className="w-full overflow-x-auto">
			<h2 className="text-xl md:text-2xl font-semibold">
				Popular houses in PortHarcourt
			</h2>
			<ScrollArea>
				<div className="flex w-max space-x-4 pr-10 pb-4 mt-4">
					{listings?.map((listing, index) => {
						return (
							<Link
								href={`/listings/${listing?._id}`}
								key={index}
								className="relative group overflow-hidden rounded-lg space-box"
							>
								<Image
									src={
										listing.images[0]?.src ||
										DEFAULT_LISTING_IMAGE
									}
									alt={listing.title || "listing image"}
									width={1000}
									height={1000}
									className="w-full h-[180px] md:h-[220px] object-cover rounded-2xl group-hover:scale-[101%] transition-all overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
								/>
								<h4 className="mt-2.5 text-base md:text-lg font-medium group-hover:text-primary transition-all">
									{listing?.title}
								</h4>
								<p className="text-sm text-muted-foreground mt-1 line-clamp-3 mb-4">
									{listing.city}, {listing?.state}
								</p>
							</Link>
						);
					})}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</div>
	);
};
