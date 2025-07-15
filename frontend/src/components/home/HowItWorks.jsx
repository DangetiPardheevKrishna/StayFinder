// import { CalendarDays, KeyRound, PlayCircle, Search, Star } from "lucide-react";

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: <Search className="w-8 h-8 text-[#ff385c]" />,
//       title: "Search Smart",
//       description: "Use our AI-powered filters to find exactly what you want",
//       highlight: "100+ filters available",
//     },
//     {
//       icon: <CalendarDays className="w-8 h-8 text-[#ff385c]" />,
//       title: "Book Seamlessly",
//       description: "Instant booking or request with 24-hour response guarantee",
//       highlight: "No booking fees",
//     },
//     {
//       icon: <KeyRound className="w-8 h-8 text-[#ff385c]" />,
//       title: "Enjoy Your Stay",
//       description:
//         "Access digital guidebooks and 24/7 support during your trip",
//       highlight: "Local tips included",
//     },
//     {
//       icon: <Star className="w-8 h-8 text-[#ff385c]" />,
//       title: "Share Your Experience",
//       description: "Earn rewards for reviews and help our community grow",
//       highlight: "Loyalty program",
//     },
//   ];

//   return (
//     <section className="bg-[#f7f7f7] py-16 md:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//             How <span className="text-[#ff385c]">StayFinder</span> Works
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             From dream to destination in just a few clicks
//           </p>
//         </div>

//         <div className="relative">
//           {/* Progress line */}
//           {/* <div className="hidden md:block absolute left-16 right-16 top-16 h-1 bg-gray-200 z-0"></div> */}

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
//             {steps.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#ff385c]/10 flex items-center justify-center border-2 border-white shadow-sm">
//                   <div className="relative">
//                     {step.icon}
//                     <span className="absolute -top-3 -right-3 bg-[#ff385c] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
//                       {index + 1}
//                     </span>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-600 mb-3">{step.description}</p>
//                 <span className="inline-block text-sm px-3 py-1 bg-[#ff385c]/10 text-[#ff385c] rounded-full">
//                   {step.highlight}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* <div className="mt-16 text-center">
//           <button className="px-8 py-3 bg-[#ff385c] text-white rounded-lg font-medium hover:bg-[#e03148] transition-colors shadow-sm hover:shadow-md inline-flex items-center gap-2">
//             <PlayCircle className="w-5 h-5" />
//             Watch How It Works
//           </button>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;
// import { useState } from "react";
// import {
//   CalendarDays,
//   KeyRound,
//   PlayCircle,
//   Search,
//   Star,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const HowItWorks = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const steps = [
//     {
//       icon: <Search className="w-8 h-8 text-[#ff385c]" />,
//       title: "Search Smart",
//       description: "Use our AI-powered filters to find exactly what you want",
//       highlight: "100+ filters available",
//     },
//     {
//       icon: <CalendarDays className="w-8 h-8 text-[#ff385c]" />,
//       title: "Book Seamlessly",
//       description: "Instant booking or request with 24-hour response guarantee",
//       highlight: "No booking fees",
//     },
//     {
//       icon: <KeyRound className="w-8 h-8 text-[#ff385c]" />,
//       title: "Enjoy Your Stay",
//       description:
//         "Access digital guidebooks and 24/7 support during your trip",
//       highlight: "Local tips included",
//     },
//     {
//       icon: <Star className="w-8 h-8 text-[#ff385c]" />,
//       title: "Share Your Experience",
//       description: "Earn rewards for reviews and help our community grow",
//       highlight: "Loyalty program",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
//   };

//   return (
//     <section className="bg-[#f7f7f7] py-16 md:py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
//             How <span className="text-[#ff385c]">StayFinder</span> Works
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             From dream to destination in just a few clicks
//           </p>
//         </div>

