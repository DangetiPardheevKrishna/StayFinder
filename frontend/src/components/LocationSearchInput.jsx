// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import { MapPin } from "lucide-react";

// // export default function LocationSearchInput({ value, onSelect, onChange }) {
// //   const [query, setQuery] = useState(value || "");
// //   const [suggestions, setSuggestions] = useState([]);
// //   const [isFocused, setIsFocused] = useState(false);

// //   useEffect(() => {
// //     onChange?.(query);
// //   }, [query]);

// //   useEffect(() => {
// //     if (query.length < 2) {
// //       setSuggestions([]);
// //       return;
// //     }

// //     const fetchSuggestions = async () => {
// //       try {
// //         const res = await axios.get(
// //           "https://nominatim.openstreetmap.org/search",
// //           {
// //             params: {
// //               q: query,
// //               format: "json",
// //               addressdetails: 1,
// //               limit: 5,
// //             },
// //             headers: {
// //               "Accept-Language": "en",
// //             },
// //           }
// //         );

// //         const filtered = res.data.filter((item) =>
// //           ["city", "town", "village"].includes(item.type)
// //         );

// //         const results = filtered.map((item) => {
// //           const a = item.address;
// //           const shortName =
// //             a.city || a.town || a.village || item.display_name.split(",")[0];
// //           return {
// //             name: `${shortName}, ${a.country || ""}`,
// //             lat: item.lat,
// //             lng: item.lon,
// //           };
// //         });

// //         setSuggestions(results);
// //       } catch (err) {
// //         console.error("Nominatim error:", err);
// //       }
// //     };

// //     const delay = setTimeout(fetchSuggestions, 300);
// //     return () => clearTimeout(delay);
// //   }, [query]);

// //   const handleSelect = (loc) => {
// //     setQuery(loc.name);
// //     setSuggestions([]);
// //     onSelect?.(loc);
// //   };

// //   return (
// //     <div className="w-full relative">
// //       <div
// //         className={`flex items-center border ${
// //           isFocused ? "border-gray-500 ring-1 ring-gray-200" : "border-gray-300"
// //         } rounded-lg px-4 py-3 transition-all duration-200`}
// //       >
// //         <MapPin className="text-gray-500 w-5 h-5 mr-2 flex-shrink-0" />
// //         <input
// //           type="text"
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           onFocus={() => setIsFocused(true)}
// //           onBlur={() => setTimeout(() => setIsFocused(false), 200)}
// //           placeholder="Where are you going?"
// //           className="w-full border-0 focus:outline-none focus:ring-0 bg-transparent text-gray-700 text-sm placeholder-gray-400"
// //         />
// //       </div>

// //       {suggestions.length > 0 && (
// //         <ul className="absolute z-50 top-full mt-1 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-200">
// //           {suggestions.map((loc, i) => (
// //             <li
// //               key={i}
// //               onClick={() => handleSelect(loc)}
// //               className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm flex items-center gap-2 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
// //             >
// //               <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
// //               <span className="truncate">{loc.name}</span>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { MapPin } from "lucide-react";

// export default function LocationSearchInput({ value, onSelect, onChange }) {
//   const [query, setQuery] = useState(value || "");
//   const [suggestions, setSuggestions] = useState([]);
//   const [isFocused, setIsFocused] = useState(false);

//   useEffect(() => {
//     onChange?.(query);
//   }, [query]);

//   useEffect(() => {
//     if (query.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     const fetchSuggestions = async () => {
//       try {
//         const res = await axios.get(
//           "https://api.geoapify.com/v1/geocode/autocomplete",
//           {
//             params: {
//               text: query,
//               limit: 5,
//               lang: "en",
//               apiKey: "a54906334f2a436f828238767f4b34a3", // Replace this
//               filter: "countrycode:in", // Optional: restrict to India
//             },
//           }
//         );

//         const results = res.data.features.map((feature) => ({
//           name: feature.properties.formatted,
//           lat: feature.properties.lat,
//           lng: feature.properties.lon,
//         }));

//         setSuggestions(results);
//       } catch (err) {
//         console.error("Geoapify error:", err);
//       }
//     };

//     const delay = setTimeout(fetchSuggestions, 300);
//     return () => clearTimeout(delay);
//   }, [query]);

//   const handleSelect = (loc) => {
//     setQuery(loc.name);
//     setSuggestions([]);
//     onSelect?.(loc);
//   };
//   function extractCityFrom(fullName) {
//     // "Pune, MH, India" => "Pune"
//     return fullName.split(",")[0].trim().toLowerCase();
//   }
//   return (
//     <div className="w-full relative">
//       <div
//         className={`flex items-center border ${
//           isFocused ? "border-gray-500 ring-1 ring-gray-200" : "border-gray-300"
//         } rounded-lg px-4 py-3 transition-all duration-200`}
//       >
//         <MapPin className="text-gray-500 w-5 h-5 mr-2 flex-shrink-0" />
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setTimeout(() => setIsFocused(false), 200)}
//           onSelect={(loc) => {
//             const city = extractCityFrom(loc.name);
//             setLocation(city);
//           }}
//           placeholder="Where are you going?"
//           className="w-full border-0 focus:outline-none focus:ring-0 bg-transparent text-gray-700 text-sm placeholder-gray-400"
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul className="absolute z-50 top-full mt-1 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-200">
//           {suggestions.map((loc, i) => (
//             <li
//               key={i}
//               onClick={() => handleSelect(loc)}
//               className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm flex items-center gap-2 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
//             >
//               <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
//               <span className="truncate">{loc.name}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// // }
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { MapPin } from "lucide-react";

