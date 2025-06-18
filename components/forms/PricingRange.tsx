"use client";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "../ui/input";
import { formatMoneyInput, handleKeyDown, removeCommas } from "@/lib/utils";
import {
	useRouter,
	//  useSearchParams
} from "next/navigation";
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { NairaIcon } from "../shared/NairaIcon";

export function PricingRange() {
	// const searchParams = useSearchParams();
	const router = useRouter();

	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");

	const [debouncedMin, setDebouncedMin] = useState("");
	const [debouncedMax, setDebouncedMax] = useState("");

	const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
		let inputValue = e.target.value;

		// If the input starts with a "0" and is followed by another number, remove the "0"
		if (
			inputValue.startsWith("0") &&
			inputValue.length > 1 &&
			inputValue[1] !== "."
		) {
			inputValue = inputValue.slice(1);
		}

		// Prevent the input from starting with a period
		if (inputValue.startsWith(".")) {
			return;
		}

		inputValue = inputValue.replace(/[^0-9.]/g, "");
		const parts = inputValue.split(".");
		if (parts.length > 2) {
			inputValue = parts.shift() + "." + parts.join("");
		}
		if (parts[1]) {
			parts[1] = parts[1].substring(0, 2);
			inputValue = parts.join(".");
		}

		if (/^[0-9,]*\.?[0-9]*$/.test(inputValue)) {
			const formattedValue = formatMoneyInput(inputValue);
			setMaxPrice(formattedValue);
		}
	};

	const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
		let inputValue = e.target.value;

		// If the input starts with a "0" and is followed by another number, remove the "0"
		if (
			inputValue.startsWith("0") &&
			inputValue.length > 1 &&
			inputValue[1] !== "."
		) {
			inputValue = inputValue.slice(1);
		}

		// Prevent the input from starting with a period
		if (inputValue.startsWith(".")) {
			return;
		}

		inputValue = inputValue.replace(/[^0-9.]/g, "");
		const parts = inputValue.split(".");
		if (parts.length > 2) {
			inputValue = parts.shift() + "." + parts.join("");
		}
		if (parts[1]) {
			parts[1] = parts[1].substring(0, 2);
			inputValue = parts.join(".");
		}

		if (/^[0-9,]*\.?[0-9]*$/.test(inputValue)) {
			const formattedValue = formatMoneyInput(inputValue);
			setMinPrice(formattedValue);
		}
	};

	// Debounce
	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedMin(removeCommas(minPrice));
			setDebouncedMax(removeCommas(maxPrice));
		}, 3000);

		return () => clearTimeout(timeout);
	}, [minPrice, maxPrice]);

	// Update URL and trigger fetch
	useEffect(() => {
		// const params = new URLSearchParams(searchParams.toString());

		if (debouncedMin) {
			// params.set("minPrice", debouncedMin);
		} else {
			// params.delete("minPrice");
		}

		if (debouncedMax) {
			// params.set("maxPrice", debouncedMax);
		} else {
			// params.delete("maxPrice");
		}

		// This updates the URL, but doesn't trigger a server fetch in app dir
		// router.push(`?${params.toString()}`);
		// router.replace(`${window.location.pathname}?${params.toString()}`, {
		// scroll: false,
		// });
	}, [debouncedMin, debouncedMax]);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<p className="px-3 py-1 text-base md:text-sm cursor-pointer text-muted-foreground">
					Choose a price range
				</p>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-[300px] p-4 mt-4" align="start">
				<div className="grid gap-3">
					<div className="space-y-2">
						<Label>From</Label>
						<div className="relative">
							<Input
								onKeyDown={handleKeyDown}
								value={minPrice}
								onChange={(e) => handleMinPrice(e)}
								placeholder="0"
								className="pl-6"
							/>
							<div className="absolute top-[50%] translate-y-[-50%] translate-x-[-3%] left-[3%]">
								<NairaIcon />
							</div>
						</div>
					</div>
					<div className="space-y-2">
						<Label>To</Label>
						<div className="relative">
							<Input
								onKeyDown={handleKeyDown}
								value={maxPrice}
								onChange={(e) => handleMaxPrice(e)}
								placeholder="0"
								className="pl-6"
							/>
							<div className="absolute top-[50%] translate-y-[-50%] translate-x-[-3%] left-[3%]">
								<NairaIcon />
							</div>
						</div>
					</div>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