//         <div className="relative">
//           {/* Slider container */}
//           <div className="relative h-[400px] md:h-[300px] w-full overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {steps.map((step, index) => (
//                 <div key={index} className="w-full flex-shrink-0 px-4 md:px-8">
//                   <div className="bg-white rounded-xl shadow-sm p-8 h-full flex flex-col items-center text-center hover:shadow-md transition-shadow">
//                     <div className="mb-6 w-20 h-20 rounded-full bg-[#ff385c]/10 flex items-center justify-center">
//                       {step.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">
//                       {step.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4 flex-grow">
//                       {step.description}
//                     </p>
//                     <span className="inline-block text-sm px-3 py-1.5 bg-[#ff385c]/10 text-[#ff385c] rounded-full font-medium">
//                       {step.highlight}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6 text-[#ff385c]" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6 text-[#ff385c]" />
//           </button>

//           {/* Dots indicator */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {steps.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   currentSlide === index ? "bg-[#ff385c]" : "bg-gray-300"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

// import { useState, useEffect } from "react";
// import {
//   CalendarDays,
//   KeyRound,
//   Search,
//   Star,
//   ChevronRight,
//   MoveRight,
// } from "lucide-react";

// const HowItWorks = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     {
//       icon: <Search className="w-6 h-6" />,
//       title: "Search Smart",
//       description: "Use our AI-powered filters to find exactly what you want",
//       highlight: "100+ filters available",
//       color: "bg-blue-100 text-blue-600",
//     },
//     {
//       icon: <CalendarDays className="w-6 h-6" />,
//       title: "Book Seamlessly",
//       description: "Instant booking or request with 24-hour response guarantee",
//       highlight: "No booking fees",
//       color: "bg-purple-100 text-purple-600",
//     },
//     {
//       icon: <KeyRound className="w-6 h-6" />,
//       title: "Enjoy Your Stay",
//       description:
//         "Access digital guidebooks and 24/7 support during your trip",
//       highlight: "Local tips included",
//       color: "bg-green-100 text-green-600",
//     },
//     {
//       icon: <Star className="w-6 h-6" />,
//       title: "Share Your Experience",
//       description: "Earn rewards for reviews and help our community grow",
//       highlight: "Loyalty program",
//       color: "bg-amber-100 text-amber-600",
//     },
//   ];

//   // Auto-rotate steps
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#ff385c]/5 -skew-x-12 -translate-x-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#ff385c]/5 skew-x-12 translate-x-1/2"></div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block px-3 py-1 text-sm font-medium bg-[#ff385c]/10 text-[#ff385c] rounded-full mb-4">
//             Simple Process
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             How <span className="text-[#ff385c]">StayFindz</span> Works
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Your journey from searching to staying takes just minutes
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Circular timeline */}
//           <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0">
//             <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>

//             {steps.map((step, index) => {
//               const angle = index * 90 - 45; // 4 steps at 90° intervals
//               const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
//               const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);

//               return (
//                 <button
//                   key={index}
//                   onClick={() => setActiveStep(index)}
//                   className={`absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
//                     activeStep === index
//                       ? "scale-110 shadow-lg " +
//                         step.color.replace("100", "200")
//                       : "bg-white shadow-md hover:scale-105"
//                   } ${step.color}`}
//                   style={{
//                     left: `${x}%`,
//                     top: `${y}%`,
//                     transform: `translate(-50%, -50%) ${
//                       activeStep === index ? "scale(1.1)" : ""
//                     }`,
//                   }}
//                 >
//                   {step.icon}
//                 </button>
//               );
//             })}

