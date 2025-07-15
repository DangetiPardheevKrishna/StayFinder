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
// import LocationSearchInput from "../LocationSearchInput";

// const HeroSection = () => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [location, setLocation] = useState(null);
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [priceRange, setPriceRange] = useState([50, 300]);
//   const [rating, setRating] = useState(0);
//   const navigate = useNavigate();
//   const toggleFilters = () => setShowFilters(!showFilters);
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const params = new URLSearchParams();
//     if (location) params.append("location", location);
//     navigate(`/all-listings?${params.toString()}`);
//   };

//   return (
//     <section className="relative px-4 pt-12 pb-8 sm:py-20 overflow-hidden">
//       {/* 📱 Mobile background image with red gradient overlay */}
//       <div className="absolute inset-0 sm:hidden z-0 rounded-b-[2rem] overflow-hidden">
//         <div
//           className="absolute inset-0 bg-center bg-cover"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688')",
//           }}
//         ></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-500 to-red-700 opacity-70"></div>
//       </div>

//       {/* 💻 Desktop/Tablet Red Gradient Background */}
//       <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700"></div>

//       {/* 🌾 Noise Overlay */}
//       <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10"></div>

//       {/* ✅ Main Content */}
//       <div className="relative z-20 max-w-6xl mx-auto">
//         <div className="text-center mb-8 sm:mb-12">
//           <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
//             Find Your Perfect Stay
//           </h1>
//           <p className="text-sm sm:text-lg text-white/90 mb-5 max-w-xl mx-auto">
//             Discover unique places to stay around the world with our curated
//             selection of hotels
//           </p>

//           {/* Popular Tag Filters */}
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

//         {/* 🔍 Search Card */}
//         <div className="bg-white p-3 rounded-xl shadow-2xl max-w-4xl mx-auto">
//           <form onSubmit={handleSearch}>
//             <div className="flex flex-col sm:flex-row gap-2">
//               <div className="w-full">
//                 <LocationSearchInput
//                   value={location?.name || ""}
//                   onChange={(val) => setLocation({ ...location, name: val })}
//                   onSelect={(loc) => {
//                     setLocation(loc);
//                     console.log("Selected Location:", loc);
//                   }}
//                 />
//               </div>

//               {/* Date Inputs - Modified for two calendars */}
//               <div className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3">
//                 <Calendar className="text-gray-500 w-5 h-5 mr-2" />
//                 <div className="flex flex-col w-full">
//                   <div className="flex items-center">
//                     <input
//                       type="date"
//                       value={checkInDate}
//                       onChange={(e) => setCheckInDate(e.target.value)}
//                       placeholder="Check-in"
//                       className="w-full focus:outline-none text-gray-500 placeholder-gray-500 text-sm"
//                       min={new Date().toISOString().split("T")[0]} // Prevent past dates
//                     />
//                   </div>
//                   <div className="border-t border-gray-200 mt-1 pt-1">
//                     <input
//                       type="date"
//                       value={checkOutDate}
//                       onChange={(e) => setCheckOutDate(e.target.value)}
//                       placeholder="Check-out"
//                       className="w-full focus:outline-none text-gray-500 placeholder-gray-500 text-sm"
//                       min={
//                         checkInDate || new Date().toISOString().split("T")[0]
//                       } // Can't be before check-in
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Guests Selector - Improved for mobile */}
//               <div className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3">
//                 <Users className="text-gray-500 w-5 h-5 mr-2" />
//                 <select
//                   value={guests}
//                   onChange={(e) => setGuests(Number(e.target.value))}
//                   className="w-full focus:outline-none text-gray-700 text-sm bg-transparent appearance-none"
//                 >
//                   {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
//                     <option key={num} value={num}>
//                       {num} {num === 1 ? "guest" : "guests"}
//                     </option>
//                   ))}
//                   <option value="9">9+ guests</option>
//                 </select>
//               </div>

//               <button className="w-full sm:w-auto flex items-center justify-center bg-[#FF385C] hover:bg-[#e0314f] text-white px-6 py-3 rounded-lg shadow-md transition font-medium text-sm">
//                 <Search className="w-5 h-5 mr-2" />
//                 Search
//               </button>
//             </div>
//           </form>

//           {/* Advanced Filter Toggle */}
//           <div className="mt-3 flex justify-between items-center px-1">
//             <button
//               onClick={toggleFilters}
//               className="flex items-center text-sm text-gray-600 hover:text-gray-900"
//             >
//               <SlidersHorizontal className="w-4 h-4 mr-1" />
//               {showFilters ? "Hide filters" : "Advanced filters"}
//             </button>
//             <div className="text-xs text-gray-500">
//               Over 10,000 properties worldwide
//             </div>
//           </div>

