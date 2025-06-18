import { FindProperties } from "@/components/FindProperties";
import { PopularProperties } from "@/components/PopularProperties";
import { Footer } from "@/components/shared/Footer";
import { PartneringCompanies } from "@/components/shared/PartneringCompanies";
import { Showcase } from "@/components/shared/Showcase";

const page = () => {
	return (
		<div>
			<Showcase />
			<PopularProperties />
			<FindProperties />
			<PartneringCompanies />
			<Footer />
		</div>
	);
};

export default page;
