// import {
//   Shield,
//   Sparkles,
//   Heart,
//   Globe,
//   Tag,
//   Key,
//   Star,
//   StarIcon,
//   Calendar,
//   Users,
//   Home,
// } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// import CountUp from "./CountUp";
// import StatCard from "./StatCard";
// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: <Shield className="w-8 h-8 text-[#ff385c]" />,
//       title: "Verified Listings",
//       description:
//         "Every property undergoes rigorous verification so you book with confidence.",
//     },
//     {
//       icon: <Sparkles className="w-8 h-8 text-[#ff385c]" />,
//       title: "Unique Stays",
//       description:
//         "Discover treehouses, boutique villas, and homes with character—no generic hotels.",
//     },
//     {
//       icon: <Heart className="w-8 h-8 text-[#ff385c]" />,
//       title: "Personalized Matching",
//       description: "AI-powered recommendations tailored to your travel style.",
//     },
//     {
//       icon: <Globe className="w-8 h-8 text-[#ff385c]" />,
//       title: "Global Coverage",
//       description: "120+ countries with local experts to guide your stay.",
//     },
//     {
//       icon: <Tag className="w-8 h-8 text-[#ff385c]" />,
//       title: "Transparent Pricing",
//       description: "No hidden fees—see the total cost upfront.",
//     },
//     {
//       icon: <Key className="w-8 h-8 text-[#ff385c]" />,
//       title: "Instant Booking",
//       description: "Secure your stay instantly with real-time availability.",
//     },
//   ];
//   // const trustStats = [
//   //   {
//   //     icon: <Shield className="w-6 h-6" />,
//   //     value: "10,000+",
//   //     label: "Verified Stays",
//   //   },
//   //   { icon: <Globe className="w-6 h-6" />, value: "120+", label: "Countries" },
//   //   {
//   //     icon: <Heart className="w-6 h-6" />,
//   //     value: "98%",
//   //     label: "Satisfaction",
//   //   },
//   //   {
//   //     icon: <Users className="w-6 h-6" />,
//   //     value: "50,000+",
//   //     label: "Happy Guests",
//   //   },
//   //   { icon: <Calendar className="w-6 h-6" />, value: "24/7", label: "Support" },
//   // ];
//   const [counted, setCounted] = useState(false);
//   const componentRef = useRef(null);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   const trustStats = [
//     {
//       icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
//       value: 120,
//       suffix: "+",
//       label: "Countries Available",
//       duration: 2.0,
//     },
//     {
//       icon: <Home className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
//       value: 500000,
//       suffix: "+",
//       label: "Properties Listed",
//       duration: 2.5,
//     },
//     {
//       icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
//       value: 10,
//       suffix: "M+",
//       label: "Happy Travelers",
//       duration: 3.0,
//     },
//     {
//       icon: <Star className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
//       value: 4.9,
//       suffix: "/5",
//       label: "Average Rating",
//       duration: 1.5,
//     },
//     {
//       icon: <Heart className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
//       value: 98,
//       suffix: "%",
//       label: "Customer Satisfaction",
//       duration: 1.8,
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//         }
//       },
//       { threshold: 0.2 } // Trigger when 20% of component is visible
//     );

//     if (componentRef.current) {
//       observer.observe(componentRef.current);
//     }

//     return () => {
//       if (componentRef.current) {
//         observer.unobserve(componentRef.current);
//       }
//     };
//   }, [hasAnimated]);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
//             Why <span className="text-[#ff385c]">StayFindz</span> Stands Out
//           </h2>
//           <p className="text-lg text-[#717171] max-w-3xl mx-auto">
//             We redefine travel by focusing on what really matters—authentic
//             experiences and peace of mind.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-[#f7f7f7] p-8 rounded-xl hover:shadow-md transition-all border border-[#eeeeee] hover:border-[#ff385c]/20 hover:translate-y-[-0.325rem] duration-300"
//             >
//               <div className="flex items-start mb-4">
//                 <div className="p-3 bg-[#ff385c]/10 rounded-lg mr-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#111111]">
//                   {feature.title}
//                 </h3>
//               </div>
//               <p className="text-[#717171] pl-14">{feature.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Trust Badges */}
//         {/* <div className="mt-16 flex flex-wrap justify-center gap-6 items-center">
//           <div className="text-center px-6 py-3 bg-[#f7f7f7] rounded-lg">
//             <p className="text-sm text-[#717171]">
//               Rated <strong className="text-[#ff385c]">4.9/5</strong> stars
//             </p>
//             <div className="flex justify-center mt-1">
//               {[...Array(5)].map((_, i) => (
//                 <StarIcon
//                   key={i}
//                   className="w-4 h-4 fill-[#ff385c] text-[#ff385c]"
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="text-center px-6 py-3 bg-[#f7f7f7] rounded-lg">
//             <p className="text-sm text-[#717171]">
//               <strong className="text-[#ff385c]">10,000+</strong> verified stays
//             </p>
//           </div>
//           <div className="text-center px-6 py-3 bg-[#f7f7f7] rounded-lg">
//             <p className="text-sm text-[#717171]">
//               <strong className="text-[#ff385c]">24/7</strong> customer support
//             </p>
//           </div>
//         </div> */}
//         {/* <div className="mt-16 bg-white rounded-xl md:rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
//           <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8 md:mb-12">
//             "Every journey finds its home with{" "}
//             <span className="text-[#ff385c]">StayFinder</span>"
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
//             {trustStats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center text-center p-3 md:p-4 group hover:bg-[#ff385c]/5 rounded-lg transition-colors"
//               >
//                 <div className="p-2 md:p-3 bg-[#ff385c]/10 rounded-full mb-3 md:mb-4 group-hover:bg-[#ff385c]/20 transition-colors">
//                   {stat.icon}
//                 </div>
//                 <p className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
//                   {stat.value}
//                 </p>
//                 <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div> */}
//         <div
//           ref={componentRef}
//           className="mt-16 bg-white rounded-xl md:rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100"
//         >
//           <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8 md:mb-12">
//             "Every journey finds its home with{" "}
//             <span className="text-[#ff385c]">StayFindz</span>"
//           </h3>

