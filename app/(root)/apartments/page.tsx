import { PopularInAbuja } from "@/components/PopularInAbuja";
import { PopularInIbadan } from "@/components/PopularInIbadan";
import { PopularInLagos } from "@/components/PopularInLagos";
import { PopularInPortHarcourt } from "@/components/PopularInPortharcourt";
import { SearchSection } from "@/components/SearchSection";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Separator } from "@/components/ui/separator";

const page = () => {
	return (
		<div>
			<Header />
			<div className="mt-20">
				<SearchSection />
				<div className="container py-8 grid gap-4">
					<PopularInLagos />
					<Separator />
					<PopularInIbadan />
					<Separator />
					<PopularInAbuja />
					<Separator />
					<PopularInPortHarcourt />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default page;