//           {/* Advanced Filters Panel */}
//           {showFilters && (
//             <div className="mt-4 p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Price range: ₹{priceRange[0]} - ₹{priceRange[1]}
//                   </label>
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="range"
//                       min="20"
//                       max="500"
//                       value={priceRange[0]}
//                       onChange={(e) =>
//                         setPriceRange([parseInt(e.target.value), priceRange[1]])
//                       }
//                       className="w-full"
//                     />
//                     <input
//                       type="range"
//                       min="20"
//                       max="500"
//                       value={priceRange[1]}
//                       onChange={(e) =>
//                         setPriceRange([priceRange[0], parseInt(e.target.value)])
//                       }
//                       className="w-full"
//                     />
//                   </div>
//                 </div>

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

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Property type
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {["Hotel", "Apartment", "Resort", "Villa", "Hostel"].map(
//                       (type) => (
//                         <button
//                           key={type}
//                           className="px-3 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded-full text-sm"
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
//                   onClick={toggleFilters}
//                   className="flex items-center text-sm text-gray-600 hover:text-gray-900"
//                 >
//                   <X className="w-4 h-4 mr-1" />
//                   Close filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Trust Indicators */}
//         <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 text-white/90">
//           {[
//             {
//               icon: (
//                 <>
//                   <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                   <polyline points="22 4 12 14.01 9 11.01" />
//                 </>
//               ),
//               label: "Verified properties",
//             },
//             {
//               icon: (
//                 <>
//                   <circle cx="12" cy="12" r="10"></circle>
//                   <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
//                   <line x1="9" y1="9" x2="9.01" y2="9"></line>
//                   <line x1="15" y1="9" x2="15.01" y2="9"></line>
//                 </>
//               ),
//               label: "24/7 customer support",
//             },
//             {
//               icon: (
//                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//               ),
//               label: "Best price guarantee",
//             },
//           ].map((item, idx) => (
//             <div key={idx} className="flex items-center">
//               <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   {item.icon}
//                 </svg>
//               </div>
//               <span className="text-sm">{item.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React, { useState } from "react";
// import {
//   MapPin,
//   Calendar,
//   Users,
//   Star,
//   SlidersHorizontal,
//   Search,
//   X,
//   Minus,
//   Plus,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import LocationSearchInput from "../LocationSearchInput";

// const HeroSection = () => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [location, setLocation] = useState(null);
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [priceRange, setPriceRange] = useState([50, 300]);
//   const [rating, setRating] = useState(0);
//   const navigate = useNavigate();

//   const toggleFilters = () => setShowFilters(!showFilters);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const params = new URLSearchParams();
//     if (location) params.append("location", location.name);
//     if (checkInDate) params.append("checkIn", checkInDate);
//     if (checkOutDate) params.append("checkOut", checkOutDate);
//     if (guests) params.append("guests", guests);
//     navigate(`/all-listings?${params.toString()}`);
//   };

//   const handleGuestChange = (type) => {
//     setGuests((prev) => {
//       if (type === "increment") return prev + 1;
//       if (type === "decrement" && prev > 1) return prev - 1;
//       return prev;
//     });
//   };

//   return (
//     <section className="relative px-4 pt-12 pb-8 sm:py-20 overflow-hidden">
//       {/* Backgrounds and overlays */}
//       <div className="absolute inset-0 sm:hidden z-0 rounded-b-[2rem] overflow-hidden">
//         <div
//           className="absolute inset-0 bg-center bg-cover"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688')",
//           }}
//         ></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-500 to-red-700 opacity-70"></div>
//       </div>

//       <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700"></div>
//       <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10"></div>

//       <div className="relative z-20 max-w-6xl mx-auto">
//         <div className="text-center mb-8 sm:mb-12">
//           <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
//             Find Your Perfect Stay
//           </h1>
//           <p className="text-sm sm:text-lg text-white/90 mb-5 max-w-xl mx-auto">
//             Discover unique places to stay around the world with our curated
//             selection of hotels
//           </p>
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

//         {/* Search Card */}
//         <div className="bg-white p-3 rounded-xl shadow-2xl max-w-4xl mx-auto">
//           <form onSubmit={handleSearch}>
//             <div className="flex flex-col sm:flex-row gap-2">
//               {/* Location Search */}
//               <div className="w-full">
//                 <LocationSearchInput
//                   value={location?.name || ""}
//                   onChange={(val) => setLocation({ ...location, name: val })}
//                   onSelect={(loc) => {
//                     setLocation(loc);
//                     console.log("Selected Location:", loc);
//                   }}
//                 />
//               </div>

//               {/* Check-in and Check-out */}
//               {location && (
//                 <div className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3">
//                   <Calendar className="text-gray-500 w-5 h-5 mr-2" />
//                   <div className="flex flex-col w-full">
//                     <div className="flex items-center">
//                       <input
//                         type="date"
//                         value={checkInDate}
//                         onChange={(e) => setCheckInDate(e.target.value)}
//                         placeholder="Check-in"
//                         className="w-full focus:outline-none text-gray-500 placeholder-gray-500 text-sm"
//                         min={new Date().toISOString().split("T")[0]}
//                       />
//                     </div>
//                     <div className="border-t border-gray-200 mt-1 pt-1">
//                       <input
//                         type="date"
//                         value={checkOutDate}
//                         onChange={(e) => setCheckOutDate(e.target.value)}
//                         placeholder="Check-out"
//                         className="w-full focus:outline-none text-gray-500 placeholder-gray-500 text-sm"
//                         min={
//                           checkInDate || new Date().toISOString().split("T")[0]
//                         }
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Guests Selector (with + - buttons) */}
//               {location && (
//                 <div className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3 justify-between">
//                   <div className="flex items-center">
//                     <Users className="text-gray-500 w-5 h-5 mr-2" />
//                     <span className="text-sm text-gray-700">
//                       {guests} {guests === 1 ? "guest" : "guests"}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <button
//                       type="button"
//                       onClick={() => handleGuestChange("decrement")}
//                       className="text-gray-600 hover:text-black"
//                     >
//                       <Minus className="w-4 h-4" />
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => handleGuestChange("increment")}
//                       className="text-gray-600 hover:text-black"
//                     >
//                       <Plus className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               )}

