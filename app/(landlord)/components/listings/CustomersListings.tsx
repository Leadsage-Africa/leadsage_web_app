"use client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { DEFAULT_PROFILE_PICTURE } from "@/constants";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const CustomersListings = ({ customers = [] }: { customers: any }) => {
	const router = useRouter();
	return (
		<div>
			<div className="md:hidden">
				{customers.map((customer: any, index: string) => (
					<Link
						key={index}
						href={`/all-users/${customer._id}`}
						className="hover:bg-[#F7F7F7] transition-all p-2 rounded-lg flex items-center justify-start gap-4 group cursor-pointer"
					>
						<Image
							src={customer.picture || DEFAULT_PROFILE_PICTURE}
							alt={`${customer.firstName}'s picture`}
							width={1000}
							height={1000}
							className="size-[70px] object-cover rounded-full"
						/>
						<div className="flex-1 flex items-center justify-between gap-2">
							<div className="flex-1">
								<h5 className="text-base font-medium line-clamp-1">
									{customer.firstName} {customer.lastName}
								</h5>
								<p className="text-sm text-muted-foreground">
									{customer.email}
								</p>
							</div>
							<Button variant={"ghost"} size="icon">
								<ChevronRight className="size-6 opacity-0 group-hover:opacity-100 transition-all" />
							</Button>
						</div>
					</Link>
				))}
			</div>
			<div className="hidden md:block">
				<Table>
					<TableHeader>
						<TableRow className="hover:bg-transparent">
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Phone number</TableHead>
							<TableHead></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{customers.map((customer: any, index: string) => (
							<TableRow
								onClick={() =>
									router.push(`/all-users/${customer._id}`)
								}
								className="group"
								key={index}
							>
								<TableCell className="flex items-center justify-start gap-4">
									<Image
										src={
											customer.picture ||
											DEFAULT_PROFILE_PICTURE
										}
										alt={`${customer.firstName}'s picture`}
										width={1000}
										height={1000}
										className="size-[70px] object-cover rounded-full"
									/>
									<h5 className="font-medium text-base">
										{customer.firstName} {customer.lastName}
									</h5>
								</TableCell>
								<TableCell>{customer.email}</TableCell>
								<TableCell>
									{customer.phoneNumber ? (
										customer.phoneNumber
									) : (
										<p className="italic">
											No phone number
										</p>
									)}
								</TableCell>
								<TableCell>
									<div className="flex items-center justify-end">
										<Button variant={"ghost"} size="icon">
											<ChevronRight className="size-6 opacity-0 group-hover:opacity-100 transition-all" />
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};
