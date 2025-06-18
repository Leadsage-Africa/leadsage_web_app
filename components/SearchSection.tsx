import { SearchBar } from "./forms/SearchBar";
import { Separator } from "./ui/separator";
import { PricingRange } from "./forms/PricingRange";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export const SearchSection = () => {
	return (
		<div className="py-8 border-b bg-[#FBFBFB]">
			<div className="container">
				<div className="max-w-2xl rounded-2xl md:rounded-full py-4 px-2 md:px-4 flex flex-col md:flex-row items-center justify-center bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-2 mx-auto relative ">
					<div className="grid w-full md:border-r">
						<small className="font-medium text-muted-foreground pl-3">
							Location
						</small>
						<SearchBar
							placeholder="Search by location, type..."
							showIcons={false}
						/>
					</div>
					<Separator className="my-4 md:hidden" />
					<div className="grid w-full">
						<small className="font-medium text-muted-foreground pl-3">
							Price
						</small>
						<PricingRange />
					</div>
					<Button
						size="icon"
						className="bg-primary rounded-full w-full h-12 mt-2 md:mt-0 md:size-12"
					>
						<Search className="size-5 text-white" />
					</Button>
				</div>
			</div>
		</div>
	);
};