//               <button className="w-full sm:w-auto flex items-center justify-center bg-[#FF385C] hover:bg-[#e0314f] text-white px-6 py-3 rounded-lg shadow-md transition font-medium text-sm">
//                 <Search className="w-5 h-5 mr-2" />
//                 Search
//               </button>
//             </div>
//           </form>

//           {/* Advanced Filter Toggle */}
//           <div className="mt-3 flex justify-between items-center px-1">
//             <button
//               onClick={toggleFilters}
//               className="flex items-center text-sm text-gray-600 hover:text-gray-900"
//             >
//               <SlidersHorizontal className="w-4 h-4 mr-1" />
//               {showFilters ? "Hide filters" : "Advanced filters"}
//             </button>
//             <div className="text-xs text-gray-500">
//               Over 10,000 properties worldwide
//             </div>
//           </div>

//           {/* Advanced Filters Panel */}
//           {showFilters && (
//             <div className="mt-4 p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {/* Price Range */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Price range: ₹{priceRange[0]} - ₹{priceRange[1]}
//                   </label>
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="range"
//                       min="20"
//                       max="500"
//                       value={priceRange[0]}
//                       onChange={(e) =>
//                         setPriceRange([parseInt(e.target.value), priceRange[1]])
//                       }
//                       className="w-full"
//                     />
//                     <input
//                       type="range"
//                       min="20"
//                       max="500"
//                       value={priceRange[1]}
//                       onChange={(e) =>
//                         setPriceRange([priceRange[0], parseInt(e.target.value)])
//                       }
//                       className="w-full"
//                     />
//                   </div>
//                 </div>

//                 {/* Rating */}
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