//             {/* Active step content in center */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div
//                 className={`w-32 h-32 rounded-full flex items-center justify-center transition-colors duration-300 ${steps[
//                   activeStep
//                 ].color.replace("100", "50")}`}
//               >
//                 <span className="text-4xl font-bold text-gray-800">
//                   {activeStep + 1}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Step content */}
//           <div className="flex-grow">
//             <div className="relative h-64">
//               {steps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 p-6 bg-white rounded-xl shadow-sm transition-opacity duration-500 ${
//                     activeStep === index
//                       ? "opacity-100"
//                       : "opacity-0 pointer-events-none"
//                   }`}
//                 >
//                   <div className="flex flex-col h-full">
//                     <div className="flex items-center gap-3 mb-4">
//                       <span
//                         className={`w-10 h-10 rounded-full flex items-center justify-center ${step.color}`}
//                       >
//                         {step.icon}
//                       </span>
//                       <h3 className="text-2xl font-bold text-gray-900">
//                         {step.title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-600 text-lg mb-6 flex-grow">
//                       {step.description}
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <span
//                         className={`px-4 py-2 rounded-full text-sm font-medium ${step.color}`}
//                       >
//                         {step.highlight}
//                       </span>
//                       <button
//                         onClick={() =>
//                           setActiveStep(
//                             index === steps.length - 1 ? 0 : index + 1
//                           )
//                         }
//                         className="flex items-center gap-1 text-[#ff385c] hover:text-[#e03148] transition-colors"
//                       >
//                         Next step <MoveRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Mobile dots navigation */}
//         <div className="flex justify-center gap-2 mt-8 lg:hidden">
//           {steps.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveStep(index)}
//               className={`w-3 h-3 rounded-full transition-colors ${
//                 activeStep === index ? "bg-[#ff385c]" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;
// import { useState, useEffect } from "react";
// import { CalendarDays, KeyRound, Search, Star, MoveRight } from "lucide-react";

// const HowItWorks = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = [
//     {
//       icon: <Search className="w-6 h-6" />,
//       title: "Search Smart",
//       description: "Use our AI-powered filters to find exactly what you want",
//       highlight: "100+ filters available",
//       color: "bg-blue-100 text-blue-600",
//     },
//     {
//       icon: <CalendarDays className="w-6 h-6" />,
//       title: "Book Seamlessly",
//       description: "Instant booking or request with 24-hour response guarantee",
//       highlight: "No booking fees",
//       color: "bg-purple-100 text-purple-600",
//     },
//     {
//       icon: <KeyRound className="w-6 h-6" />,
//       title: "Enjoy Your Stay",
//       description:
//         "Access digital guidebooks and 24/7 support during your trip",
//       highlight: "Local tips included",
//       color: "bg-green-100 text-green-600",
//     },
//     {
//       icon: <Star className="w-6 h-6" />,
//       title: "Share Your Experience",
//       description: "Earn rewards for reviews and help our community grow",
//       highlight: "Loyalty program",
//       color: "bg-amber-100 text-amber-600",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute top-0 left-0 w-1/3 h-full bg-[#ff385c]/5 -skew-x-12 -translate-x-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#ff385c]/5 skew-x-12 translate-x-1/2"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
//         <div className="text-center mb-14">
//           <span className="inline-block px-3 py-1 text-sm font-medium bg-[#ff385c]/10 text-[#ff385c] rounded-full mb-4">
//             Simple Process
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
//             How <span className="text-[#ff385c]">StayFindz</span> Works
//           </h2>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
//             Your journey from searching to staying takes just minutes
//           </p>
//         </div>

