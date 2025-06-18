import React from "react";
// import ProductCard from "./cards/ProductCard";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
// import { popularProperties } from "@/constant";
// import { getAllListings } from "@/lib/actions/list.actions";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Image from "next/image";
import { DEFAULT_LISTING_IMAGE } from "@/constants";
import { formatMoneyInput } from "@/lib/utils";

export const PopularProperties = async () => {
	// const listings = await getAllListings({
	// 	query: "",
	// 	page: 1,
	// 	limit: 5,
	// });

	return (
		<div className="container py-16">
			<div className="space-y-2">
				<h2 className="font-medium text-3xl md:text-4xl">
					Popular Properties
				</h2>
				<p className="hidden lg:block text-base text-muted-foreground leading-relaxed lg:max-w-lg">
					Check out our most viewed and top-selling properties—trusted
					by many for their quality, location, and value.
				</p>
			</div>
			<div className="font-bold text-4xl h-screen mt-60 space-y-6">
				<h1>I put the packet on the glass</h1>
				<h1>What glass?</h1>
				<h1>A little glass dish in the microwave</h1>
				<h1>Got it!</h1>
				<h1>I closed the door</h1>
				<h1>Which door?</h1>
				<h1>The door of the microwave. What is wrong with you?</h1>
			</div>
			<ScrollArea className="">
				<div className="flex w-max space-x-4 md:space-x-6 lg:space-x-8 pt-4 pr-10 pb-8">
					{/* {listings.data?.map((listing: any, index: string) => (
						<ProductCard
							key={index}
							id={listing._id}
							images={listing.images}
							name={listing.name}
							rent={listing.price}
							address={listing.address}
							city={listing.city}
							state={listing.state}
						/>
					))}
					{listings.data?.map((listing: any, index: string) => (
						<ProductCard
							key={index}
							id={listing._id}
							images={listing.images}
							name={listing.name}
							rent={listing.rent}
							address={listing.address}
							city={listing.city}
							state={listing.state}
						/>
					))} */}
					<Link
						href={`/listings/12345`}
						className="inline-block aspect-auto hover:bg-[#F7F7F7] transition-all w-[250px] md:w-[320px] lg:w-[400px] rounded-xl overflow-hidden cursor-pointer group"
					>
						<div className="overflow-hidden">
							<Image
								src={DEFAULT_LISTING_IMAGE}
								alt={"{Property image}"}
								width={1000}
								height={1000}
								className="group-hover:scale-[1.1] aspect-auto w-full rounded-xl object-cover transition ease-out"
							/>
						</div>
						<h4 className="mt-4 text-green-400 text-lg md:text-xl font-semibold hover:text-green-700 transition ease-in-out">
							Lekki Phase 1
						</h4>
						<p className="text-muted-foreground text-sm lg:text-base mt-1.5">
							Lagos, Nigeria
						</p>
						<p className="text-base font-medium mt-2">
							₦{formatMoneyInput(10000)}
						</p>
					</Link>
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
			<div className="w-full mt-8 flex items-center justify-center">
				<Button
					size={"lg"}
					asChild
					className="text-green-400 bg-[#E6F5EB] hover:text-white"
				>
					<Link href="/services">
						All properties <MoveUpRight />
					</Link>
				</Button>
			</div>
		</div>
	);
};