//                 {/* Property Type */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Property type
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {["Hotel", "Apartment", "Resort", "Villa", "Hostel"].map(
//                       (type) => (
//                         <button
//                           key={type}
//                           className="px-3 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded-full text-sm"
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
//                   onClick={toggleFilters}
//                   className="flex items-center text-sm text-gray-600 hover:text-gray-900"
//                 >
//                   <X className="w-4 h-4 mr-1" />
//                   Close filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Trust Indicators */}
//         <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 text-white/90">
//           {[
//             {
//               icon: (
//                 <>
//                   <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                   <polyline points="22 4 12 14.01 9 11.01" />
//                 </>
//               ),
//               label: "Verified properties",
//             },
//             {
//               icon: (
//                 <>
//                   <circle cx="12" cy="12" r="10"></circle>
//                   <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
//                   <line x1="9" y1="9" x2="9.01" y2="9"></line>
//                   <line x1="15" y1="9" x2="15.01" y2="9"></line>
//                 </>
//               ),
//               label: "24/7 customer support",
//             },
//             {
//               icon: (
//                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//               ),
//               label: "Best price guarantee",
//             },
//           ].map((item, idx) => (
//             <div key={idx} className="flex items-center">
//               <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   {item.icon}
//                 </svg>
//               </div>
//               <span className="text-sm">{item.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
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
// import { DateRange } from "react-date-range";
// import { format } from "date-fns";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import LocationSearchInput from "../LocationSearchInput";

// const HeroSection = () => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [location, setLocation] = useState(null);
//   const [openDate, setOpenDate] = useState(false);
//   const [openGuests, setOpenGuests] = useState(false);
//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(new Date().getTime() + 86400000),
//       key: "selection",
//     },
//   ]);
//   const [guests, setGuests] = useState(1);
//   const [priceRange, setPriceRange] = useState([50, 300]);
//   const [rating, setRating] = useState(0);
//   const navigate = useNavigate();
//   const toggleFilters = () => setShowFilters(!showFilters);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const params = new URLSearchParams();
//     if (location) params.append("location", location.name);
//     params.append("guests", guests);
//     params.append("checkIn", dateRange[0].startDate.toISOString());
//     params.append("checkOut", dateRange[0].endDate.toISOString());
//     navigate(`/all-listings?${params.toString()}`);
//   };

//   return (
//     <section className="relative px-4 pt-12 pb-8 sm:py-20 overflow-hidden">
//       {/* Backgrounds and overlays remain unchanged */}
//       <div className="absolute inset-0 sm:hidden z-0 rounded-b-[2rem] overflow-hidden">
//         <div
//           className="absolute inset-0 bg-center bg-cover"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688')",
//           }}
//         ></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-500 to-red-700 opacity-70"></div>
//       </div>
//       <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700"></div>
//       <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10"></div>

//       <div className="relative z-20 max-w-6xl mx-auto">
//         <div className="text-center mb-8 sm:mb-12">
//           <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
//             Find Your Perfect Stay
//           </h1>
//           <p className="text-sm sm:text-lg text-white/90 mb-5 max-w-xl mx-auto">
//             Discover unique places to stay around the world with our curated
//             selection of hotels
//           </p>
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

//         {/* Search Bar */}
//         <div className="bg-white p-3 rounded-xl shadow-2xl max-w-4xl mx-auto">
//           <form onSubmit={handleSearch}>
//             <div className="flex flex-col sm:flex-row gap-2 relative">
//               {/* Location */}
//               <div className="w-full relative">
//                 <LocationSearchInput
//                   value={location?.name || ""}
//                   onChange={(val) => setLocation({ ...location, name: val })}
//                   onSelect={(loc) => {
//                     setLocation(loc);
//                     setOpenDate(true);
//                   }}
//                 />
//               </div>

//               {/* Date Range Picker */}
//               <div
//                 className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3 cursor-pointer relative"
//                 onClick={() => {
//                   setOpenDate(!openDate);
//                   setOpenGuests(false);
//                 }}
//               >
//                 <Calendar className="text-gray-500 w-5 h-5 mr-2" />
//                 <span className="text-sm text-gray-700">
//                   {`${format(dateRange[0].startDate, "MMM dd")} - ${format(
//                     dateRange[0].endDate,
//                     "MMM dd"
//                   )}`}
//                 </span>
//                 {openDate && (
//                   <div className="absolute top-16 left-0 z-50">
//                     <DateRange
//                       ranges={dateRange}
//                       onChange={(item) => setDateRange([item.selection])}
//                       minDate={new Date()}
//                       moveRangeOnFirstSelection={false}
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Guests Stepper */}
//               <div
//                 className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3 cursor-pointer relative"
//                 onClick={() => {
//                   setOpenGuests(!openGuests);
//                   setOpenDate(false);
//                 }}
//               >
//                 <Users className="text-gray-500 w-5 h-5 mr-2" />
//                 <span className="text-sm text-gray-700">
//                   {guests} {guests === 1 ? "guest" : "guests"}
//                 </span>
//                 {openGuests && (
//                   <div className="absolute top-16 left-0 z-50 bg-white border rounded shadow p-3 w-48">
//                     <div className="flex justify-between items-center">
//                       <span className="text-sm text-gray-800">Guests</span>
//                       <div className="flex items-center gap-2">
//                         <button
//                           type="button"
//                           onClick={() => setGuests(Math.max(1, guests - 1))}
//                           className="px-2 py-1 border rounded"
//                         >
//                           -
//                         </button>
//                         <span>{guests}</span>
//                         <button
//                           type="button"
//                           onClick={() => setGuests(guests + 1)}
//                           className="px-2 py-1 border rounded"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Search Button */}
//               <button className="w-full sm:w-auto flex items-center justify-center bg-[#FF385C] hover:bg-[#e0314f] text-white px-6 py-3 rounded-lg shadow-md transition font-medium text-sm">
//                 <Search className="w-5 h-5 mr-2" />
//                 Search
//               </button>
//             </div>
//           </form>

//           {/* Advanced Filter Toggle */}
//           <div className="mt-3 flex justify-between items-center px-1">
//             <button
//               onClick={toggleFilters}
//               className="flex items-center text-sm text-gray-600 hover:text-gray-900"
//             >
//               <SlidersHorizontal className="w-4 h-4 mr-1" />
//               {showFilters ? "Hide filters" : "Advanced filters"}
//             </button>
//             <div className="text-xs text-gray-500">
//               Over 10,000 properties worldwide
//             </div>
//           </div>

//           {/* Advanced Filters Panel (unchanged) */}
//           {showFilters && (
//             <div className="mt-4 p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Price range: ₹{priceRange[0]} - ₹{priceRange[1]}
//                   </label>
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="range"
//                       min="20"
//                       max="500"
//                       value={priceRange[0]}
//                       onChange={(e) =>
//                         setPriceRange([parseInt(e.target.value), priceRange[1]])
//                       }
//                       className="w-full"
//                     />
//                     <input
//                       type="range"
//                       min="20"
//                       max="500"
//                       value={priceRange[1]}
//                       onChange={(e) =>
//                         setPriceRange([priceRange[0], parseInt(e.target.value)])
//                       }
//                       className="w-full"
//                     />
//                   </div>
//                 </div>

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

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Property type
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {["Hotel", "Apartment", "Resort", "Villa", "Hostel"].map(
//                       (type) => (
//                         <button
//                           key={type}
//                           className="px-3 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded-full text-sm"
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
//                   onClick={toggleFilters}
//                   className="flex items-center text-sm text-gray-600 hover:text-gray-900"
//                 >
//                   <X className="w-4 h-4 mr-1" />
//                   Close filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// import React, { useState, useRef, useEffect } from "react";
// import {
//   MapPin,
//   Calendar,
//   Users,
//   Star,
//   SlidersHorizontal,
//   Search,
//   X,
//   Plus,
//   Minus,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { DateRange } from "react-date-range";
// import { format, addMonths } from "date-fns";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import LocationSearchInput from "../LocationSearchInput";

// const HeroSection = () => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [location, setLocation] = useState(null);
//   const [openDate, setOpenDate] = useState(false);
//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(new Date().getTime() + 86400000),
//       key: "selection",
//     },
//   ]);
//   const [guests, setGuests] = useState(1);
//   const [priceRange, setPriceRange] = useState([50, 300]);
//   const [rating, setRating] = useState(0);
//   const navigate = useNavigate();
//   const datePickerRef = useRef(null);
//   const toggleFilters = () => setShowFilters(!showFilters);

//   // Close calendar when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         datePickerRef.current &&
//         !datePickerRef.current.contains(event.target)
//       ) {
//         setOpenDate(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const params = new URLSearchParams();
//     if (location) params.append("location", location.name);
//     params.append("guests", guests);
//     params.append("checkIn", dateRange[0].startDate.toISOString());
//     params.append("checkOut", dateRange[0].endDate.toISOString());
//     navigate(`/all-listings?${params.toString()}`);
//   };

//   // Custom navigation for date range
//   const navigateDateRange = (direction) => {
//     setDateRange([
//       {
//         startDate: addMonths(
//           dateRange[0].startDate,
//           direction === "prev" ? -1 : 1
//         ),
//         endDate: addMonths(dateRange[0].endDate, direction === "prev" ? -1 : 1),
//         key: "selection",
//       },
//     ]);
//   };

//   return (
//     <section className="relative px-4 pt-12 pb-8 sm:py-20 overflow-hidden">
//       {/* Backgrounds and overlays */}
//       <div className="absolute inset-0 sm:hidden z-0 rounded-b-[2rem] overflow-hidden">
//         <div
//           className="absolute inset-0 bg-center bg-cover"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688')",
//           }}
//         ></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-500 to-red-700 opacity-70"></div>
//       </div>
//       <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700"></div>
//       <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10"></div>

//       <div className="relative z-20 max-w-6xl mx-auto">
//         <div className="text-center mb-8 sm:mb-12">
//           <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
//             Find Your Perfect Stay
//           </h1>
//           <p className="text-sm sm:text-lg text-white/90 mb-5 max-w-xl mx-auto">
//             Discover unique places to stay around the world with our curated
//             selection of hotels
//           </p>
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

//         {/* Search Bar */}
//         <div className="bg-white p-3 rounded-xl shadow-2xl max-w-4xl mx-auto">
//           <form onSubmit={handleSearch}>
//             <div className="flex flex-col sm:flex-row gap-2 relative">
//               {/* Location */}
//               <div className="w-full relative">
//                 <LocationSearchInput
//                   value={location?.name || ""}
//                   onChange={(val) => setLocation({ ...location, name: val })}
//                   onSelect={(loc) => {
//                     setLocation(loc);
//                     setOpenDate(true);
//                   }}
//                 />
//               </div>

//               {/* Date Range Picker */}
//               <div className="w-full relative" ref={datePickerRef}>
//                 <div
//                   className="flex items-center border border-gray-300 rounded-lg px-4 py-3 cursor-pointer"
//                   onClick={() => setOpenDate(!openDate)}
//                 >
//                   <Calendar className="text-gray-500 w-5 h-5 mr-2" />
//                   <span className="text-sm text-gray-700">
//                     {`${format(dateRange[0].startDate, "MMM dd")} - ${format(
//                       dateRange[0].endDate,
//                       "MMM dd"
//                     )}`}
//                   </span>
//                 </div>
//                 {openDate && (
//                   <div className="absolute top-16 left-0 z-50 bg-white p-4 rounded-lg shadow-xl border border-gray-200 w-full sm:w-[700px]">
//                     <div className="flex justify-between items-center mb-4">
//                       <button
//                         type="button"
//                         onClick={() => navigateDateRange("prev")}
//                         className="p-2 rounded-full hover:bg-gray-100"
//                       >
//                         <ChevronLeft className="w-5 h-5 text-gray-600" />
//                       </button>
//                       <div className="flex gap-2">
//                         <span className="font-medium">
//                           {format(dateRange[0].startDate, "MMMM yyyy")}
//                         </span>
//                         <span className="font-medium">
//                           {format(
//                             addMonths(dateRange[0].startDate, 1),
//                             "MMMM yyyy"
//                           )}
//                         </span>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => navigateDateRange("next")}
//                         className="p-2 rounded-full hover:bg-gray-100"
//                       >
//                         <ChevronRight className="w-5 h-5 text-gray-600" />
//                       </button>
//                     </div>
//                     <DateRange
//                       ranges={dateRange}
//                       onChange={(item) => setDateRange([item.selection])}
//                       minDate={new Date()}
//                       moveRangeOnFirstSelection={false}
//                       rangeColors={["#FF385C"]}
//                       showMonthAndYearPickers={false}
//                       showDateDisplay={false}
//                       months={2}
//                       direction="horizontal"
//                       editableDateInputs={true}
//                       className="w-full"
//                     />
//                     <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setDateRange([
//                             {
//                               startDate: new Date(),
//                               endDate: new Date(
//                                 new Date().getTime() + 86400000
//                               ),
//                               key: "selection",
//                             },
//                           ]);
//                         }}
//                         className="text-sm text-gray-600 hover:text-gray-900"
//                       >
//                         Reset dates
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => setOpenDate(false)}
//                         className="px-4 py-2 bg-[#FF385C] text-white rounded-md text-sm hover:bg-[#e0314f]"
//                       >
//                         Apply dates
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Guests Selector */}
//               <div className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3">
//                 <Users className="text-gray-500 w-5 h-5 mr-2" />
//                 <div className="flex items-center justify-between w-full">
//                   <span className="text-sm text-gray-700">
//                     {guests} {guests === 1 ? "guest" : "guests"}
//                   </span>
//                   <div className="flex items-center gap-2">
//                     <button
//                       type="button"
//                       onClick={() => setGuests(Math.max(1, guests - 1))}
//                       className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
//                     >
//                       <Minus className="w-4 h-4 text-gray-600" />
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setGuests(guests + 1)}
//                       className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
//                     >
//                       <Plus className="w-4 h-4 text-gray-600" />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Search Button */}
//               <button className="w-full sm:w-auto flex items-center justify-center bg-[#FF385C] hover:bg-[#e0314f] text-white px-6 py-3 rounded-lg shadow-md transition font-medium text-sm">
//                 <Search className="w-5 h-5 mr-2" />
//                 Search
//               </button>
//             </div>
//           </form>

