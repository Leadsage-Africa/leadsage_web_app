declare interface UrlQueryParams {
	params: string;
	key: string;
	value: string | null;
}

declare interface RemoveUrlQueryParams {
	params: string;
	keysToRemove: string[];
}

declare interface CreateUserParams {
	clerkId: string;
	firstName: string | null;
	lastName: string | null;
	email: string;
	picture: string;
}

declare interface UpdateProfilePictureParams {
	picture: string;
	pictureId: string;
	userId: string;
}

declare interface UpdateProfileParams {
	userId: string;
	firstName?: string;
	lastName?: string;
	address?: string;
	city?: string;
	state?: string;
	country?: string;
	occupation?: string;
	company?: string;
	phoneNumber?: string;
	bio?: string;
}

declare interface GetListingsParams {
	query?: string;
	limit?: number;
	page?: string;
	userId: string;
}

declare interface GetListingDetailsParams {
	listingId: string;
	userId: string;
}

declare interface CreateNewListingParams {
	category: string;
	userId: string;
}

declare interface AddListingLocationParams {
	listingId: string;
	userId: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
}

declare interface AddListingAmenitiesParams {
	listingId: string;
	userId: string;
	amenities: {
		name: string;
		icon: any;
		iconName: any;
	}[];
}

declare interface AddListingPhotosParams {
	userId: string;
	listingId: string;
	uploadedImages: any;
}

declare interface DeleteListingPhotoParams {
	userId: string;
	listingId: string;
	imageId: string;
}

declare interface UpdateListingCoverPhotoParams {
	userId: string;
	listingId: string;
	imageId: string;
}

declare interface AddListingTitleParams {
	userId: string;
	listingId: string;
	title: string;
}

declare interface AddListingDescriptionParams {
	userId: string;
	listingId: string;
	description: string;
}

declare interface AddListingRentParams {
	userId: string;
	listingId: string;
	rent: string;
	securityDeposit?: string;
	rentNegotiable?: boolean;
}

declare interface UpdateListingCategoryParams {
	userId: string;
	listingId: string;
	category: any;
}

declare interface DeleteListingAmenityParams {
	userId: string;
	listingId: string;
	amenityId: string;
}

declare interface GetTopListings {
	userId: string;
}

declare interface RemoveListingParams {
	userId: string;
	listingId: string;
}

declare interface UpdateVisibilityParams {
	userId: string;
	listingId: string;
	status: string;
}
