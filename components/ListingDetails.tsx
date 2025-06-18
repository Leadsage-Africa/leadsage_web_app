"use client";
import { useState } from "react";
import { AmenityBox } from "./shared/AmenityBox";
import { availableAmenities } from "@/constants";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { NairaIcon } from "./shared/NairaIcon";

interface Props {}

export const ListingDetails = () => {
	const [booking, setBooking] = useState("");

	return (
		<div className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-4 mt-8">
			<div className="col-span-7 lg:col-span-5">
				<div>
					<p className="text-base mt-2 leading-relaxed">
						So, you like the idea of coliving, but you’re not sure
						if it’ll work for you, even as a couple? This is the
						house for you. We’ve completely rethought our shared
						housing concept with you in mind. It has a large master
						bedroom (up to 50m²) as well as two smaller options with
						ensuite bathrooms to settle into with utilities &
						services including cooking gas, Wi-Fi, DSTV,
						electricity, treated water, and weekly houseclean
						all-inclusive in your monthly rent. Located in secure,
						gated Hakeem Dickinson Estate, Off T.F Kuboye Road,
						Oniru, the accommodation let you escape the hustle and
						bustle of Lagos while staying well-connected via public
						transport. In addition, positioned not far from Victoria
						Island and Lekki phase1, it provides easy access to
						major business hubs while letting you live in a quieter,
						more relaxed environment. After the day's activities,
						enjoy access to the fitness area, relax with a game of
						table tennis, or take a plunge in the pool. If you
						prefer a quieter evening, retreat to your listing,
						equipped with a fully functional kitchen for a
						home-cooked meal. The longer you stay, the greater the
						benefits. Stay 3+ months and receive 5% discount, or opt
						for 6+ months to unlock even more discounted rates and
						exclusive perks, including 'rent-free' periods when you
						vacation, visit family, or go on a work trip. Monthly
						payment • All-inclusive Monthly Rent: N650,000/mth •
						Utilities & Services: N0.00/mth One-time payment •
						Security Deposit: N0.00/mth • Agency Fee: N0.00/mth •
						Legal Fee: N0.00/mth Please note the following: -⁠
						⁠All-inclusive rent price—include fully furnished
						listing, 24-hour power (EKEDC and diesel generators),
						weekly cleaning, cable, wifi, cooking gas refills, &
						general maintenance. -⁠ ⁠⁠it is a young ambitious
						professionals community, so our ideal candidate is
						working class with verifiable employment. -⁠ Adherence
						to the house rules is sacrosanct, & any deviation will
						be met with stiff resistance.
					</p>
				</div>
				<Separator className="my-4 md:my-6" />
				<div>
					<h4 className="text-xl md:text-2xl font-medium">
						Amenities
					</h4>
					<div className="grid md:grid-cols-2 gap-6 mt-4">
						{availableAmenities
							.slice(0, 12)
							?.map(({ icon, name }, index) => {
								return (
									<AmenityBox
										key={index}
										name={name!}
										icon={icon}
									/>
								);
							})}
					</div>
				</div>
				<Separator className="my-4 md:my-6" />
				<div>
					<h4 className="text-xl md:text-2xl font-medium">
						Policies
					</h4>
					<div className="grid gap-6 mt-4 text-sm md:text-base text-muted-foreground">
						<p>
							<Check className="mr-2 size-5 inline-block" />
							Are pets allowed?{" "}
							<span className="text-black">Yes</span>
						</p>
						<p>
							<Check className="mr-2 size-5 inline-block" />
							Is smoking allowed?{" "}
							<span className="text-black">No</span>
						</p>
					</div>
				</div>
				{/* <Separator className="my-4 md:my-6" /> */}
			</div>
			<div className="col-span-6 lg:col-span-3">
				<div className="sticky top-25 rounded-lg p-4 lg:p-8 border shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
					<h4 className="text-xl md:text-2xl font-medium">
						<NairaIcon />
						669,500{" "}
						<span className="text-muted-foreground text-sm">
							/ year
						</span>
					</h4>
					<div className="grid gap-6 text-sm md:text-base text-muted-foreground mt-4">
						<p className="flex items-center justify-between gap-4">
							<span>Rent</span>
							<span className="text-black">₦669,500 yearly</span>
						</p>
						<p className="flex items-center justify-between gap-4">
							<span>Security deposit</span>
							<span className="text-black">₦50,000</span>
						</p>
						<p className="flex items-center justify-between gap-4">
							<span>One-time Legal Fee</span>
							<span className="text-black">₦0</span>
						</p>
						<p className="flex items-center justify-between gap-4">
							<span>One-time Agency Fee</span>
							<span className="text-black">₦0</span>
						</p>
						<p className="flex items-center justify-between gap-4">
							<span>VAT</span>
							<span className="text-black">₦0</span>
						</p>
						<Separator />
						<p className="flex items-center justify-between gap-4">
							<span>Total</span>
							<span className="text-black">₦669,500</span>
						</p>
					</div>
					<div className="mt-4 space-y-2">
						<Button className="w-full" size="md">
							Login & Proceed
						</Button>
						<Button
							className="w-full"
							variant={"outline"}
							size="md"
							asChild
						>
							<Link href="/listings">
								Not what you're looking for? Click here
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