//           {/* Advanced Filter Toggle */}
//           <div className="mt-3 flex justify-between items-center px-1">
//             <button
//               onClick={toggleFilters}
//               className="flex items-center text-sm text-gray-600 hover:text-gray-900"
//             >
//               <SlidersHorizontal className="w-4 h-4 mr-1" />
//               {showFilters ? "Hide filters" : "Advanced filters"}
//             </button>
//             <div className="text-xs text-gray-500">
//               Over 10,000 properties worldwide
//             </div>
//           </div>

//           {/* Advanced Filters Panel */}
//           {showFilters && (
//             <div className="mt-4 p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Price range: ₹{priceRange[0]} - ₹{priceRange[1]}
//                   </label>
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="range"
//                       min="20"
//                       max="500"
//                       value={priceRange[0]}
//                       onChange={(e) =>
//                         setPriceRange([parseInt(e.target.value), priceRange[1]])
//                       }
//                       className="w-full"
//                     />
//                     <input
//                       type="range"
//                       min="20"
//                       max="500"
//                       value={priceRange[1]}
//                       onChange={(e) =>
//                         setPriceRange([priceRange[0], parseInt(e.target.value)])
//                       }
//                       className="w-full"
//                     />
//                   </div>
//                 </div>

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

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Property type
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {["Hotel", "Apartment", "Resort", "Villa", "Hostel"].map(
//                       (type) => (
//                         <button
//                           key={type}
//                           className="px-3 py-1 bg-white border border-gray-300 hover:border-gray-400 rounded-full text-sm"
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
//                   onClick={toggleFilters}
//                   className="flex items-center text-sm text-gray-600 hover:text-gray-900"
//                 >
//                   <X className="w-4 h-4 mr-1" />
//                   Close filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// import React, { useState, useRef, useEffect } from "react";
// import {
//   MapPin,
//   Calendar,
//   Users,
//   Star,
//   SlidersHorizontal,
//   Search,
//   X,
//   Plus,
//   Minus,
//   ChevronLeft,
//   ChevronRight,
//   Shield,
//   Check,
//   Smile,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { DateRange } from "react-date-range";
// import { format, addMonths } from "date-fns";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import LocationSearchInput from "../LocationSearchInput";
// import { constructFromSymbol } from "date-fns/constants";

// const HeroSection = () => {
//   const [showFilters, setShowFilters] = useState(false);
//   const [location, setLocation] = useState(null);
//   const [openDate, setOpenDate] = useState(false);
//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(new Date().getTime() + 86400000),
//       key: "selection",
//     },
//   ]);
//   const [guests, setGuests] = useState(1);
//   const [priceRange, setPriceRange] = useState([50, 300]);
//   const [rating, setRating] = useState(0);
//   const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
//   const navigate = useNavigate();
//   const datePickerRef = useRef(null);

//   const toggleFilters = () => setShowFilters(!showFilters);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         datePickerRef.current &&
//         !datePickerRef.current.contains(event.target)
//       ) {
//         setOpenDate(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!location || !location.name || location.name.trim() === "") {
//       alert("Please select a location");
//       return;
//     }

//     const params = new URLSearchParams();
//     if (location) params.append("location", location.name);
//     params.append("guests", guests);
//     params.append("checkIn", dateRange[0].startDate.toISOString());
//     params.append("checkOut", dateRange[0].endDate.toISOString());
//     navigate(`/all-listings?${params.toString()}`);
//   };

//   const navigateDateRange = (direction) => {
//     setDateRange([
//       {
//         startDate: addMonths(
//           dateRange[0].startDate,
//           direction === "prev" ? -1 : 1
//         ),
//         endDate: addMonths(dateRange[0].endDate, direction === "prev" ? -1 : 1),
//         key: "selection",
//       },
//     ]);
//     setCurrentMonthIndex(
//       direction === "prev"
//         ? Math.max(0, currentMonthIndex - 1)
//         : currentMonthIndex + 1
//     );
//   };
//   console.log(location);

//   return (
//     <section className="relative px-4 pt-12 pb-8 sm:py-20 overflow-visible z-20">
//       <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700 z-0"></div>
//       <div className="absolute inset-0 sm:hidden z-0 rounded-b-[2rem] overflow-hidden">
//         <div
//           className="absolute inset-0 bg-center bg-cover"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688')",
//           }}
//         ></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-500 to-red-700 opacity-70"></div>
//       </div>
//       <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10"></div>

//       <div className="relative z-20 max-w-6xl mx-auto">
//         <div className="text-center mb-8 sm:mb-12">
//           <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
//             Find Your Perfect Stay
//           </h1>
//           <p className="text-sm sm:text-lg text-white/90 mb-5 max-w-xl mx-auto">
//             Discover unique places to stay around the world with our curated
//             selection of hotels
//           </p>
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

//         <div className="bg-white p-3 rounded-xl shadow-2xl max-w-4xl mx-auto relative z-30">
//           <form onSubmit={handleSearch}>
//             <div className="flex flex-col sm:flex-row gap-2 relative z-30">
//               <div className="w-full">
//                 <LocationSearchInput
//                   value={location?.name || ""}
//                   onChange={(val) => setLocation({ ...location, name: val })}
//                   onSelect={(loc) => {
//                     setLocation(loc);
//                     setOpenDate(true);
//                   }}
//                 />
//               </div>

//               <div className="w-full relative" ref={datePickerRef}>
//                 <div
//                   className="flex items-center border border-gray-300 rounded-lg px-4 py-3 cursor-pointer"
//                   onClick={() => setOpenDate(!openDate)}
//                 >
//                   <Calendar className="text-gray-500 w-5 h-5 mr-2" />
//                   <span className="text-sm text-gray-700">
//                     {`${format(dateRange[0].startDate, "MMM dd")} - ${format(
//                       dateRange[0].endDate,
//                       "MMM dd"
//                     )}`}
//                   </span>
//                 </div>
//                 {openDate && (
//                   <div className="absolute top-16 left-0 z-50 bg-white p-4 rounded-lg shadow-xl border border-gray-200 w-full sm:w-[700px]">
//                     <div className="flex justify-between items-center mb-4">
//                       <button
//                         type="button"
//                         onClick={() => navigateDateRange("prev")}
//                         className="p-2 rounded-full hover:bg-gray-100"
//                       >
//                         <ChevronLeft className="w-5 h-5 text-gray-600" />
//                       </button>
//                       <div className="flex gap-2">
//                         <span className="font-medium">
//                           {format(dateRange[0].startDate, "MMMM yyyy")}
//                         </span>
//                         <span className="font-medium hidden sm:block">
//                           {format(
//                             addMonths(dateRange[0].startDate, 1),
//                             "MMMM yyyy"
//                           )}
//                         </span>
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => navigateDateRange("next")}
//                         className="p-2 rounded-full hover:bg-gray-100"
//                       >
//                         <ChevronRight className="w-5 h-5 text-gray-600" />
//                       </button>
//                     </div>
//                     <DateRange
//                       ranges={dateRange}
//                       onChange={(item) => setDateRange([item.selection])}
//                       minDate={new Date()}
//                       moveRangeOnFirstSelection={false}
//                       rangeColors={["#FF385C"]}
//                       showMonthAndYearPickers={false}
//                       showDateDisplay={false}
//                       months={window.innerWidth < 640 ? 1 : 2}
//                       direction="horizontal"
//                       editableDateInputs={true}
//                       className="w-full"
//                     />
//                     <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
//                       <button
//                         type="button"
//                         onClick={() =>
//                           setDateRange([
//                             {
//                               startDate: new Date(),
//                               endDate: new Date(
//                                 new Date().getTime() + 86400000
//                               ),
//                               key: "selection",
//                             },
//                           ])
//                         }
//                         className="text-sm text-gray-600 hover:text-gray-900"
//                       >
//                         Reset dates
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => setOpenDate(false)}
//                         className="px-4 py-2 bg-[#FF385C] text-white rounded-md text-sm hover:bg-[#e0314f]"
//                       >
//                         Apply dates
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3">
//                 <Users className="text-gray-500 w-5 h-5 mr-2" />
//                 <div className="flex items-center justify-between w-full">
//                   <span className="text-sm text-gray-700">
//                     {guests} {guests === 1 ? "guest" : "guests"}
//                   </span>
//                   <div className="flex items-center gap-2">
//                     <button
//                       type="button"
//                       onClick={() => setGuests(Math.max(1, guests - 1))}
//                       className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
//                     >
//                       <Minus className="w-4 h-4 text-gray-600" />
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setGuests(guests + 1)}
//                       className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
//                     >
//                       <Plus className="w-4 h-4 text-gray-600" />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-lg shadow-md transition font-medium text-sm bg-[#FF385C] hover:bg-[#e0314f] text-white"
//               >
//                 <Search className="w-5 h-5 mr-2" />
//                 Search
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Trust indicators moved below */}
//         <div className="mt-6 px-4 w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white text-center">
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
//               <Check className="w-3 h-3 text-white" />
//             </div>
//             <span>Verified properties</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
//               <Shield className="w-3 h-3 text-white" />
//             </div>
//             <span>Secure bookings</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
//               <Smile className="w-3 h-3 text-white" />
//             </div>
//             <span>24/7 customer support</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Star,
  SlidersHorizontal,
  Search,
  Check,
  Smile,
  Shield,
  X,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format, addMonths } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import LocationSearchInput from "../LocationSearchInput";

