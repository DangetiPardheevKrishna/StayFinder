import { Star, MapPin, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";

const Experiences = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const experiences = [
    {
      id: 1,
      title: "Tokyo Night Food Tour with StayFindz",
      image:
        "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      reviews: 128,
      location: "Tokyo, Japan",
      duration: "3 hours",
      category: "food",
      description:
        "Our travelers loved exploring hidden izakayas and street food stalls in Shinjuku with our local StayFindz guides.",
    },
    {
      id: 2,
      title: "Costa Rican Rainforest Adventure",
      image:
        "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      reviews: 96,
      location: "Monteverde, Costa Rica",
      duration: "2.5 hours",
      category: "adventure",
      description:
        "StayFindz adventurers enjoyed soaring through the cloud forest canopy on this unforgettable experience.",
    },
    {
      id: 3,
      title: "Venetian Mask-Making with StayFindz",
      image:
        "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      reviews: 64,
      location: "Venice, Italy",
      duration: "2 hours",
      category: "culture",
      description:
        "Our guests loved learning the 700-year-old tradition of Venetian mask-making from master artisans.",
    },
    {
      id: 4,
      title: "Marrakech Cultural Journey",
      image:
        "https://images.unsplash.com/photo-1515542622106-78bda8af0e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      reviews: 112,
      location: "Marrakech, Morocco",
      duration: "4 hours",
      category: "food",
      description:
        "StayFindz travelers enjoyed shopping in vibrant souks and preparing authentic Moroccan feasts.",
    },
    {
      id: 5,
      title: "Iceland Glacier Exploration",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      reviews: 87,
      location: "Skaftafell, Iceland",
      duration: "5 hours",
      category: "adventure",
      description:
        "Our guests had an amazing time hiking across ancient blue ice with expert StayFindz guides.",
    },
    {
      id: 6,
      title: "Kyoto Tea Ceremony with StayFindz",
      image:
        "https://images.unsplash.com/photo-1560964645-5296b5099677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      reviews: 53,
      location: "Kyoto, Japan",
      duration: "1.5 hours",
      category: "culture",
      description:
        "Travelers cherished this authentic Japanese tea ceremony experience in a historic machiya townhouse.",
    },
  ];

  const filteredExperiences =
    activeFilter === "all"
      ? experiences
      : experiences.filter((exp) => exp.category === activeFilter);

  const categories = [
    { id: "all", name: "All Experiences" },
    { id: "food", name: "Food & Drink" },
    { id: "adventure", name: "Adventure" },
    { id: "culture", name: "Cultural" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#ff385c]/10 to-[#ff914d]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-[#ff385c]">Unique</span> Travel Experiences
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover unforgettable activities with StayFindz - where travelers
              enjoy authentic local experiences
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category.id
                    ? "bg-[#ff385c] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Experiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((experience) => {
              const isFavorite = favorites.includes(experience.id);

              return (
                <div
                  key={experience.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  {/* Image with Favorite Button */}
                  <div className="relative">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <button
                      onClick={() => toggleFavorite(experience.id)}
                      className="absolute top-4 right-4 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white transition-colors"
                      aria-label={
                        isFavorite
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isFavorite
                            ? "fill-[#ff385c] text-[#ff385c]"
                            : "text-gray-700"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Experience Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {experience.title}
                      </h3>
                      <div className="flex items-center bg-[#ff385c]/10 px-2 py-1 rounded">
                        <Star className="w-4 h-4 text-[#ff385c] fill-[#ff385c]" />
                        <span className="ml-1 text-sm font-medium text-gray-900">
                          {experience.rating} ({experience.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{experience.location}</span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {experience.description}
                    </p>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-sm font-medium text-gray-700">
                        Duration: {experience.duration}
                      </div>
                      <span className="text-sm text-gray-500">
                        ★ Traveler Favorite
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured StayFindz Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most beloved experience this season
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Balinese Cooking Class"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Balinese Cultural Immersion with StayFindz
                </h3>
                <div className="flex items-center bg-[#ff385c]/10 px-2 py-1 rounded">
                  <Star className="w-4 h-4 text-[#ff385c] fill-[#ff385c]" />
                  <span className="ml-1 text-sm font-medium text-gray-900">
                    4.9 (247 reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">Ubud, Bali</span>
              </div>

              <p className="text-gray-700 mb-6">
                Our travelers absolutely loved this authentic Balinese
                experience. Guests visit local organic farms, learn traditional
                cooking methods, and enjoy meals with host families - all
                carefully curated by StayFindz.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">4 hours</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Group Size</p>
                  <p className="font-medium">Small groups (max 8)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Experience Level</p>
                  <p className="font-medium">All welcome</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Languages</p>
                  <p className="font-medium">English & Local</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="text-sm font-medium text-gray-700">
                  ★ Top Rated StayFindz Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Travelers Love StayFindz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our guests say about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "StayFindz made our Tokyo trip unforgettable! The food tour took us to places we'd never find on our own.",
                author: "Sarah & Mark",
                location: "Toronto, Canada",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              },
              {
                quote:
                  "The Costa Rica ziplining with StayFindz was breathtaking. Their guides were professional and knowledgeable.",
                author: "James R.",
                location: "London, UK",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              },
              {
                quote:
                  "StayFindz's Venetian mask workshop was the highlight of our Italy trip. Such a unique cultural experience!",
                author: "The Chen Family",
                location: "Singapore",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-[#ff385c] fill-[#ff385c]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff385c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Your StayFindz Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of travelers enjoying authentic experiences worldwide
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
