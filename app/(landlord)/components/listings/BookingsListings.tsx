"use client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { NairaIcon } from "@/components/shared/NairaIcon";
import { Button } from "@/components/ui/button";
import { DEFAULT_LISTING_IMAGE } from "@/constants";
import { formatMoneyInput } from "@/lib/utils";
import { CheckCircleIcon, ChevronRight, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export const BookingsListings = ({ bookings = [] }: { bookings: any }) => {
	const router = useRouter();
	return (
		<div>
			<div className="md:hidden">
				{bookings?.map((booking: any, index: any) => {
					const coverPhoto =
						// @ts-ignore
						booking.space?.photos.find((photo) => photo.cover) ||
						// @ts-ignore
						booking.space?.photos[0];
					return (
						<Link
							key={index}
							href={`/all-bookings/${booking._id}`}
							className="hover:bg-[#F7F7F7] transition-all p-2 rounded-lg flex items-center justify-start gap-4 group cursor-pointer relative"
						>
							<Image
								src={coverPhoto?.src || DEFAULT_LISTING_IMAGE}
								alt={booking?.listing?.title || "listing image"}
								width={1000}
								height={1000}
								className="size-[70px] object-cover rounded-lg"
							/>
							<div className="flex-1 flex items-center justify-between gap-2">
								<div className="flex-1">
									<h5 className="text-base font-medium line-clamp-1">
										{booking?.bookingId}
									</h5>
									<p className="text-sm text-muted-foreground">
										{booking?.space?.title}
									</p>
								</div>
								<Button variant={"ghost"} size="icon">
									<ChevronRight className="size-6 opacity-0 group-hover:opacity-100 transition-all" />
								</Button>
							</div>
							<div className="absolute top-3 left-3 flex items-center justify-start gap-2">
								<Badge
									variant={
										booking?.paymentStatus === "paid"
											? "success"
											: booking.paymentStatus === "failed"
											? "destructive"
											: "default"
									}
									className="capitalize px-1 py-1 rounded-full"
								/>
								<Badge
									variant={
										booking?.bookingStatus === "confirmed"
											? "success"
											: booking?.bookingStatus ===
											  "cancelled"
											? "destructive"
											: booking?.bookingStatus ===
											  "pending"
											? "warning"
											: "default"
									}
									className="capitalize px-1 py-1 rounded-full"
								/>
							</div>
						</Link>
					);
				})}
			</div>
			<div className="hidden md:block">
				<Table>
					<TableHeader>
						<TableRow className="hover:bg-transparent">
							<TableHead>Booking ID</TableHead>
							<TableHead>Customer</TableHead>
							<TableHead>Space</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Amount</TableHead>
							<TableHead></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{bookings.map((booking: any, index: any) => (
							<TableRow
								className="group h-[86px]"
								key={index}
								onClick={() =>
									router.push(`/all-bookings/${booking._id}`)
								}
							>
								<TableCell>{booking?.bookingId}</TableCell>
								<TableCell>
									{booking?.user?.firstName ? (
										booking?.user?.firstName
									) : (
										<p className="italic">
											Deleted customer
										</p>
									)}{" "}
									{booking?.user?.lastName}
								</TableCell>
								<TableCell>{booking?.space?.title}</TableCell>
								<TableCell>
									{booking?.startDate} - {booking?.endDate}{" "}
									{booking?.bookingType === "hourly" &&
										`(${booking.noOfHours} ${
											booking.noOfHours === "1"
												? "hour"
												: "hours"
										})`}
									{booking.bookingType === "daily" &&
										`(${booking.noOfDays} ${
											booking.noOfDays === "1"
												? "day"
												: "days"
										})`}
									{booking.bookingType === "weekly" &&
										`(${booking?.noOfWeeks} ${
											booking?.noOfWeeks === "1"
												? "week"
												: "weeks"
										})`}
									{booking.bookingType === "monthly" &&
										`(${booking?.noOfMonths} ${
											booking?.noOfMonths === "1"
												? "month"
												: "months"
										})`}
								</TableCell>
								<TableCell>
									<div className="flex flex-col items-start capitalize justify-start h-full gap-2">
										<Badge
											variant={
												booking?.paymentStatus ===
												"paid"
													? "success"
													: booking.paymentStatus ===
													  "failed"
													? "destructive"
													: "default"
											}
										>
											<CreditCard className="size-4 inline-block mr-2" />
											{booking?.paymentStatus}
										</Badge>
										<Badge
											variant={
												booking?.bookingStatus ===
												"confirmed"
													? "success"
													: booking?.bookingStatus ===
													  "cancelled"
													? "destructive"
													: booking?.bookingStatus ===
													  "pending"
													? "warning"
													: "default"
											}
										>
											<CheckCircleIcon className="size-4 inline-block mr-2" />
											{booking?.bookingStatus}
										</Badge>
									</div>
								</TableCell>
								<TableCell>
									<NairaIcon />
									{formatMoneyInput(booking?.totalAmount)}
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