//         {/* Responsive Layout */}
//         <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
//           {/* 📱 Mobile Step View */}
//           <div className="lg:hidden w-full">
//             <div className="relative h-64">
//               {steps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 p-5 bg-white rounded-xl shadow transition-opacity duration-500 ${
//                     activeStep === index
//                       ? "opacity-100"
//                       : "opacity-0 pointer-events-none"
//                   }`}
//                 >
//                   <div className="flex flex-col h-full justify-between">
//                     <div className="flex items-center gap-3 mb-4">
//                       <span
//                         className={`w-10 h-10 rounded-full flex items-center justify-center ${step.color}`}
//                       >
//                         {step.icon}
//                       </span>
//                       <h3 className="text-xl font-bold text-gray-900">
//                         {step.title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-600 mb-4 text-base">
//                       {step.description}
//                     </p>
//                     <div className="flex justify-between items-center">
//                       <span
//                         className={`px-3 py-1 text-sm rounded-full ${step.color}`}
//                       >
//                         {step.highlight}
//                       </span>
//                       <button
//                         onClick={() =>
//                           setActiveStep(
//                             index === steps.length - 1 ? 0 : index + 1
//                           )
//                         }
//                         className="flex items-center gap-1 text-[#ff385c] text-sm"
//                       >
//                         Next <MoveRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Step Dots */}
//             <div className="flex justify-center mt-6 gap-2">
//               {steps.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveStep(index)}
//                   className={`w-3 h-3 rounded-full ${
//                     activeStep === index ? "bg-[#ff385c]" : "bg-gray-300"
//                   }`}
//                 ></button>
//               ))}
//             </div>
//           </div>

//           {/* 🖥️ Desktop Circular Timeline */}
//           <div className="hidden lg:block relative w-80 h-80">
//             <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
//             {steps.map((step, index) => {
//               const angle = index * 90 - 45;
//               const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
//               const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);

//               return (
//                 <button
//                   key={index}
//                   onClick={() => setActiveStep(index)}
//                   className={`absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
//                     activeStep === index
//                       ? "scale-110 shadow-lg " +
//                         step.color.replace("100", "200")
//                       : "bg-white shadow-md hover:scale-105"
//                   } ${step.color}`}
//                   style={{
//                     left: `${x}%`,
//                     top: `${y}%`,
//                     transform: `translate(-50%, -50%) ${
//                       activeStep === index ? "scale(1.1)" : ""
//                     }`,
//                   }}
//                 >
//                   {step.icon}
//                 </button>
//               );
//             })}

