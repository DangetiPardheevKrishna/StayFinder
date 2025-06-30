import {
  Star,
  MapPin,
  Users,
  Bed,
  Bath,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AuthContext";
import { useState } from "react";

const PropertyCard = ({ listing, wishlist, toggleWishlist }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { user } = useContext(AppContext);

  // const { wishlist, toggleWishlist } = useWishlist(token);

  // useEffect(() => {
  //   getWishlist(backendUrl, token);
  // }, [token]);

  const wishlistItem = wishlist?.includes(listing._id);
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      onClick={() => navigate(`/listings/${listing._id}`)}
    >
      {/* Image Gallery */}
      {/* <div className="relative h-64 overflow-hidden">
        <img
          src={listing.images[0] || "/placeholder-property.jpg"}
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {user && (
          <div
            className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-sm"
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(listing._id);
            }}
          >
            {wishlistItem ? (
              <Heart
                className="w-5 h-5 text-gray-700 hover:text-[#ff385c] cursor-pointer"
                fill="red"
                stroke="red"
              />
            ) : (
              <Heart className="w-5 h-5 text-gray-700 hover:text-[#ff385c] cursor-pointer" />
            )}
          </div>
        )}
      </div> */}
      <div className="relative h-64 overflow-hidden group">
        {/* Slider container - now using absolute positioning instead of flex */}
        <div className="relative h-full w-full">
          {listing.images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentIndex === index
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src={image || "/placeholder-property.jpg"}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {listing.images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) =>
                  prev === 0 ? listing.images.length - 1 : prev - 1
                );
              }}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) =>
                  prev === listing.images.length - 1 ? 0 : prev + 1
                );
              }}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}

        {/* Image counter */}
        {listing.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-10">
            {currentIndex + 1}/{listing.images.length}
          </div>
        )}

        {/* Wishlist heart button */}
        {user && (
          <div
            className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-sm z-10"
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(listing._id);
            }}
          >
            {wishlistItem ? (
              <Heart
                className="w-5 h-5 text-gray-700 hover:text-[#ff385c] cursor-pointer"
                fill="red"
                stroke="red"
              />
            ) : (
              <Heart className="w-5 h-5 text-gray-700 hover:text-[#ff385c] cursor-pointer" />
            )}
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {listing.title}
          </h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-[#ff385c] text-[#ff385c] mr-1" />
            <span className="text-sm font-medium">
              {listing.rating || "New"}
            </span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mt-1">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{listing.location}</span>
        </div>

        {/* Amenities Summary */}
        <div className="flex flex-wrap gap-2 mt-3">
          {listing.amenities.wifi && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">WiFi</span>
          )}
          {listing.amenities.kitchen && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              Kitchen
            </span>
          )}
          {listing.amenities.parking && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              Parking
            </span>
          )}
          {listing.amenities.tv && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">TV</span>
          )}
        </div>

        {/* Capacity */}
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{listing.guests} guests</span>
          </div>
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{listing.bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{listing.bathrooms} baths</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm">Per night</p>
            <p className="text-xl font-bold text-[#ff385c]">
              ${listing.price.toLocaleString()}
            </p>
          </div>
          <Link
            to={`/listings/${listing._id}`}
            className="px-4 py-2 bg-[#ff385c] hover:bg-[#e0274d] text-white rounded-lg transition-colors text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
