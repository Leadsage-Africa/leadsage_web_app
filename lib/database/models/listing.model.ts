import { Document, Schema, model, models, Types, Model } from "mongoose";

export interface IPhotos {
	src?: string;
	imageId?: string;
	cover?: boolean;
}

export interface IAmenity {
	name?: string;
	icon?: string;
}

export interface ITouringDate {
	date?: string;
}

export interface IListing extends Document {
	user: Types.ObjectId;
	title: string;
	category?: Types.ObjectId;
	rent?: string;
	securityDeposit?: string;
	rentNegotiable?: boolean;
	availabilityDate?: string;
	address?: string;
	city?: string;
	state?: string;
	zipCode?: string;
	country?: string;
	status?: string;
	isPublished?: boolean;
	photos?: IPhotos[];
	description?: string;
	bedrooms?: string;
	bathrooms?: string;
	listedBy?: string;
	squareMeters?: string;
	amenities?: IAmenity[];
	petPolicy?: boolean;
	smokingPolicy?: boolean;
	touringDate?: ITouringDate[];
	createdAt: Date;
	updatedAt: Date;
}

const PhotoSchema = new Schema<IPhotos>({
	src: { type: String },
	imageId: { type: String },
	cover: {
		type: Boolean,
	},
});

const AmenitiesSchema = new Schema<IAmenity>({
	name: {
		type: String,
	},
	icon: {
		type: String,
	},
});

const TouringDateSchema = new Schema<ITouringDate>({
	date: { type: String, required: true },
});

// ---------- Main Schema ---------- //

const ListingSchema = new Schema<IListing>(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: "Category",
		},
		title: {
			type: String,
			required: true,
		},
		address: {
			type: String,
		},
		city: {
			type: String,
		},
		state: {
			type: String,
		},
		zipCode: {
			type: String,
		},
		country: {
			type: String,
		},
		squareMeters: {
			type: String,
		},
		availabilityDate: {
			type: String,
		},
		description: {
			type: String,
		},
		bedrooms: {
			type: String,
		},
		bathrooms: {
			type: String,
		},
		amenities: {
			type: [AmenitiesSchema],
			default: [],
		},
		petPolicy: {
			type: Boolean,
			default: false,
		},
		smokingPolicy: {
			type: Boolean,
			default: false,
		},
		rent: {
			type: String,
		},
		rentNegotiable: {
			type: Boolean,
		},
		securityDeposit: {
			type: String,
		},
		touringDate: {
			type: [TouringDateSchema],
			default: [],
		},
		listedBy: {
			type: String,
		},
		status: {
			type: String,
			default: "pending",
		},
		isPublished: {
			type: Boolean,
			default: false,
		},
		photos: {
			type: [PhotoSchema],
			default: [],
		},
	},
	{ timestamps: true }
);

// ---------- Model ---------- //

const Listing: Model<IListing> =
	models.Listing || model<IListing>("Listing", ListingSchema);
export default Listing;
