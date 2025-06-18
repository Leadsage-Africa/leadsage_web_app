"use server";

import { connectToDatabase } from "@/lib/database";
import Listing from "@/lib/database/models/listing.model";
import User from "@/lib/database/models/user.model";
import { handleError } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all the listings
export const getListings = async ({
	userId,
	page,
	query,
	limit = 0,
}: GetListingsParams) => {
	try {
		await connectToDatabase();

		// Safely parse page and limit
		const parsedPage = Number(page);
		const validPage = !isNaN(parsedPage) && parsedPage > 0 ? parsedPage : 1;

		const validLimit = typeof limit === "number" && limit > 0 ? limit : 0;

		const skipAmount = validLimit > 0 ? (validPage - 1) * validLimit : 0;

		const keyword = query
			? {
					$or: [
						{ title: { $regex: query, $options: "i" } },
						{ status: { $regex: query, $options: "i" } },
						{ description: { $regex: query, $options: "i" } },
						{ rent: { $regex: query, $options: "i" } },
						{ address: { $regex: query, $options: "i" } },
						{ city: { $regex: query, $options: "i" } },
						{ zipCode: { $regex: query, $options: "i" } },
						{ state: { $regex: query, $options: "i" } },
						{ country: { $regex: query, $options: "i" } },
						{ listedBy: { $regex: query, $options: "i" } },
						{ securityDeposit: { $regex: query, $options: "i" } },
						{ rentNegotiable: { $regex: query, $options: "i" } },
						{ bathrooms: { $regex: query, $options: "i" } },
						{ bedrooms: { $regex: query, $options: "i" } },
						{ squareMeters: { $regex: query, $options: "i" } },
					],
			  }
			: {};

		if (!userId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listings = await Listing.find({ ...keyword, user: userId })
			.sort({ createdAt: -1 })
			.skip(skipAmount)
			.limit(limit)
			.populate("category");

		const listingsCount = await Listing.countDocuments({
			...keyword,
			user: userId,
		});

		return {
			status: 200,
			message: "Success",
			listings: JSON.parse(JSON.stringify(listings)),
			totalPages: Math.ceil(listingsCount / limit),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

// Get listing details
export const getListingDetails = async ({
	listingId,
	userId,
}: GetListingDetailsParams) => {
	try {
		await connectToDatabase();

		if (!listingId || !userId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findOne({
			_id: listingId,
			user: userId,
		}).populate("category");

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		return {
			status: 201,
			message: "Successful",
			listing: JSON.parse(JSON.stringify(listing)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

// Create a new listing by admin
export const createNewListing = async ({
	category,
	userId,
}: CreateNewListingParams) => {
	try {
		await connectToDatabase();

		if (!category || !userId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const newListing = await Listing.create({
			category,
			user: userId,
			status: "draft",
		});

		if (!newListing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		return {
			status: 201,
			message: "Successful",
			listing: JSON.parse(JSON.stringify(newListing)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

// Update listing locations
export const addListingLocation = async ({
	userId,
	listingId,
	address,
	city,
	zipCode,
	state,
	country,
}: AddListingLocationParams) => {
	try {
		await connectToDatabase();

		if (
			!listingId ||
			!userId ||
			!address ||
			!city ||
			!zipCode ||
			!state ||
			!country
		)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findOne({ _id: listingId, user: userId });

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		listing.address = address || listing.address;
		listing.city = city || listing.city;
		listing.state = state || listing.state;
		listing.country = country || listing.country;
		listing.zipCode = zipCode || listing.zipCode;

		const updatedListing = await listing.save();

		if (!updatedListing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		revalidatePath(`/all-listings/${listing._id}`);

		return {
			status: 201,
			message: "Successful",
			listing: JSON.parse(JSON.stringify(updatedListing)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

// Update listing amenities
export const addListingAmenities = async ({
	userId,
	listingId,
	amenities,
}: AddListingAmenitiesParams) => {
	try {
		await connectToDatabase();

		if (!listingId || !userId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		if (amenities.length === 0)
			return {
				status: 400,
				message: "Oops! Select at least one amenity",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findOne({ _id: listingId, user: userId });

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		// Merge existing and new amenities, avoiding duplicates
		const existingAmenityNames = listing?.amenities?.map(
			(a: any) => a.name
		);
		const filteredNewAmenities = amenities.filter(
			(a: any) => !existingAmenityNames.includes(a.name)
		);

		listing.amenities = [...listing?.amenities, ...filteredNewAmenities];

		const updatedListing = await listing.save();

		if (!updatedListing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};
		revalidatePath(`/all-listings/new/${listing._id}`);
		return {
			status: 201,
			message: "Successful",
			listing: JSON.parse(JSON.stringify(updatedListing)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

export const addListingPhotos = async ({
	userId,
	listingId,
	uploadedImages,
}: AddListingPhotosParams) => {
	try {
		await connectToDatabase();

		if (!listingId || !userId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		if (uploadedImages?.length === 0)
			return {
				status: 400,
				message: "Oops! Upload at least one photo",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findOne({ _id: listingId, user: userId });

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		listing.photos = Array.isArray(listing.photos) ? listing.photos : [];
		listing.photos = [...uploadedImages, ...listing.photos];

		const updatedListing = await listing.save();

		if (!updatedListing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		revalidatePath(`/all-listings/new/${listing._id}/photos`);

		return {
			status: 201,
			message: "Successful",
			listing: JSON.parse(JSON.stringify(updatedListing)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

export const deleteListingPhoto = async ({
	userId,
	listingId,
	imageId,
}: DeleteListingPhotoParams) => {
	try {
		await connectToDatabase();

		if (!listingId || !userId || !imageId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findOne({ _id: listingId, user: userId });

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		await cloudinary.uploader.destroy(imageId, {});

		const oldPhoto = listing?.photos?.find(
			(photo: any) => photo?.imageId.toString() === imageId
		);

		if (!oldPhoto) {
			return {
				status: 400,
				message: "Image not found in the listing.",
			};
		}

		const deletedPhoto = await Listing.findByIdAndUpdate(
			listingId,
			{ $pull: { photos: { imageId: oldPhoto.imageId } } },
			{ new: true }
		);

		if (oldPhoto.cover === true) {
			const updatedListing = await Listing.findById(listingId);
			if (updatedListing && updatedListing?.photos?.length > 0) {
				// Set the first remaining photo as cover
				updatedListing?.photos[0]?.cover = true;
				await updatedListing.save();
			}

			if (updatedListing?.photos.length === 0) {
				updatedListing.status = "draft";

				await updatedListing.save();
			}
		}

		if (!deletedPhoto)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		if (deletedPhoto?.photos?.length === 0) {
			deletedPhoto?.status = "draft";

			await deletedPhoto.save();
		}

		revalidatePath(`/all-listings/new/${listing._id}/photos`);

		return { status: 200, message: "Successful" };
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

export const updateListingCoverPhoto = async ({
	userId,
	listingId,
	imageId,
}: UpdateListingCoverPhotoParams) => {
	try {
		await connectToDatabase();

		if (!listingId || !userId || !imageId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findOne({ _id: listingId, user: userId });

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};
		// Step 1: Set all photos' cover to false
		listing?.photos.forEach((photo: any) => {
			photo.cover = false;
		});

		// Step 2: Set the selected image's cover to true
		const selectedPhoto = listing?.photos.find(
			(photo: any) => photo?.imageId.toString() === imageId
		);

		if (!selectedPhoto) {
			return {
				status: 400,
				message: "Selected photo not found.",
			};
		}

		selectedPhoto.cover = true;

		await listing.save();

		revalidatePath(`/all-listings/new/${listing._id}/photos`);

		return { status: 200, message: "Cover photo updated successfully." };
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

// Update listing locations
export const addListingTitle = async ({
	userId,
	listingId,
	title,
}: AddListingTitleParams) => {
	try {
		await connectToDatabase();

		if (!listingId || !userId || !title)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findById(listingId);

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		listing.title = title || listing.title;

		const updatedListing = await listing.save();

		if (!updatedListing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		revalidatePath(`/all-listings/${listing._id}`);

		return {
			status: 201,
			message: "Title successfully added.",
			listing: JSON.parse(JSON.stringify(updatedListing)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

// Update listing description
export const addListingDescription = async ({
	userId,
	listingId,
	description,
}: AddListingDescriptionParams) => {
	try {
		await connectToDatabase();

		if (!listingId || !userId || !description)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findById(listingId);

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		listing.description = description || listing.description;

		const updatedListing = await listing.save();

		if (!updatedListing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		revalidatePath(`/all-listings/${listing._id}`);

		return {
			status: 201,
			message: "Description successfully added.",
			listing: JSON.parse(JSON.stringify(updatedListing)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

// Update listing rent
export const addListingRent = async ({
	userId,
	listingId,
	rent,
	rentNegotiable,
	securityDeposit,
}: AddListingRentParams) => {
	try {
		await connectToDatabase();

		if (!listingId || !userId || !rent)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findById(listingId);

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		listing.rent = rent || listing.rent;
		listing.securityDeposit = securityDeposit || listing.securityDeposit;
		listing.rentNegotiable = rentNegotiable || listing.rentNegotiable;

		const updatedListing = await listing.save();

		if (!updatedListing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		revalidatePath(`/all-listings/${listing._id}`);

		return {
			status: 201,
			message: "Rent successfully added.",
			listing: JSON.parse(JSON.stringify(updatedListing)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

// Update listing category
export const updateListingCategory = async ({
	userId,
	listingId,
	category,
}: UpdateListingCategoryParams) => {
	try {
		await connectToDatabase();

		if (!listingId || !userId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findOne({ _id: listingId, user: userId });

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		listing.category = category || listing.category;

		const updatedListing = await listing.save();

		if (!updatedListing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};
		revalidatePath(`/all-listings/${listing._id}`);
		return {
			status: 201,
			message: "Category successfully updated.",
			listing: JSON.parse(JSON.stringify(updatedListing)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

// Delete listing amenity
export const deleteListingAmenity = async ({
	userId,
	listingId,
	amenityId,
}: DeleteListingAmenityParams) => {
	try {
		await connectToDatabase();

		if (!listingId || !userId || !amenityId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findOne({ _id: listingId, user: userId });

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};

		// Pull the amenity from the listing's amenities array
		const updatedListing = await Listing.updateOne(
			{ _id: listingId },
			{ $pull: { amenities: { _id: amenityId } } }
		);

		if (!updatedListing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};
		revalidatePath(`/all-listings/${listing._id}`);
		return {
			status: 201,
			message: "Amenity successfully removed.",
			listing: JSON.parse(JSON.stringify(updatedListing)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

export const getTopListings = async ({ userId }: GetTopListings) => {
	try {
		await connectToDatabase();

		if (!userId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		// Aggregate bookings to find top booked listings
		// const topBooked = await Booking.aggregate([
		// 	{
		// 		$group: {
		// 			_id: "$listing",
		// 			bookingsCount: { $sum: 1 },
		// 		},
		// 	},
		// 	{
		// 		$sort: { bookingsCount: -1 }, // descending
		// 	},
		// 	{
		// 		$limit: 5, // top 10
		// 	},
		// 	{
		// 		$lookup: {
		// 			from: "listings",
		// 			localField: "_id",
		// 			foreignField: "_id",
		// 			as: "listingDetails",
		// 		},
		// 	},
		// 	{
		// 		$unwind: "$listingDetails",
		// 	},
		// 	{
		// 		$project: {
		// 			_id: 0,
		// 			listingId: "$_id",
		// 			bookingsCount: 1,
		// 			title: "$listingDetails.title",
		// 			address: "$listingDetails.address",
		// 			photos: "$listingDetails.photos",
		// 			city: "$listingDetails.city",
		// 			country: "$listingDetails.country",
		// 		},
		// 	},
		// ]);

		return {
			status: 200,
			message: "Success",
			// listings: JSON.parse(JSON.stringify(topBooked)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

export const removeListing = async ({
	userId,
	listingId,
}: RemoveListingParams) => {
	try {
		await connectToDatabase();

		if (!userId || !listingId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const deletedListing = await Listing.findByIdAndDelete(listingId);

		if (!deletedListing)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		revalidatePath("/all-listings");
		revalidatePath("/dashboard");

		return { status: 200, message: "Successfully deleted listing" };
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};

export const updateVisibility = async ({
	userId,
	listingId,
	status,
}: UpdateVisibilityParams) => {
	try {
		await connectToDatabase();

		if (!userId || !listingId)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later",
			};

		const user = await User.findById(userId);

		if (!user || !user?.isLandlord)
			return {
				status: 400,
				message: "Oops! You are not authorized to make this request.",
			};

		const listing = await Listing.findOne({ _id: listingId, user: userId });

		if (!listing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};
		// Check all necessary fields if activating the listing
		if (status === "active") {
			const validations = [
				{
					valid: !!listing.title,
					message:
						"Title is required before the listing can be active",
				},
				{
					valid: !!listing.description,
					message:
						"Description is required before the listing can be active",
				},
				{
					valid: !!listing.address,
					message:
						"Address is required before the listing can be active",
				},
				{
					valid: !!listing.city,
					message:
						"City is required before the listing can be active",
				},
				{
					valid: !!listing.state,
					message:
						"State is required before the listing can be active",
				},
				{
					valid: !!listing.country,
					message:
						"Country is required before the listing can be active",
				},
				{
					valid: !!listing.rent,
					message:
						"Rent price is required before the listing can be active",
				},
				{
					valid:
						Array.isArray(listing.photos) &&
						listing.photos.length >= 5,
					message: "Listing requires at least 5 photos to be active",
				},
				{
					valid:
						Array.isArray(listing.amenities) &&
						listing.amenities.length > 0,
					message: "Listing requires at least 1 amenity to be active",
				},
			];

			for (const check of validations) {
				if (!check.valid) {
					return {
						status: 400,
						message: check.message,
					};
				}
			}
		}

		listing.status = status || listing.status;
		const updatedListing = await listing.save();

		if (!updatedListing)
			return {
				status: 400,
				message: "Oops! An error occurred! Try again later",
			};
		revalidatePath(`/all-listings/${listing._id}`);
		return {
			status: 201,
			message: "Visibility status successfully updated.",
			listing: JSON.parse(JSON.stringify(updatedListing)),
		};
	} catch (error) {
		handleError(error);
		return {
			status: 400,
			message: "Oops! An error occurred. Try again later.",
		};
	}
};