// export default function LocationSearchInput({ value, onSelect, onChange }) {
//   const [query, setQuery] = useState(value || "");
//   const [suggestions, setSuggestions] = useState([]);
//   const [isFocused, setIsFocused] = useState(false);

//   useEffect(() => {
//     onChange?.(query);
//   }, [query]);

//   useEffect(() => {
//     if (query.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     const fetchSuggestions = async () => {
//       try {
//         const res = await axios.get(
//           "https://api.geoapify.com/v1/geocode/autocomplete",
//           {
//             params: {
//               text: query,
//               limit: 5,
//               lang: "en",
//               apiKey: "a54906334f2a436f828238767f4b34a3",
//               filter: "countrycode:in",
//             },
//           }
//         );

//         const results = res.data.features.map((feature) => ({
//           name: feature.properties.formatted,
//           lat: feature.properties.lat,
//           lng: feature.properties.lon,
//         }));

//         setSuggestions(results);
//       } catch (err) {
//         console.error("Geoapify error:", err);
//       }
//     };

//     const delay = setTimeout(fetchSuggestions, 300);
//     return () => clearTimeout(delay);
//   }, [query]);

//   const handleSelect = (loc) => {
//     setQuery(loc.name);
//     setSuggestions([]);
//     onSelect?.(loc); // sends { name, lat, lng }
//   };

//   return (
//     <div className="w-full relative">
//       <div
//         className={`flex items-center border ${
//           isFocused ? "border-gray-500 ring-1 ring-gray-200" : "border-gray-300"
//         } rounded-lg px-4 py-3 transition-all duration-200`}
//       >
//         <MapPin className="text-gray-500 w-5 h-5 mr-2" />
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setTimeout(() => setIsFocused(false), 200)}
//           placeholder="Where are you going?"
//           className="w-full border-0 focus:outline-none bg-transparent text-gray-700 text-sm placeholder-gray-400"
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul className="absolute z-50 top-full mt-1 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
//           {suggestions.map((loc, i) => (
//             <li
//               key={i}
//               onClick={() => handleSelect(loc)}
//               className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm flex items-center gap-2 border-b border-gray-100 last:border-b-0"
//             >
//               <MapPin className="w-4 h-4 text-gray-500" />
//               <span className="truncate">{loc.name}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// // }
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { MapPin } from "lucide-react";

// export default function LocationSearchInput({ value, onSelect, onChange }) {
//   const [query, setQuery] = useState(value || "");
//   const [suggestions, setSuggestions] = useState([]);
//   const [isFocused, setIsFocused] = useState(false);

//   useEffect(() => {
//     // Sync prop value from parent
//     setQuery(value || "");
//   }, [value]);

//   useEffect(() => {
//     onChange?.(query);
//   }, [query]);

//   useEffect(() => {
//     if (query.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     const fetchSuggestions = async () => {
//       try {
//         const res = await axios.get(
//           "https://api.geoapify.com/v1/geocode/autocomplete",
//           {
//             params: {
//               text: query,
//               limit: 5,
//               lang: "en",
//               apiKey: "a54906334f2a436f828238767f4b34a3",
//               filter: "countrycode:in",
//             },
//           }
//         );

//         const results = res.data.features.map((feature) => ({
//           name: feature.properties.formatted,
//           lat: feature.properties.lat,
//           lng: feature.properties.lon,
//         }));

//         setSuggestions(results);
//       } catch (err) {
//         console.error("Geoapify error:", err);
//       }
//     };

//     const delay = setTimeout(fetchSuggestions, 300);
//     return () => clearTimeout(delay);
//   }, [query]);

//   const handleSelect = (loc) => {
//     setQuery(loc.name); // show selected location in input
//     setSuggestions([]); // hide dropdown
//     onSelect?.(loc); // pass full location object to parent
//   };

//   return (
//     <div className="w-full relative">
//       <div
//         className={`flex items-center border ${
//           isFocused ? "border-gray-500 ring-1 ring-gray-200" : "border-gray-300"
//         } rounded-lg px-4 py-3 transition-all duration-200`}
//       >
//         <MapPin className="text-gray-500 w-5 h-5 mr-2" />
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setTimeout(() => setIsFocused(false), 150)}
//           placeholder="Where are you going?"
//           className="w-full border-0 focus:outline-none bg-transparent text-gray-700 text-sm placeholder-gray-400"
//         />
//       </div>