//             <div className="absolute inset-0 flex items-center justify-center">
//               <div
//                 className={`w-32 h-32 rounded-full flex items-center justify-center ${steps[
//                   activeStep
//                 ].color.replace("100", "50")}`}
//               >
//                 <span className="text-4xl font-bold text-gray-800">
//                   {activeStep + 1}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* 🖥️ Desktop Step Details */}
//           <div className="hidden lg:block flex-grow">
//             <div className="relative h-64">
//               {steps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`absolute inset-0 p-6 bg-white rounded-xl shadow transition-opacity duration-500 ${
//                     activeStep === index
//                       ? "opacity-100"
//                       : "opacity-0 pointer-events-none"
//                   }`}
//                 >
//                   <div className="flex flex-col h-full">
//                     <div className="flex items-center gap-3 mb-4">
//                       <span
//                         className={`w-10 h-10 rounded-full flex items-center justify-center ${step.color}`}
//                       >
//                         {step.icon}
//                       </span>
//                       <h3 className="text-2xl font-bold text-gray-900">
//                         {step.title}
//                       </h3>
//                     </div>
//                     <p className="text-gray-600 text-lg mb-6 flex-grow">
//                       {step.description}
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <span
//                         className={`px-4 py-2 rounded-full text-sm font-medium ${step.color}`}
//                       >
//                         {step.highlight}
//                       </span>
//                       <button
//                         onClick={() =>
//                           setActiveStep(
//                             index === steps.length - 1 ? 0 : index + 1
//                           )
//                         }
//                         className="flex items-center gap-1 text-[#ff385c] hover:text-[#e03148] transition"
//                       >
//                         Next step <MoveRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;
import { useState, useEffect } from "react";
import { CalendarDays, KeyRound, Search, Star, MoveRight } from "lucide-react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search Smart",
      description: "Use our AI-powered filters to find exactly what you want",
      highlight: "100+ filters available",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <CalendarDays className="w-6 h-6" />,
      title: "Book Seamlessly",
      description: "Instant booking or request with 24-hour response guarantee",
      highlight: "No booking fees",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <KeyRound className="w-6 h-6" />,
      title: "Enjoy Your Stay",
      description:
        "Access digital guidebooks and 24/7 support during your trip",
      highlight: "Local tips included",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Share Your Experience",
      description: "Earn rewards for reviews and help our community grow",
      highlight: "Loyalty program",
      color: "bg-amber-100 text-amber-600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#how-it-works");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div
        className={`absolute top-0 left-0 w-1/3 h-full bg-[#ff385c]/5 -skew-x-12 -translate-x-1/2 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0 -translate-x-2/3"
        }`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-1/3 h-full bg-[#ff385c]/5 skew-x-12 translate-x-1/2 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0 translate-x-2/3"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-14 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span
            className={`inline-block px-3 py-1 text-sm font-medium bg-[#ff385c]/10 text-[#ff385c] rounded-full mb-4 transition-all duration-500 ${
              isVisible ? "scale-100" : "scale-90"
            }`}
          >
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            How <span className="text-[#ff385c]">StayFindz</span> Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey from searching to staying takes just minutes
          </p>
        </div>

        {/* Responsive Layout */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* 📱 Mobile Step View */}
          <div className="lg:hidden w-full">
            <div className="relative h-64">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-5 bg-white rounded-xl shadow transition-all duration-500 ease-out ${
                    activeStep === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.color
                        } transition-all duration-300 ${
                          activeStep === index ? "scale-100" : "scale-90"
                        }`}
                      >
                        {step.icon}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-base">
                      {step.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          step.color
                        } transition-all duration-300 ${
                          activeStep === index ? "scale-100" : "scale-90"
                        }`}
                      >
                        {step.highlight}
                      </span>
                      <button
                        onClick={() =>
                          setActiveStep(
                            index === steps.length - 1 ? 0 : index + 1
                          )
                        }
                        className="flex items-center gap-1 text-[#ff385c] text-sm hover:translate-x-1 transition-transform"
                      >
                        Next <MoveRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Step Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index
                      ? "bg-[#ff385c] scale-125"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* 🖥️ Desktop Circular Timeline */}
          <div className="hidden lg:block relative w-80 h-80">
            <div
              className={`absolute inset-0 rounded-full border-2 border-gray-200 transition-all duration-1000 ease-out ${
                isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
            ></div>
            {steps.map((step, index) => {
              const angle = index * 90 - 45;
              const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
              const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);

              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`absolute w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ease-out ${
                    activeStep === index
                      ? "scale-110 shadow-lg " +
                        step.color.replace("100", "200")
                      : "bg-white shadow-md hover:scale-105"
                  } ${step.color} ${isVisible ? "opacity-100" : "opacity-0"}`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) ${
                      activeStep === index ? "scale(1.1)" : ""
                    }`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {step.icon}
                </button>
              );
            })}

            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
            >
              <div
                className={`w-32 h-32 rounded-full flex items-center justify-center ${steps[
                  activeStep
                ].color.replace("100", "50")} transition-all duration-500`}
              >
                <span className="text-4xl font-bold text-gray-800">
                  {activeStep + 1}
                </span>
              </div>
            </div>
          </div>

          {/* 🖥️ Desktop Step Details */}
          <div className="hidden lg:block flex-grow">
            <div className="relative h-64">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-6 bg-white rounded-xl shadow transition-all duration-500 ease-out ${
                    activeStep === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.color
                        } transition-all duration-300 ${
                          activeStep === index ? "scale-100" : "scale-90"
                        }`}
                      >
                        {step.icon}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-6 flex-grow">
                      {step.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          step.color
                        } transition-all duration-300 ${
                          activeStep === index ? "scale-100" : "scale-90"
                        }`}
                      >
                        {step.highlight}
                      </span>
                      <button
                        onClick={() =>
                          setActiveStep(
                            index === steps.length - 1 ? 0 : index + 1
                          )
                        }
                        className="flex items-center gap-1 text-[#ff385c] hover:text-[#e03148] transition hover:translate-x-1"
                      >
                        Next step <MoveRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
