import {
	Mail,
	MapPin,
	Phone,
	Facebook,
	Instagram,
	Twitter,
	Wifi,
	Monitor,
	Presentation,
	FolderKanban,
	Coffee,
	QrCode,
	CircleUser,
	FolderClock,
	Settings,
	CircleHelp,
	Info,
	LayoutDashboard,
	HousePlus,
	House,
	Folder,
	Users,
	Car,
	CookingPot,
	Snowflake,
	Printer,
	Shield,
	Video,
	Lightbulb,
} from "lucide-react";
import * as Icons from "lucide-react";

export const navLinks = [
	{
		slug: "/about",
		label: "About us",
	},
	{
		slug: "/contact",
		label: "Contact us",
	},
	{
		slug: "/listings",
		label: "Our listings",
	},
];

export const homeStats = [
	{
		number: 20,
		suffix: "+",
		title: "Total houses",
	},
	{
		number: 50,
		suffix: "+",
		title: "listings",
	},
	{
		number: 3,
		suffix: "+",
		title: "Estates",
	},
	{
		number: 10,
		suffix: "+",
		title: "Completed projects",
	},
];

export const DEFAULT_LISTING_IMAGE =
	"https://res.cloudinary.com/dh0rc6p1c/image/upload/v1743769687/leadsage/rzhrdiqhnmzawuoyx6ri.jpg";

export const faqs = [
	{
		question: "How does Leadsage Africa work?",
		answer: "Leadsage Africa connects tenants with verified property listings and helps landlords manage their rentals. Simply search for properties, filter by location and price, and contact the property owner or agent directly.",
	},
	{
		question: "Are all property listings verified?",
		answer: "Yes, we prioritize transparency by verifying listings to ensure they are legitimate and accurately represented. Properties with a verification badge have been reviewed for authenticity.",
	},
	{
		question: "Can I list my property on Leadsage?",
		answer: "Absolutely! If you're a landlord or agent, you can create an account and list your property with details, images, and pricing. Our platform also provides tools to track inquiries and manage rent collection.",
	},
	{
		question: "Does Leadsage offer flexible payment plans?",
		answer: "Yes, some properties offer flexible payment options, including monthly, quarterly, and annual payment plans. You can use filters to find listings that match your preferred payment structure.",
	},
	{
		question: "Is it free to browse properties?",
		answer: "Yes! Browsing properties on Leadsage is completely free. You only pay when you decide to rent or buy a property through the platform.",
	},
	{
		question: "How can I contact customer support?",
		answer: "You can reach our support team via live chat, email, or phone. We’re available 24/7 to assist with any inquiries, disputes, or technical issues.",
	},
];

export const contactDetails = [
	{
		icon: MapPin,
		title: "Address",
		description:
			"51A, Agboola Ajumobi, Magodo GRA, Phase 1, Shangisha, Lagos State, Nigeria.",
	},
	{
		icon: Phone,
		title: "Phone",
		description: "(+234) 802 2425 763",
	},
	{
		icon: Mail,
		title: "Email",
		description: "hello@leadsage.com",
	},
];

export const socialLinks = [
	{
		title: "Facebook",
		icon: Facebook,
		slug: "facebook.com",
	},
	{
		title: "Twitter",
		icon: Twitter,
		slug: "twitter.com",
	},
	{
		title: "Instagram",
		icon: Instagram,
		slug: "instagram.com",
	},
	{
		title: "Linkedin",
		icon: Icons.Linkedin,
		slug: "linkedin.com",
	},
];

export const companies = [
	{
		logo: "/assets/icons/amazon.webp",
		name: "Amazon",
	},
	{
		logo: "/assets/icons/amd.webp",
		name: "AMD",
	},
	{
		logo: "/assets/icons/cisco.webp",
		name: "Cisco",
	},
	{
		logo: "/assets/icons/dropcam.webp",
		name: "Dropcam",
	},
	{
		logo: "/assets/icons/logitech.webp",
		name: "Logitech",
	},
	{
		logo: "/assets/icons/spotify.webp",
		name: "Spotify",
	},
];

