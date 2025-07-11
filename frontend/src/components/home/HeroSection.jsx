// import React, { useState } from "react";
// import {
//   MapPin,
//   Calendar,
//   Users,
//   Star,
//   SlidersHorizontal,
//   Search,
//   X,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [location, setLocation] = useState("");
//   const [dates, setDates] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [priceRange, setPriceRange] = useState([50, 300]);
//   const [rating, setRating] = useState(0);
//   const navigate = useNavigate();
//   const toggleFilters = () => {
//     setShowFilters(!showFilters);
//   };

//   // const handleSearch = (e) => {
//   //   e.preventDefault();
//   //   navigate("/all-listings");
//   // };
//   const handleSearch = (e) => {
//     e.preventDefault();

//     const params = new URLSearchParams();
//     if (location) params.append("location", location);
//     // if (guests) params.append("guests", guests);
//     // if (priceRange[0]) params.append("minPrice", priceRange[0]);
//     // if (priceRange[1]) params.append("maxPrice", priceRange[1]);
//     // if (rating) params.append("rating", rating);

//     navigate(`/all-listings?${params.toString()}`);
//   };
//   return (
//     <section className="relative py-20 px-4 bg-gradient-to-r from-red-600 via-red-500 to-red-700">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
//             Find Your Perfect Stay
//           </h1>
//           <p className="text-md sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
//             Discover unique places to stay around the world with our curated
//             selection of hotels
//           </p>

//           {/* Popular tags */}
//           <div className="flex flex-wrap justify-center gap-2 mt-6">
//             {[
//               "Beachfront",
//               "Mountain View",
//               "Luxury",
//               "Budget",
//               "Family Friendly",
//             ].map((tag) => (
//               <button
//                 key={tag}
//                 className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm transition backdrop-blur-sm"
//               >
//                 {tag}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Search bar container */}
//         <div className="bg-white p-2 rounded-xl shadow-2xl">
//           <form onSubmit={handleSearch}>
//             <div className="flex flex-col sm:flex-row items-stretch gap-1">
//               {/* Location Input */}
//               <div className="flex-1 flex items-center border border-gray-300  rounded-lg px-4 py-3 hover:border-gray-400 transition">
//                 <MapPin className="text-gray-500 w-5 h-5 mr-2" />
//                 <input
//                   type="text"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                   placeholder="Where are you going?"
//                   className="w-full focus:outline-none text-gray-700 placeholder-gray-500"
//                 />
//               </div>

//               {/* Date Input */}
//               <div className="flex-1 flex items-center border border-gray-300 rounded-lg px-4 py-3 hover:border-gray-400 transition">
//                 <Calendar className="text-gray-500 w-5 h-5 mr-2" />
//                 <input
//                   type="text"
//                   value={dates}
//                   onChange={(e) => setDates(e.target.value)}
//                   placeholder="Select dates"
//                   className="w-full focus:outline-none text-gray-300 placeholder-gray-500"
//                   onFocus={(e) => (e.target.type = "date")}
//                   onBlur={(e) => (e.target.type = "text")}
//                 />
//               </div>

//               {/* Guests Input */}
//               <div className="flex-1 flex items-center border border-gray-300  rounded-lg px-4 py-3 hover:border-gray-400 transition">
//                 <Users className="text-gray-500 w-5 h-5 mr-2" />
//                 <select
//                   value={guests}
//                   onChange={(e) => setGuests(e.target.value)}
//                   className="w-full focus:outline-none text-gray-700 bg-transparent"
//                 >
//                   {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
//                     <option key={num} value={num}>
//                       {num} {num === 1 ? "guest" : "guests"}
//                     </option>
//                   ))}
//                   <option value="9+">9+ guests</option>
//                 </select>
//               </div>

//               {/* Search Button */}
//               <button className="flex items-center justify-center bg-[#FF385C] hover:bg-[#e0314f] text-white px-6 py-3 rounded-lg shadow-md transition font-medium min-w-[120px]">
//                 <Search className="w-5 h-5 mr-2" />
//                 Search
//               </button>
//             </div>
//           </form>

//           {/* Advanced filters toggle */}
//           <div className="mt-3 flex justify-between items-center px-2">
//             <button
//               onClick={toggleFilters}
//               className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition"
//             >
//               <SlidersHorizontal className="w-4 h-4 mr-1" />
//               {showFilters ? "Hide filters" : "Advanced filters"}
//             </button>

//             <div className="text-xs text-gray-500">
//               Over 10,000 properties worldwide
//             </div>
//           </div>

//           {/* Advanced filters panel */}
//           {showFilters && (
//             <div className="mt-4 p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg animate-fadeIn">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* Price range filter */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Price range: ${priceRange[0]} - ${priceRange[1]}
//                   </label>
//                   <div className="flex items-center space-x-4">
//                     <input
//                       type="range"
//                       min="20"
//                       max="500"
//                       value={priceRange[0]}
//                       onChange={(e) =>
//                         setPriceRange([parseInt(e.target.value), priceRange[1]])
//                       }
//                       className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                     />
//                     <input
//                       type="range"
//                       min="20"
//                       max="500"
//                       value={priceRange[1]}
//                       onChange={(e) =>
//                         setPriceRange([priceRange[0], parseInt(e.target.value)])
//                       }
//                       className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                     />
//                   </div>
//                 </div>

