import { Check, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const FindProperties = () => {
	return (
		<div className="container grid grid-cols-1 lg:grid-cols-5 gap-8 pt-6 pb-6">
			<div className="lg:col-span-2 flex flex-col items-start justify-center">
				<h4 className="font-medium text-base lg:text-lg text-green-400 mb-4">
					For Our Customers
				</h4>
				<h2 className="font-medium text-3xl md:text-4xl mb-4">
					Find Your Perfect Property, Your Way
				</h2>
				<p className="hidden lg:block text-base text-muted-foreground leading-relaxed mb-8">
					Discover the ideal building or space tailored to your
					preferences. With verified listings and flexible options, we
					help you find the perfect place to call home—whether you're
					renting or buying.
				</p>
				<Button size={"lg"} asChild>
					<Link href="/services">
						Contact us <MoveUpRight />
					</Link>
				</Button>
			</div>
			<div className="col-span-1 lg:col-span-3 relative flex items-center justify-center">
				<Image
					src={"/assets/images/home-building.png"}
					alt="Home building"
					width={1000}
					height={1000}
					className="w-auto h-auto rounded-3xl"
				/>
				<div className="bg-primary py-8 lg:py-12 px-6 lg:px-12 font-medium rounded-3xl inline-block absolute top-[50%] left-[40%] translate-x-[-40%] translate-y-[-50%]">
					<ul className="text-white text-sm lg:text-base space-y-6">
						<li>
							<Check className="inline-block size-5 mr-2" />
							The Best for Every Budget:
						</li>
						<li>
							<Image
								src={"/assets/icons/check.svg"}
								alt={"Check icon"}
								width={1000}
								height={1000}
								className="text-white inline-block w-4 h-4 mr-2 invert"
							/>
							Quality Work, Done Quickly
						</li>
						<li>
							<Image
								src={"/assets/icons/check.svg"}
								alt={"Check icon"}
								width={1000}
								height={1000}
								className="text-white inline-block w-4 h-4 mr-2 invert"
							/>
							Protected Payments, Every Time
						</li>
						<li>
							<Image
								src={"/assets/icons/check.svg"}
								alt={"Check icon"}
								width={1000}
								height={1000}
								className="text-white inline-block w-4 h-4 mr-2 invert"
							/>
							24/7 Support
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
