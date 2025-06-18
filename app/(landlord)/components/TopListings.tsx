import { Button } from "@/components/ui/button";
import { DEFAULT_LISTING_IMAGE } from "@/constants";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Toplistings = ({ listings }: { listings: any }) => {
	return (
		<div>
			{listings.map((listing: any, index: string) => {
				const coverPhoto =
					// @ts-ignore
					listing?.photos?.find((photo) => photo?.cover) ||
					// @ts-ignore
					listing?.photos[0];

				return (
					<Link
						href={`/all-listings/${listing?.listingId}`}
						key={index}
						className="hover:bg-[#F7F7F7] transition-all p-2 rounded-lg flex items-center justify-start gap-4 group cursor-pointer"
					>
						<Image
							src={coverPhoto?.src || DEFAULT_LISTING_IMAGE}
							alt={listing.title || "listing image"}
							width={1000}
							height={1000}
							className="size-[70px] object-cover rounded-lg"
						/>
						<div className="flex-1 flex items-center justify-between gap-2">
							<div className="flex-1">
								<h5 className="text-base font-medium">
									{listing?.title}
								</h5>
								<p className="text-sm text-muted-foreground">
									{listing?.bookingsCount} bookings
								</p>
							</div>
							<Button variant={"ghost"} size="icon">
								<ChevronRight className="size-6 opacity-0 group-hover:opacity-100 transition-all" />
							</Button>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
