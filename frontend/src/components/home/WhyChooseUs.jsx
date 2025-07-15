import {
  Shield,
  Sparkles,
  Heart,
  Globe,
  Tag,
  Key,
  Star,
  StarIcon,
  Calendar,
  Users,
  Home,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import CountUp from "./CountUp";
import StatCard from "./StatCard";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#ff385c]" />,
      title: "Verified Listings",
      description:
        "Every property undergoes rigorous verification so you book with confidence.",
    },
    {
      icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#ff385c]" />,
      title: "Unique Stays",
      description:
        "Discover treehouses, boutique villas, and homes with character—no generic hotels.",
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8 text-[#ff385c]" />,
      title: "Personalized Matching",
      description: "AI-powered recommendations tailored to your travel style.",
    },
    {
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-[#ff385c]" />,
      title: "Global Coverage",
      description: "120+ countries with local experts to guide your stay.",
    },
    {
      icon: <Tag className="w-6 h-6 md:w-8 md:h-8 text-[#ff385c]" />,
      title: "Transparent Pricing",
      description: "No hidden fees—see the total cost upfront.",
    },
    {
      icon: <Key className="w-6 h-6 md:w-8 md:h-8 text-[#ff385c]" />,
      title: "Instant Booking",
      description: "Secure your stay instantly with real-time availability.",
    },
  ];

  const trustStats = [
    {
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
      value: 120,
      suffix: "+",
      label: "Countries",
      duration: 2.0,
    },
    {
      icon: <Home className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
      value: 500000,
      suffix: "+",
      label: "Properties",
      duration: 2.5,
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
      value: 10,
      suffix: "M+",
      label: "Travelers",
      duration: 3.0,
    },
    {
      icon: <Star className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
      value: 4.9,
      suffix: "/5",
      label: "Rating",
      duration: 1.5,
    },
    {
      icon: <Heart className="w-5 h-5 md:w-6 md:h-6 text-[#ff385c]" />,
      value: 98,
      suffix: "%",
      label: "Satisfaction",
      duration: 1.8,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

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

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <section ref={componentRef} className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#111111] mb-3">
            Why <span className="text-[#ff385c]">StayFindz</span> Stands Out
          </h2>
          <p className="text-base md:text-lg text-[#717171] max-w-3xl mx-auto">
            We redefine travel by focusing on what really matters—authentic
            experiences and peace of mind.
          </p>
        </div>

        {/* Features Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-[#f7f7f7] p-4 md:p-6 rounded-lg md:rounded-xl hover:shadow-md transition-all border border-[#eeeeee] hover:border-[#ff385c]/20 hover:-translate-y-1 duration-300 ${
                isVisible
                  ? `opacity-100 translate-y-0 delay-${index * 100}`
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start mb-3 md:mb-4">
                <div className="p-2 md:p-3 bg-[#ff385c]/10 rounded-lg mr-3 md:mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl sm:lg font-semibold text-[#111111]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#717171] pl-12 md:pl-14">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-12 md:mt-16 bg-white rounded-lg md:rounded-2xl shadow-sm p-4 md:p-8 border border-gray-100 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <h3
            className={`text-lg md:text-2xl font-bold text-center text-gray-900 mb-6 md:mb-12 transition-all duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            "Every journey finds its home with{" "}
            <span className="text-[#ff385c]">StayFindz</span>"
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
            {trustStats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-2 md:p-4 group hover:bg-[#ff385c]/5 rounded-lg transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 100 + 400}ms`,
                }}
              >
                <div className="p-1 md:p-2 bg-[#ff385c]/10 rounded-full mb-2 md:mb-3 group-hover:bg-[#ff385c]/20 transition-colors">
                  {stat.icon}
                </div>
                {isVisible ? (
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    className="text-lg md:text-2xl font-bold text-gray-900 mb-1"
                  />
                ) : (
                  <p className="text-lg md:text-2xl font-bold text-gray-900 mb-1">
                    0{stat.suffix}
                  </p>
                )}
                <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