//                 {/* Rating filter */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Minimum rating
//                   </label>
//                   <div className="flex items-center space-x-1">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <button
//                         key={star}
//                         onClick={() => setRating(star)}
//                         className={`p-1 ${
//                           rating >= star ? "text-yellow-500" : "text-gray-300"
//                         }`}
//                       >
//                         <Star className="w-5 h-5 fill-current" />
//                       </button>
//                     ))}
//                     <span className="ml-2 text-sm text-gray-600">
//                       {rating > 0 ? `${rating}+ stars` : "Any"}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Property type filter */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Property type
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {["Hotel", "Apartment", "Resort", "Villa", "Hostel"].map(
//                       (type) => (
//                         <button
//                           key={type}
//                           className="px-3 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded-full text-sm transition"
//                         >
//                           {type}
//                         </button>
//                       )
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-4 flex justify-end">
//                 <button
//                   type="button"
//                   onClick={toggleFilters}
//                   className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition"
//                 >
//                   <X className="w-4 h-4 mr-1" />
//                   Close filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Trust indicators */}
//         <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90">
//           <div className="flex items-center">
//             <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//                 <polyline points="22 4 12 14.01 9 11.01"></polyline>
//               </svg>
//             </div>
//             <span className="text-sm">Verified properties</span>
//           </div>
//           <div className="flex items-center">
//             <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="12" cy="12" r="10"></circle>
//                 <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
//                 <line x1="9" y1="9" x2="9.01" y2="9"></line>
//                 <line x1="15" y1="9" x2="15.01" y2="9"></line>
//               </svg>
//             </div>
//             <span className="text-sm">24/7 customer support</span>
//           </div>
//           <div className="flex items-center">
//             <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//               </svg>
//             </div>
//             <span className="text-sm">Best price guarantee</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  SlidersHorizontal,
  Search,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LocationSearchInput from "../LocationSearchInput";

const HeroSection = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState(1);
  const [priceRange, setPriceRange] = useState([50, 300]);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const toggleFilters = () => setShowFilters(!showFilters);
  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    navigate(`/all-listings?${params.toString()}`);
  };

  return (
    <section className="relative px-4 pt-12 pb-8 sm:py-20 overflow-hidden">
      {/* 📱 Mobile background image with red gradient overlay */}
      <div className="absolute inset-0 sm:hidden z-0 rounded-b-[2rem] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688')", // Replace with your image
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-500 to-red-700 opacity-70"></div>
      </div>

      {/* 💻 Desktop/Tablet Red Gradient Background */}
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700"></div>

      {/* 🌾 Noise Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10"></div>

      {/* ✅ Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Stay
          </h1>
          <p className="text-sm sm:text-lg text-white/90 mb-5 max-w-xl mx-auto">
            Discover unique places to stay around the world with our curated
            selection of hotels
          </p>

          {/* Popular Tag Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {[
              "Beachfront",
              "Mountain View",
              "Luxury",
              "Budget",
              "Family Friendly",
            ].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm transition backdrop-blur-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 🔍 Search Card */}
        <div className="bg-white p-3 rounded-xl shadow-2xl max-w-4xl mx-auto">
          <form onSubmit={handleSearch}>
            <div className="flex flex-col sm:flex-row gap-2">
              {/* <div className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3">
                <MapPin className="text-gray-500 w-5 h-5 mr-2" />
                <LocationSearchInput
                  value={location}
                  onChange={(val) => setLocation(val)} // Updates on typing
                  onSelect={(loc) => {
                    setLocation(loc.name); // Updates on selection
                    console.log("Selected:", loc); // Optional: lat/lng available
                  }}
                />
              </div> */}
              <div className="w-full">
                <LocationSearchInput
                  value={location}
                  onChange={(val) => setLocation(val)} // Updates on typing
                  onSelect={(loc) => {
                    setLocation(loc.name); // Updates on selection
                    console.log("Selected:", loc); // Optional: lat/lng available
                  }}
                />
              </div>

              <div className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3">
                <Calendar className="text-gray-500 w-5 h-5 mr-2" />
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="Select dates"
                  className="w-full focus:outline-none text-gray-500 placeholder-gray-500 text-sm"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                />
              </div>

              <div className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3">
                <Users className="text-gray-500 w-5 h-5 mr-2" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full focus:outline-none text-gray-700 text-sm bg-transparent"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                  <option value="9+">9+ guests</option>
                </select>
              </div>

              <button className="w-full sm:w-auto flex items-center justify-center bg-[#FF385C] hover:bg-[#e0314f] text-white px-6 py-3 rounded-lg shadow-md transition font-medium text-sm">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </form>

          {/* Advanced Filter Toggle */}
          <div className="mt-3 flex justify-between items-center px-1">
            <button
              onClick={toggleFilters}
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <SlidersHorizontal className="w-4 h-4 mr-1" />
              {showFilters ? "Hide filters" : "Advanced filters"}
            </button>
            <div className="text-xs text-gray-500">
              Over 10,000 properties worldwide
            </div>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price range: ₹{priceRange[0]} - ₹{priceRange[1]}
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="20"
                      max="500"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([parseInt(e.target.value), priceRange[1]])
                      }
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="20"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum rating
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className={`p-1 ${
                          rating >= star ? "text-yellow-500" : "text-gray-300"
                        }`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {rating > 0 ? `${rating}+ stars` : "Any"}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Hotel", "Apartment", "Resort", "Villa", "Hostel"].map(
                      (type) => (
                        <button
                          key={type}
                          className="px-3 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded-full text-sm"
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={toggleFilters}
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                  <X className="w-4 h-4 mr-1" />
                  Close filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 text-white/90">
          {[
            {
              icon: (
                <>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </>
              ),
              label: "Verified properties",
            },
            {
              icon: (
                <>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </>
              ),
              label: "24/7 customer support",
            },
            {
              icon: (
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              ),
              label: "Best price guarantee",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
              </div>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
