import { useState } from "react";
import {
  MapPin,
  Calendar,
  Star,
  ChevronDown,
  ChevronRight,
  Mountain,
  Wallet,
  Umbrella,
  Globe,
  Compass,
  Coffee,
  Utensils,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TravelGuides = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("destinations");

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Travel Guides Data
  const travelGuides = {
    destinations: [
      {
        id: 1,
        title: "Bali, Indonesia",
        description:
          "Discover lush jungles, vibrant culture, and stunning beaches in the Island of Gods.",
        bestTime: "April - October (Dry Season)",
        highlights: [
          "Ubud's rice terraces",
          "Uluwatu temples",
          "Nusa Penida day trips",
        ],
        icon: <MapPin className="w-6 h-6 text-[#ff385c]" />,
        image:
          "https://images.unsplash.com/photo-1518544866330-95a2bfb7baf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        title: "Kyoto, Japan",
        description:
          "Ancient temples, cherry blossoms, and traditional tea houses in Japan's cultural heart.",
        bestTime: "March - May (Cherry Blossom Season)",
        highlights: [
          "Fushimi Inari Shrine",
          "Arashiyama Bamboo Forest",
          "Gion district",
        ],
        icon: <Compass className="w-6 h-6 text-[#ff385c]" />,
        image:
          "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        title: "Santorini, Greece",
        description:
          "White-washed buildings with breathtaking sunset views over the Aegean Sea.",
        bestTime: "May - June or September - October (Shoulder Season)",
        highlights: ["Oia sunset views", "Red Beach", "Santorini wine tour"],
        icon: <Umbrella className="w-6 h-6 text-[#ff385c]" />,
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
    ],
    interests: [
      {
        id: 4,
        title: "Himalayan Trekking Guide",
        description:
          "Essential tips for trekking in Nepal's Himalayas, from Everest Base Camp to Annapurna.",
        bestTime: "September - November (Best weather)",
        highlights: [
          "Everest Base Camp",
          "Annapurna Circuit",
          "Langtang Valley",
        ],
        icon: <Mountain className="w-6 h-6 text-[#ff385c]" />,
        image:
          "https://images.unsplash.com/photo-1580654712603-eb43273aff33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 5,
        title: "Southeast Asia on $30/Day",
        description:
          "How to travel cheaply through Thailand, Vietnam, and Cambodia without sacrificing comfort.",
        bestTime: "November - February (Cooler temperatures)",
        highlights: [
          "Street food tours",
          "Overnight buses",
          "Hostel recommendations",
        ],
        icon: <Wallet className="w-6 h-6 text-[#ff385c]" />,
        image:
          "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 6,
        title: "Italian Food & Wine Trail",
        description:
          "From pasta in Rome to wine in Tuscany - a culinary journey through Italy.",
        bestTime: "April - June or September - October",
        highlights: [
          "Florence steak houses",
          "Venice cicchetti bars",
          "Rome's best carbonara",
        ],
        icon: <Utensils className="w-6 h-6 text-[#ff385c]" />,
        image:
          "https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      },
    ],
  };

  // Travel Tips Data
  const travelTips = [
    {
      title: "Packing Essentials",
      icon: <Coffee className="w-6 h-6 text-[#ff385c]" />,
      items: [
        "Universal power adapter",
        "Portable charger",
        "Lightweight rain jacket",
        "Comfortable walking shoes",
      ],
    },
    {
      title: "Money Saving Tips",
      icon: <Wallet className="w-6 h-6 text-[#ff385c]" />,
      items: [
        "Travel during shoulder seasons",
        "Use public transportation",
        "Eat where locals eat",
        "Book flights on Tuesday afternoons",
      ],
    },
    {
      title: "Cultural Etiquette",
      icon: <Globe className="w-6 h-6 text-[#ff385c]" />,
      items: [
        "Learn basic greetings",
        "Research dress codes",
        "Understand tipping customs",
        "Respect photography rules",
      ],
    },
  ];

  // FAQs Data
  const faqs = [
    {
      question: "How often are the travel guides updated?",
      answer:
        "Our guides are reviewed quarterly and updated whenever there are significant changes to destinations.",
    },
    {
      question: "Can I contribute my own travel guide?",
      answer:
        "Yes! We welcome contributions from experienced travelers. Contact our editorial team for guidelines.",
    },
    {
      question: "Are the budget estimates accurate?",
      answer:
        "Our budget estimates are based on current data but can vary based on season and personal preferences.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#00a699]/10 to-[#ff385c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-[#ff385c]">Travel Guides</span> for Your
                Next Adventure
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert-curated guides to help you plan the perfect trip, whether
                you're looking for relaxation, adventure, or cultural immersion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/destinations")}
                  className="px-8 py-4 bg-[#ff385c] text-white rounded-lg font-bold hover:bg-[#e03148] transition-colors shadow-lg hover:shadow-xl"
                >
                  Browse Destinations
                </button>
                <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold border border-gray-300 hover:bg-gray-50 transition-colors shadow-md">
                  Get Personalized Recommendations
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Travel destination"
                className="rounded-xl shadow-md h-64 w-full object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Travel destination"
                className="rounded-xl shadow-md h-64 w-full object-cover mt-8"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Travel destination"
                className="rounded-xl shadow-md h-64 w-full object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Travel destination"
                className="rounded-xl shadow-md h-64 w-full object-cover mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Toggle */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex border-b mb-8 justify-center">
            <button
              onClick={() => setActiveCategory("destinations")}
              className={`pb-4 px-6 font-medium flex items-center ${
                activeCategory === "destinations"
                  ? "text-[#ff385c] border-b-2 border-[#ff385c]"
                  : "text-gray-500"
              }`}
            >
              <MapPin className="mr-2" />
              By Destination
            </button>
            <button
              onClick={() => setActiveCategory("interests")}
              className={`pb-4 px-6 font-medium flex items-center ${
                activeCategory === "interests"
                  ? "text-[#ff385c] border-b-2 border-[#ff385c]"
                  : "text-gray-500"
              }`}
            >
              <Compass className="mr-2" />
              By Interest
            </button>
          </div>
        </div>
      </section>

      {/* Travel Guides Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelGuides[activeCategory].map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-[#ff385c]/10 rounded-full mr-3">
                      {guide.icon}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {guide.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">{guide.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-[#ff385c]" />
                      Best time to visit: {guide.bestTime}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">
                        Top Highlights:
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {guide.highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center text-[#ff385c] font-medium hover:text-[#e03148] mt-4"
                  >
                    Read Full Guide <ChevronRight className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Travel Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice to make your travels smoother and more enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#ff385c]/10 rounded-full">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {tip.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {tip.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-[#ff385c] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Travel Guide FAQs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about our travel guides
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <h3
                      className={`text-lg font-bold text-gray-900 transition-colors ${
                        isOpen ? "text-[#ff385c]" : ""
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <span
                      className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-900" />
                    </span>
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-600 pb-2">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Browse our complete collection of travel guides and start planning
            your perfect trip today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/destinations")}
              className="px-8 py-4 bg-white text-red-500 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Guides
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              Get Personalized Recommendations
            </button>
          </div>
          <p className="mt-4 text-sm text-white/80">
            New guides added weekly. Never run out of travel inspiration.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TravelGuides;