export const footerLinks = [
	{
		title: "About",
		links: [
			{
				title: "Careers",
				slug: "/careers",
			},
			{
				title: "Press & News",
				slug: "/news",
			},
			{
				title: "Partnership",
				slug: "/partnership",
			},
			{
				title: "Privacy Policy",
				slug: "/privacy-policy",
			},
			{
				title: "Terms of Service",
				slug: "/terms-of-service",
			},
			{
				title: "Investor Relations",
				slug: "/investor-relations",
			},
		],
	},
	{
		title: "Categories",
		links: [
			{
				title: "listings/Flats",
				slug: "/listings",
			},
			{
				title: "Houses",
				slug: "/houses",
			},
			{
				title: "Villas",
				slug: "/villas",
			},
			{
				title: "Townhouses",
				slug: "/townhouses",
			},
			{
				title: "Shared Housing",
				slug: "/shared-housing",
			},
			{
				title: "Office Spaces",
				slug: "/office-spaces",
			},
			{
				title: "Retail Spaces",
				slug: "/retail-spaces",
			},
			{
				title: "Industrial properties",
				slug: "/industrial-properties",
			},
			{
				title: "Land",
				slug: "/land",
			},
		],
	},
	{
		title: "Support",
		links: [
			{
				title: "Help & Support",
				slug: "/help",
			},
			{
				title: "Trust & Safety",
				slug: "/trust-safety",
			},
			{
				title: "Here as a Landlord",
				slug: "/landlord",
			},
			{
				title: "Here as a tenant",
				slug: "/tenant",
			},
		],
	},
];

export const availableAmenities = [
	{
		icon: Icons.Wifi,
		name: "High speed wifi",
		iconName: "Wifi",
	},
	{
		icon: Icons.Snowflake,
		name: "Air conditioning",
		iconName: "Snowflake",
	},
	{
		icon: Icons.BatteryFull,
		name: "Power Backup",
		iconName: "BatteryFull",
	},
	{
		icon: Icons.Projector,
		name: "Projector",
		iconName: "Projector",
	},
	{
		icon: Icons.Presentation,
		name: "Whiteboard",
		iconName: "Presentation",
	},
	{
		icon: Icons.Tv,
		name: "TV / Screen",
		iconName: "Tv",
	},
	{
		icon: Icons.Printer,
		name: "Printer/Scanner",
		iconName: "Printer",
	},
	{
		icon: Icons.Laptop,
		name: "Laptop Station",
		iconName: "Laptop",
	},
	{
		icon: Icons.Phone,
		name: "Phone Booth",
		iconName: "Phone",
	},
	{
		icon: Icons.Coffee,
		name: "Coffee Machine",
		iconName: "Coffee",
	},
	{
		icon: Icons.GlassWater,
		name: "Water Dispenser",
		iconName: "GlassWater",
	},
	{
		icon: Icons.Hamburger,
		name: "Snack Bar",
		iconName: "Hamburger",
	},
	{
		icon: Icons.Refrigerator,
		name: "Mini Fridge",
		iconName: "Refrigerator",
	},
	{
		icon: Icons.Microwave,
		name: "Microwave",
		iconName: "Microwave",
	},
	{
		icon: Icons.Utensils,
		name: "Kitchen Access",
		iconName: "Utensils",
	},
	{
		icon: Icons.Toilet,
		name: "Restrooms",
		iconName: "Toilet",
	},
	{
		icon: Icons.ShowerHead,
		name: "Shower",
		iconName: "ShowerHead",
	},
	{
		icon: Icons.Car,
		name: "Parking Space",
		iconName: "Car",
	},
	{
		icon: Icons.Bike,
		name: "Bike Rack",
		iconName: "Bike",
	},
	{
		icon: Icons.Accessibility,
		name: "Wheelchair Access",
		iconName: "Accessibility",
	},
	{
		icon: Icons.Clock,
		name: "24/7 Access",
		iconName: "Clock",
	},
	{
		icon: Icons.Cctv,
		name: "CCTV",
		iconName: "Cctv",
	},
	{
		icon: Icons.Shield,
		name: "Security Guard",
		iconName: "Shield",
	},
	{
		icon: Icons.KeyRound,
		name: "Secure Entry",
		iconName: "KeyRound",
	},
	{
		icon: Icons.FireExtinguisher,
		name: "Fire Extinguisher",
		iconName: "FireExtinguisher",
	},
	{
		icon: Icons.Dumbbell,
		name: "Gym Access",
		iconName: "Dumbbell",
	},
	{
		icon: Icons.Gamepad2,
		name: "Game Room",
		iconName: "Gamepad2",
	},
	{
		icon: Icons.Sun,
		name: "Rooftop Access",
		iconName: "Sun",
	},
	{
		icon: Icons.TreeDeciduous,
		name: "Outdoor Seating",
		iconName: "TreeDeciduous",
	},
	{
		icon: Icons.Plug,
		name: "Extension Cords",
		iconName: "Plug",
	},
	{
		icon: Icons.Usb,
		name: "USB Charging",
		iconName: "Usb",
	},
	{
		icon: Icons.HdmiPort,
		name: "HDMI Cable",
		iconName: "HdmiPort",
	},
];