//       {isFocused && suggestions.length > 0 && (
//         <ul className="absolute z-50 top-full mt-1 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
//           {suggestions.map((loc, i) => (
//             <li
//               key={i}
//               onMouseDown={(e) => {
//                 e.preventDefault(); // prevent blur firing before select
//                 handleSelect(loc);
//               }}
//               className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm flex items-center gap-2 border-b border-gray-100 last:border-b-0"
//             >
//               <MapPin className="w-4 h-4 text-gray-500" />
//               <span className="truncate">{loc.name}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { MapPin } from "lucide-react";

// export default function LocationSearchInput({ value, onSelect, onChange }) {
//   const [query, setQuery] = useState(value || "");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const inputRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     setQuery(value || "");
//   }, [value]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(event.target)
//       ) {
//         setShowSuggestions(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     if (!showSuggestions) return;
//     if (query.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     const fetchSuggestions = async () => {
//       try {
//         const res = await axios.get(
//           "https://api.geoapify.com/v1/geocode/autocomplete",
//           {
//             params: {
//               text: query,
//               limit: 5,
//               lang: "en",
//               apiKey: "a54906334f2a436f828238767f4b34a3",
//               filter: "countrycode:in",
//             },
//           }
//         );

//         const results = res.data.features.map((feature) => ({
//           name: feature.properties.formatted,
//           lat: feature.properties.lat,
//           lng: feature.properties.lon,
//         }));

//         setSuggestions(results);
//       } catch (err) {
//         console.error("Geoapify error:", err);
//       }
//     };

//     const delay = setTimeout(fetchSuggestions, 300);
//     return () => clearTimeout(delay);
//   }, [query, showSuggestions]);

//   const handleSelect = (loc) => {
//     setQuery(loc.name);
//     setShowSuggestions(false);
//     onSelect?.(loc);
//     inputRef.current?.blur(); // Remove focus from input after selection
//   };

//   return (
//     <div className="w-full relative" ref={containerRef}>
//       <div
//         className={`flex items-center border ${
//           showSuggestions
//             ? "border-gray-500 ring-1 ring-gray-200"
//             : "border-gray-300"
//         } rounded-lg px-4 py-3 transition-all duration-200`}
//       >
//         <MapPin className="text-gray-500 w-5 h-5 mr-2" />
//         <input
//           ref={inputRef}
//           type="text"
//           value={query}
//           onChange={(e) => {
//             setQuery(e.target.value);
//             onChange?.(e.target.value);
//           }}
//           onFocus={() => setShowSuggestions(true)}
//           placeholder="Where are you going?"
//           className="w-full border-0 focus:outline-none bg-transparent text-gray-700 text-sm placeholder-gray-400"
//         />
//       </div>

//       {showSuggestions && suggestions.length > 0 && (
//         <ul className="absolute z-50 top-full mt-1 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
//           {suggestions.map((loc, i) => (
//             <li
//               key={i}
//               onMouseDown={(e) => {
//                 e.preventDefault(); // prevent blur firing before select
//                 handleSelect(loc);
//               }}
//               className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm flex items-center gap-2 border-b border-gray-100 last:border-b-0"
//             >
//               <MapPin className="w-4 h-4 text-gray-500" />
//               <span className="truncate">{loc.name}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MapPin } from "lucide-react";

export default function LocationSearchInput({ value, onSelect, onChange }) {
  const [query, setQuery] = useState(value || "");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setQuery(value || "");
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!showSuggestions) return;
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const res = await axios.get(
          "https://api.geoapify.com/v1/geocode/autocomplete",
          {
            params: {
              text: query,
              limit: 5,
              lang: "en",
              apiKey: "a54906334f2a436f828238767f4b34a3",
              filter: "countrycode:in",
            },
          }
        );

        const results = res.data.features.map((feature) => ({
          fullName: feature.properties.formatted,
          primaryName: feature.properties.formatted.split(",")[0].trim(),
          lat: feature.properties.lat,
          lng: feature.properties.lon,
        }));

        setSuggestions(results);
      } catch (err) {
        console.error("Geoapify error:", err);
      }
    };

    const delay = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(delay);
  }, [query, showSuggestions]);

  const handleSelect = (loc) => {
    // Use the full name for display but primary name for search
    setQuery(loc.fullName);
    setShowSuggestions(false);
    // Pass both names to parent, but use primaryName for search
    onSelect?.({
      ...loc,
      name: loc.primaryName, // This will be used for search
      displayName: loc.fullName, // This will be shown in the input
    });
    inputRef.current?.blur();
  };

  return (
    <div className="w-full relative" ref={containerRef}>
      <div
        className={`flex items-center border ${
          showSuggestions
            ? "border-gray-500 ring-1 ring-gray-200"
            : "border-gray-300"
        } rounded-lg px-4 py-3 transition-all duration-200`}
      >
        <MapPin className="text-gray-500 w-5 h-5 mr-2" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange?.(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Where are you going?"
          className="w-full border-0 focus:outline-none bg-transparent text-gray-700 text-sm placeholder-gray-400"
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-50 top-full mt-1 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {suggestions.map((loc, i) => (
            <li
              key={i}
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(loc);
              }}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm flex items-center gap-2 border-b border-gray-100 last:border-b-0"
            >
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="truncate">{loc.fullName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