//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
//             {trustStats.map((stat, index) => (
//               <StatCard key={index} stat={stat} shouldAnimate={hasAnimated} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
import {
  Shield,
  Sparkles,
  Heart,
  Globe,
  Tag,
  Key,
  Users,
  Home,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import StatCard from "./StatCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#ff385c]" />,
      title: "Verified Listings",
      description:
        "Every property undergoes verification so you book with confidence.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#ff385c]" />,
      title: "Unique Stays",
      description:
        "Discover treehouses, villas, and homes with character—no generic hotels.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#ff385c]" />,
      title: "Personalized Matching",
      description: "AI-powered recommendations tailored to your travel style.",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#ff385c]" />,
      title: "Global Coverage",
      description: "120+ countries with local experts to guide your stay.",
    },
    {
      icon: <Tag className="w-8 h-8 text-[#ff385c]" />,
      title: "Transparent Pricing",
      description: "No hidden fees—see the total cost upfront.",
    },
    {
      icon: <Key className="w-8 h-8 text-[#ff385c]" />,
      title: "Instant Booking",
      description: "Secure your stay instantly with real-time availability.",
    },
  ];

  const trustStats = [
    {
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
      value: 120,
      suffix: "+",
      label: "Countries Available",
      duration: 2.0,
    },
    {
      icon: <Home className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
      value: 500000,
      suffix: "+",
      label: "Properties Listed",
      duration: 2.5,
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
      value: 10,
      suffix: "M+",
      label: "Happy Travelers",
      duration: 3.0,
    },
    {
      icon: <Star className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
      value: 4.9,
      suffix: "/5",
      label: "Average Rating",
      duration: 1.5,
    },
    {
      icon: <Heart className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
      value: 98,
      suffix: "%",
      label: "Customer Satisfaction",
      duration: 1.8,
    },
  ];

  const componentRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (componentRef.current) observer.observe(componentRef.current);
    return () => {
      if (componentRef.current) observer.unobserve(componentRef.current);
    };
  }, [hasAnimated]);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] mb-3 md:mb-4">
            Why <span className="text-[#ff385c]">StayFindz</span> Stands Out
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#717171] max-w-3xl mx-auto">
            We redefine travel by focusing on what really matters—authentic
            experiences and peace of mind.
          </p>
        </div>

        {/* Features Grid (Visible on md and up) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] p-6 lg:p-8 rounded-xl hover:shadow-md transition-all border border-[#eeeeee] hover:border-[#ff385c]/20 hover:translate-y-[-0.325rem] duration-300"
            >
              <div className="flex items-start mb-3 lg:mb-4">
                <div className="p-2 lg:p-3 bg-[#ff385c]/10 rounded-lg mr-3 lg:mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-[#111111]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm lg:text-base text-[#717171] pl-12 lg:pl-14">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View - Vertical Slider */}
        <div className="md:hidden h-[800px]">
          <Swiper
            direction="vertical"
            slidesPerView={4}
            spaceBetween={16}
            mousewheel={true}
            className="h-full"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#f7f7f7] p-4 rounded-xl hover:shadow-md transition-all border border-[#eeeeee] hover:border-[#ff385c]/20 h-full">
                  <div className="flex items-start mb-2">
                    <div className="p-2 bg-[#ff385c]/10 rounded-lg mr-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-semibold text-[#111111]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#717171] pl-12">
                    {feature.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust stats */}
        <div
          ref={componentRef}
          className="mt-12 md:mt-16 bg-white rounded-xl md:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 border border-gray-100"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-900 mb-6 md:mb-12">
            "Every journey finds its home with{" "}
            <span className="text-[#ff385c]">StayFindz</span>"
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {trustStats.map((stat, index) => (
              <StatCard key={index} stat={stat} shouldAnimate={hasAnimated} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
