import { Building, CalendarDays, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

interface Props {
	customers: any;
	spaces: any;
	bookings: any;
}

export const DashboardAnalytics = ({ spaces, customers, bookings }: Props) => {
	return (
		<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<DashboardBox
				title={"Total users"}
				titleIcon={Users}
				number={customers?.length}
				icon={TrendingUp}
				slug="/all-users"
			/>
			<DashboardBox
				title={"Total bookings"}
				titleIcon={CalendarDays}
				number={bookings.length}
				icon={TrendingUp}
				slug="/all-bookings"
			/>
			<DashboardBox
				title={"Total spaces"}
				titleIcon={Building}
				number={spaces?.length}
				icon={TrendingUp}
				slug="/all-spaces"
			/>
		</div>
	);
};

const DashboardBox = ({
	slug,
	icon,
	title,
	number,
	titleIcon,
}: {
	icon: any;
	titleIcon: any;
	title: string;
	number: any;
	slug: string;
}) => {
	const TitleIcon = titleIcon;
	const Icon = icon;
	return (
		<Link
			href={slug}
			className="p-4 md:p-6 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] cursor-pointer transition-all hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-[#F7F7F7]"
		>
			<div className="p-3 inline-block rounded-full border-2 border-primary">
				<TitleIcon className="size-6 text-primary" />
			</div>
			<div className="mt-4 flex items-end justify-between gap-4">
				<div>
					<p className="text-sm text-muted-foreground">{title}</p>
					<h4 className="font-semibold text-primary text-2xl lg:text-3xl">
						{number}
					</h4>
				</div>
				<p className="text-primary font-medium text-sm">
					<Icon className="size-5 inline-block mr-1" />
					{/* <span>5.2%</span> */}
				</p>
			</div>
		</Link>
	);
};
