import {
  MapPin,
  Star,
  Heart,
  ChevronDown,
  Globe,
  Mountain,
  Umbrella,
  Landmark,
  Compass,
  Calendar,
  Filter,
  Search,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Destinations = () => {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Destination categories
  const categories = [
    {
      id: "all",
      name: "All Destinations",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      id: "cities",
      name: "Top Cities",
      icon: <Landmark className="w-5 h-5" />,
    },
    {
      id: "beaches",
      name: "Beach Escapes",
      icon: <Umbrella className="w-5 h-5" />,
    },
    {
      id: "mountains",
      name: "Mountain Retreats",
      icon: <Mountain className="w-5 h-5" />,
    },
    {
      id: "hidden",
      name: "Hidden Gems",
      icon: <Compass className="w-5 h-5" />,
    },
  ];

  // All destinations data
  const allDestinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      location: "Cyclades, Greece",
      image:
        "https://images.unsplash.com/photo-1688664562000-4c1f7cdb48f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "12000",
      rating: 4.9,
      category: "beaches",
      featured: true,
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      location: "Kansai Region, Japan",
      image:
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: "9500",
      rating: 4.8,
      category: "cities",
      featured: true,
    },
    {
      id: 3,
      name: "Banff National Park",
      location: "Alberta, Canada",
      image:
        "https://images.unsplash.com/photo-1500581276021-a4bbcd0050c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: "7500",
      rating: 4.7,
      category: "mountains",
      featured: false,
    },
    {
      id: 4,
      name: "Bali, Indonesia",
      location: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1518544866330-95a329062e9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: "6500",
      rating: 4.8,
      category: "beaches",
      featured: false,
    },
    {
      id: 5,
      name: "Paris, France",
      location: "Île-de-France, France",
      image:
        "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: "11000",
      rating: 4.7,
      category: "cities",
      featured: true,
    },
    {
      id: 6,
      name: "Hallstatt, Austria",
      location: "Salzkammergut, Austria",
      image:
        "https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: "8500",
      rating: 4.9,
      category: "hidden",
      featured: false,
    },
    {
      id: 7,
      name: "Queenstown, New Zealand",
      location: "South Island, NZ",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "10500",
      rating: 4.8,
      category: "mountains",
      featured: true,
    },
    {
      id: 8,
      name: "Chefchaouen, Morocco",
      location: "Rif Mountains, Morocco",
      image:
        "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      price: "55000",
      rating: 4.6,
      category: "hidden",
      featured: false,
    },
  ];

  // Filter destinations based on active category
  const filteredDestinations =
    activeCategory === "all"
      ? allDestinations
      : allDestinations.filter((dest) => dest.category === activeCategory);

  // Featured destinations
  const featuredDestinations = allDestinations.filter((dest) => dest.featured);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#ff385c]/10 to-[#ff914d]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-[#ff385c]">Discover</span> Your Next
              Adventure
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore hand-picked destinations around the globe and find your
              perfect getaway
            </p>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Destinations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/30 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{destination.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Travel With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make discovering and booking your perfect getaway effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#ff385c]/10 rounded-full w-max mb-4">
                <Star className="w-8 h-8 text-[#ff385c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Curated Selection
              </h3>
              <p className="text-gray-600">
                Every destination is hand-picked by our travel experts to ensure
                exceptional quality and experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#ff385c]/10 rounded-full w-max mb-4">
                <ShieldCheck className="w-8 h-8 text-[#ff385c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Trust & Safety
              </h3>
              <p className="text-gray-600">
                Verified listings, secure payments, and 24/7 support give you
                peace of mind while traveling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#ff385c]/10 rounded-full w-max mb-4">
                <Calendar className="w-8 h-8 text-[#ff385c]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Flexible Booking
              </h3>
              <p className="text-gray-600">
                Easy cancellations and date changes on most properties when
                plans shift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#ff385c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Travel Inspiration</h2>
          <p className="text-xl mb-8">
            Sign up for weekly destination highlights and exclusive deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-[#ff385c] font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-white/80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