const HeroSection = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [location, setLocation] = useState(null);
  const [openDate, setOpenDate] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 86400000),
      key: "selection",
    },
  ]);
  const [guests, setGuests] = useState(1);
  const [priceRange, setPriceRange] = useState([50, 300]);
  const [rating, setRating] = useState(0);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const navigate = useNavigate();
  const datePickerRef = useRef(null);

  const toggleFilters = () => setShowFilters(!showFilters);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setOpenDate(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (!location || !location.name || location.name.trim() === "") {
      alert("Please select a location");
      return;
    }
    if (location) params.append("location", location.name);
    params.append("guests", guests);
    params.append("checkIn", dateRange[0].startDate.toISOString());
    params.append("checkOut", dateRange[0].endDate.toISOString());
    navigate(`/all-listings?${params.toString()}`);
  };

  const navigateDateRange = (direction) => {
    setDateRange([
      {
        startDate: addMonths(
          dateRange[0].startDate,
          direction === "prev" ? -1 : 1
        ),
        endDate: addMonths(dateRange[0].endDate, direction === "prev" ? -1 : 1),
        key: "selection",
      },
    ]);
    setCurrentMonthIndex(
      direction === "prev"
        ? Math.max(0, currentMonthIndex - 1)
        : currentMonthIndex + 1
    );
  };

  return (
    <section className="relative px-4 pt-12 pb-8 sm:py-20 overflow-visible z-20">
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700 z-0"></div>
      <div className="absolute inset-0 sm:hidden z-0 rounded-b-[2rem] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-500 to-red-700 opacity-70"></div>
      </div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10"></div>

      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Stay
          </h1>
          <p className="text-sm sm:text-lg text-white/90 mb-5 max-w-xl mx-auto">
            Discover unique places to stay around the world with our curated
            selection of hotels
          </p>
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

        <div className="bg-white p-3 rounded-xl shadow-2xl max-w-4xl mx-auto relative z-30">
          <form onSubmit={handleSearch}>
            <div className="flex flex-col sm:flex-row gap-2 relative z-30">
              <div className="w-full">
                <LocationSearchInput
                  value={location?.name || ""}
                  onChange={(val) =>
                    setLocation((prev) => ({ ...prev, name: val }))
                  }
                  onSelect={(loc) => {
                    setLocation(loc);
                    // Use setTimeout to ensure the date picker opens after the dropdown closes
                    setTimeout(() => {
                      setOpenDate(true);
                    }, 100);
                  }}
                />
              </div>

              <div className="w-full relative" ref={datePickerRef}>
                <div
                  className="flex items-center border border-gray-300 rounded-lg px-4 py-3 cursor-pointer"
                  onClick={() => setOpenDate(!openDate)}
                >
                  <Calendar className="text-gray-500 w-5 h-5 mr-2" />
                  <span className="text-sm text-gray-700">
                    {`${format(dateRange[0].startDate, "MMM dd")} - ${format(
                      dateRange[0].endDate,
                      "MMM dd"
                    )}`}
                  </span>
                </div>
                {openDate && (
                  <div className="absolute top-16 left-0 z-50 bg-white p-4 rounded-lg shadow-xl border border-gray-200 w-full sm:w-[700px]">
                    <div className="flex justify-between items-center mb-4">
                      <button
                        type="button"
                        onClick={() => navigateDateRange("prev")}
                        className="p-2 rounded-full hover:bg-gray-100"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                      </button>
                      <div className="flex gap-2">
                        <span className="font-medium">
                          {format(dateRange[0].startDate, "MMMM yyyy")}
                        </span>
                        <span className="font-medium hidden sm:block">
                          {format(
                            addMonths(dateRange[0].startDate, 1),
                            "MMMM yyyy"
                          )}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => navigateDateRange("next")}
                        className="p-2 rounded-full hover:bg-gray-100"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    <DateRange
                      ranges={dateRange}
                      onChange={(item) => setDateRange([item.selection])}
                      minDate={new Date()}
                      moveRangeOnFirstSelection={false}
                      rangeColors={["#FF385C"]}
                      showMonthAndYearPickers={false}
                      showDateDisplay={false}
                      months={window.innerWidth < 640 ? 1 : 2}
                      direction="horizontal"
                      editableDateInputs={true}
                      className="w-full"
                    />
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                      <button
                        type="button"
                        onClick={() =>
                          setDateRange([
                            {
                              startDate: new Date(),
                              endDate: new Date(
                                new Date().getTime() + 86400000
                              ),
                              key: "selection",
                            },
                          ])
                        }
                        className="text-sm text-gray-600 hover:text-gray-900"
                      >
                        Reset dates
                      </button>
                      <button
                        type="button"
                        onClick={() => setOpenDate(false)}
                        className="px-4 py-2 bg-[#FF385C] text-white rounded-md text-sm hover:bg-[#e0314f]"
                      >
                        Apply dates
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full flex items-center border border-gray-300 rounded-lg px-4 py-3">
                <Users className="text-gray-500 w-5 h-5 mr-2" />
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm text-gray-700">
                    {guests} {guests === 1 ? "guest" : "guests"}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setGuests(guests + 1)}
                      className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              <button className="w-full sm:w-auto flex items-center justify-center bg-[#FF385C] hover:bg-[#e0314f] text-white px-6 py-3 rounded-lg shadow-md transition font-medium text-sm">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Trust indicators moved below */}
        <div className="mt-6 px-4 w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white text-center">
          {" "}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span>Verified properties</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Shield className="w-3 h-3 text-white" />
            </div>
            <span>Secure bookings</span>{" "}
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Smile className="w-3 h-3 text-white" />{" "}
            </div>
            <span>24/7 customer support</span>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
