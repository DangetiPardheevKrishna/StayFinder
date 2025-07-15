import { ArrowRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const DestinationHighlights = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const cities = [
    {
      image:
        "https://images.unsplash.com/photo-1441911645956-df6e9bbc5496?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hyderabad",
      count: "1,500+ properties",
      gradient: "from-blue-500/80 to-teal-400/80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512850183-6d7990f42385?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pune",
      count: "1,200+ properties",
      gradient: "from-amber-500/80 to-rose-400/80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bangalore",
      count: "2,000+ properties",
      gradient: "from-purple-500/80 to-pink-400/80",
    },
  ];

  const navigate = useNavigate();

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

    const section = document.querySelector("#destination-highlights");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleCityClick = (cityName) => {
    navigate(`/all-listings?location=${encodeURIComponent(cityName)}`);
  };

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section
      id="destination-highlights"
      className="bg-[#f7f7f7] py-12 md:py-18"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Popular <span className="text-[#ff385c]">Indian Cities</span>
          </h2>
          <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover stays in India's most vibrant destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cities.map((city, index) => (
            <div
              key={index}
              className={`group relative h-80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer ${
                isVisible
                  ? `opacity-100 translate-y-0 delay-${index * 100}`
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transition: `all 0.5s ease-out ${index * 0.1}s`,
              }}
              onClick={() => handleCityClick(city.title)}
            >
              <div
                className={`absolute inset-0 bg-gray-200 transition-opacity duration-500 ${
                  loadedImages[index] ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <img
                src={city.image}
                alt={city.title}
                className={`w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${
                  loadedImages[index] ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-b ${city.gradient} flex flex-col justify-end p-6`}
              >
                <h3
                  className={`text-2xl font-bold text-white mb-1 transition-all duration-500 ${
                    isVisible ? "translate-y-0" : "translate-y-4"
                  }`}
                  style={{ transitionDelay: `${0.2 + index * 0.05}s` }}
                >
                  {city.title}
                </h3>
                <p
                  className={`text-white/90 transition-all duration-500 ${
                    isVisible ? "translate-y-0" : "translate-y-4"
                  }`}
                  style={{ transitionDelay: `${0.3 + index * 0.05}s` }}
                >
                  {city.count}
                </p>
                <button
                  className={`mt-3 text-left text-white font-medium flex items-center transition-opacity duration-300 ${
                    isVisible ? "opacity-0" : "opacity-0"
                  } group-hover:opacity-100`}
                  onClick={(e) => e.stopPropagation()}
                >
                  Explore now <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <button
            onClick={() => navigate("/all-listings")}
            className="inline-flex items-center text-[#ff385c] font-medium hover:text-[#e03148] transition-colors hover:translate-x-1 duration-300"
          >
            View all destinations <ChevronRight className="ml-1 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationHighlights;