export const listings = [
	{
		_id: "1",
		images: [
			{ src: "/assets/images/listing-1.jpg" },
			{ src: "/assets/images/listing-1.jpg" },
			{ src: "/assets/images/listing-1.jpg" },
		],
		title: "2 bedroom flats",
		city: "Lekki",
		state: "Lagos",
	},
	{
		_id: "2",
		images: [
			{ src: "/assets/images/listing-1.jpg" },
			{ src: "/assets/images/listing-1.jpg" },
			{ src: "/assets/images/listing-1.jpg" },
		],
		title: "2 bedroom flats",
		city: "Lekki",
		state: "Lagos",
	},
	{
		_id: "3",
		images: [
			{ src: "/assets/images/listing-1.jpg" },
			{ src: "/assets/images/listing-1.jpg" },
			{ src: "/assets/images/listing-1.jpg" },
		],
		title: "2 bedroom flats",
		city: "Lekki",
		state: "Lagos",
	},
	{
		_id: "4",
		images: [
			{ src: "/assets/images/listing-1.jpg" },
			{ src: "/assets/images/listing-1.jpg" },
			{ src: "/assets/images/listing-1.jpg" },
		],
		title: "2 bedroom flats",
		city: "Lekki",
		state: "Lagos",
	},
];

export const DEFAULT_PROFILE_PICTURE =
	"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";

export const userNavLinks = [
	{
		icon: CircleUser,
		slug: "/profile",
		label: "Profile",
	},
	{
		icon: Info,
		slug: "/about",
		label: "About me",
	},
	{
		icon: FolderClock,
		slug: "/bookings",
		label: "Past bookings",
	},
	// {
	// 	icon: Settings,
	// 	slug: "/account-settings",
	// 	label: "Account settings",
	// },
	// {
	// 	icon: CircleHelp,
	// 	slug: "/help-center",
	// 	label: "Help center",
	// },
];

export const landlordNavLinks = [
	{
		slug: "/dashboard",
		label: "Dashboard",
	},
	{
		slug: "/all-listings",
		label: "listings",
	},
	{
		slug: "/all-bookings",
		label: "Bookings",
	},
	{
		slug: "/all-customers",
		label: "customers",
	},
];

export const landlordMobileLinks = [
	{
		slug: "/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard,
	},
	{
		slug: "/all-listings",
		label: "listings",
		icon: House,
	},
	{
		slug: "/all-bookings",
		label: "Bookings",
		icon: Folder,
	},
	{
		slug: "/all-listings/new",
		label: "Create a new listing",
		icon: HousePlus,
	},
	{
		slug: "/all-customers",
		label: "Customers",
		icon: Users,
	},
	// {
	// 	slug: "/account-settings",
	// 	label: "Account settings",
	// 	icon: Settings,
	// },
	{
		slug: "/profile",
		label: "Your profile",
		icon: CircleUser,
	},
];

export const newSpaceOverview = [
	{
		icon: "/assets/icons/house.svg",
		name: "House",
		title: "Tell us about your listing",
		description:
			"Share some basic info, like where it is and how many bedrooms and bathrooms are there.",
	},
	{
		icon: "/assets/icons/picture.svg",
		name: "picture",
		title: "Make it stand out",
		description:
			"Add 5 or more photos plus a title and description—we’ll help you out.",
	},
	{
		icon: "/assets/icons/publish.svg",
		name: "Check",
		title: "Finish up and publish",
		description:
			"Choose a starting price, verify a few details, then publish your listing.",
	},
];

export const nigerianStates = [
	"Abia",
	"Adamawa",
	"Akwa Ibom",
	"Anambra",
	"Bauchi",
	"Bayelsa",
	"Benue",
	"Borno",
	"Cross River",
	"Delta",
	"Ebonyi",
	"Edo",
	"Ekiti",
	"Enugu",
	"Gombe",
	"Imo",
	"Jigawa",
	"Kaduna",
	"Kano",
	"Katsina",
	"Kebbi",
	"Kogi",
	"Kwara",
	"Lagos",
	"Nasarawa",
	"Niger",
	"Ogun",
	"Ondo",
	"Osun",
	"Oyo",
	"Plateau",
	"Rivers",
	"Sokoto",
	"Taraba",
	"Yobe",
	"Zamfara",
	"FCT (Abuja)",
] as const;

export const wholeCountries = ["nigeria"] as const;
