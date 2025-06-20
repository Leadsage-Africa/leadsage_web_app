"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Search } from "lucide-react";
// import { PricingDropdown } from "@/app/(root)/(home)/components/PricingDropdown";
// import { BedroomDropdown } from "@/app/(root)/(home)/components/BedroomDropdown";
import { Separator } from "../ui/separator";

const FormSchema = z.object({
	keyword: z.string().min(2, {
		message: "Search must be at least 2 characters.",
	}),
	category: z.string().min(2, {
		message: "Category must be at least 2 characters.",
	}),
});

export function ShowcaseSearchForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			keyword: "",
			category: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		// toast({
		// 	title: "You submitted the following values:",
		// 	description: (
		// 		<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
		// 			<code className="text-white">
		// 				{JSON.stringify(data, null, 2)}
		// 			</code>
		// 		</pre>
		// 	),
		// });
	}

	return (
		<div className="bg-white text-black rounded-sm md:rounded-full pl-6 pr-2 py-1 mt-8">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-4"
				>
					<FormField
						control={form.control}
						name="keyword"
						render={({ field }) => (
							<FormItem className="flex-1 w-full">
								<FormControl>
									<div className="relative">
										<Input
											placeholder="What are you looking for?"
											{...field}
											className="pl-0 md:pl-7 border-none"
										/>
										<Search className="hidden md:flex absolute text-gray-400 top-[50%] left-[0%] translate-y-[-50%]" />
										<Button
											className="absolute md:hidden top-[50%] right-[2%] translate-y-[-50%]"
											size={"icon"}
											type="submit"
										>
											<Search />
										</Button>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Separator className="mb-2 md:hidden" />
					<div className="w-full flex-1 flex items-center justify-between md:justify-end pb-4 md:pb-0">
						<div className="md:border-l w-full items-center justify-center">
							{/* <PricingDropdown /> */}
						</div>
						<div className="border-l w-full items-center justify-center">
							{/* <BedroomDropdown /> */}
						</div>
						<div className="md:hidden border-l pl-4 flex items-center justify-center">
							<Button className="rounded-md">Save search</Button>
						</div>
					</div>
					{/* <FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem className="md:flex-1 md:border-l md:pl-8 w-full">
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger className="border-none">
											<SelectValue placeholder="Choose Category" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{categories.map((category, index) => (
											<SelectItem
												key={index}
												value={category.title}
											>
												{category.title}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/> */}
					<Button
						className="hidden md:flex"
						size={"icon"}
						type="submit"
					>
						<Search />
					</Button>
				</form>
			</Form>
		</div>
	);
}
