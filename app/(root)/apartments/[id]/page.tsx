import { ListingDetails } from "@/components/ListingDetails";
import { ListingPhotos } from "@/components/ListingPhotos";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

const page = () => {
	return (
		<>
			<Header />
			<div className="relative pt-8 pb-16 mt-20">
				<div className="container">
					<h2 className="font-medium text-2xl md:text-3xl lg:text-4xl">
						Lekki
					</h2>
					<p className="text-sm lg:text-base text-muted-foreground mt-2">
						Like Lagos, Nigeria
					</p>
					<ListingPhotos
						photos={[
							{ src: "/assets/images/listing-1.jpg" },
							{ src: "/assets/images/listing-1.jpg" },
							{ src: "/assets/images/listing-1.jpg" },
							{ src: "/assets/images/listing-1.jpg" },
							{ src: "/assets/images/listing-1.jpg" },
							{ src: "/assets/images/listing-1.jpg" },
						]}
					/>
					<ListingDetails />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default page;
