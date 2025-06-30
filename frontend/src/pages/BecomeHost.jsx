import {
  LineChart,
  ShieldCheck,
  Users2,
  Zap,
  BadgeCheck,
  Clock,
  DollarSign,
  Globe,
  Home,
  MessageSquare,
  CreditCard,
  Star,
  Calendar,
  MapPin,
  Coins,
  Smile,
  CheckCircle,
  Camera,
  Lock,
  HelpCircle,
  TrendingUp,
  PenTool,
  ClipboardList,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BecomeAHost = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // Host Benefits Data
  const hostBenefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#ff385c]" />,
      title: "Maximize Earnings",
      description:
        "Our smart pricing tool adjusts rates based on demand, seasonality, and local events",
      stat: "30% higher average income",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#ff385c]" />,
      title: "Full Protection",
      description:
        "$1M property damage protection and liability coverage included at no extra cost",
      stat: "Risk-free hosting",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#ff385c]" />,
      title: "Global Visibility",
      description: "Get listed in our global marketplace within minutes",
      stat: "2M+ monthly travelers",
    },
    {
      icon: <Users2 className="w-8 h-8 text-[#ff385c]" />,
      title: "Quality Guests",
      description:
        "Verified ID, payment screening, and review system ensure respectful guests",
      stat: "4.9/5 host satisfaction",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-[#ff385c]" />,
      title: "Superhost Program",
      description:
        "Earn badges, better placement, and exclusive perks as you build your reputation",
      stat: "20% more bookings",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#ff385c]" />,
      title: "Flexible Control",
      description:
        "Set your own availability, minimum stays, and cancellation policies",
      stat: "100% calendar control",
    },
  ];

  // How It Works Data
  const howItWorks = [
    {
      step: "1",
      title: "Create Your Listing",
      description: "Add your property details, photos, and amenities",
      icon: <Home className="w-6 h-6 text-white" />,
      bgColor: "bg-[#ff385c]",
    },
    {
      step: "2",
      title: "Set Your Terms",
      description: "Choose pricing, availability, and house rules",
      icon: <DollarSign className="w-6 h-6 text-white" />,
      bgColor: "bg-[#ff914d]",
    },
    {
      step: "3",
      title: "Welcome Guests",
      description: "Accept bookings and prepare for arrivals",
      icon: <Users2 className="w-6 h-6 text-white" />,
      bgColor: "bg-[#00a699]",
    },
  ];

  // Host Toolkit Data
  const hostToolkit = [
    {
      icon: <LineChart className="w-8 h-8 text-[#ff385c]" />,
      title: "Earnings Dashboard",
      description:
        "Real-time revenue tracking with dynamic pricing suggestions",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#ff385c]" />,
      title: "Damage Protection",
      description: "$1M coverage for property damage and liability",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#ff385c]" />,
      title: "Flexible Payouts",
      description: "Daily, weekly, or monthly payments via multiple methods",
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#ff385c]" />,
      title: "Co-Hosting Tools",
      description: "Add co-hosts and assign specific permissions",
    },
    {
      icon: <Camera className="w-8 h-8 text-[#ff385c]" />,
      title: "Professional Photography",
      description: "Free photography service for eligible listings",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#ff385c]" />,
      title: "24/7 Support",
      description: "Dedicated host support team available anytime",
    },
  ];

  // Requirements Data
  const requirements = [
    {
      icon: <ClipboardList className="w-6 h-6 text-[#ff385c]" />,
      title: "Legal Compliance",
      items: [
        "Valid property ownership or rental rights",
        "Local business license (if required)",
        "Tax information for payouts",
      ],
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#ff385c]" />,
      title: "Property Standards",
      items: [
        "Smoke and carbon monoxide detectors",
        "Basic amenities (linens, towels, toiletries)",
        "Clean and well-maintained space",
      ],
    },
    {
      icon: <Star className="w-6 h-6 text-[#ff385c]" />,
      title: "Listing Quality",
      items: [
        "High-resolution photos (minimum 5)",
        "Accurate description of space and amenities",
        "Clear house rules and expectations",
      ],
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote:
        "I listed my spare room and earned enough to pay my mortgage within 3 months!",
      author: "Sarah K., Miami",
      stat: "85% occupancy rate",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      quote:
        "The automated pricing tool helped me maximize my earnings during peak seasons.",
      author: "Michael T., Denver",
      stat: "40% revenue increase",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      quote:
        "24/7 support gave me peace of mind when I had my first international guest.",
      author: "Priya M., Seattle",
      stat: "4.98 average rating",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
  ];

  // FAQs Data
  const faqs = [
    {
      question: "Do I need to own the property to host?",
      answer:
        "No, but you must have permission from the property owner to list it on StayFindz.",
    },
    {
      question: "When and how do I get paid?",
      answer:
        "You'll receive payment 24 hours after guest check-in via your chosen method (bank transfer, PayPal, etc.).",
    },
    {
      question: "What insurance protection do I get?",
      answer:
        "All listings include $1M property damage protection and $1M liability coverage at no additional cost.",
    },
    {
      question: "Can I share hosting responsibilities?",
      answer:
        "Yes, our co-hosting tools let you add team members with customizable permissions.",
    },
    {
      question: "How do I set the right price?",
      answer:
        "Our smart pricing tool suggests rates based on your location, amenities, and local demand patterns.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section (kept as is) */}
      <section className="relative bg-gradient-to-r from-[#ff385c]/10 to-[#ff914d]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-[#ff385c]">Host</span> your space with
                StayFindz
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of hosts earning extra income by sharing their
                homes with travelers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  //onClick={() => navigate("/host/create-listing")}
                  className="px-8 py-4 bg-[#ff385c] text-white rounded-lg font-bold hover:bg-[#e03148] transition-colors shadow-lg hover:shadow-xl"
                >
                  List Your Property
                </button>
                <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold border border-gray-300 hover:bg-gray-50 transition-colors shadow-md">
                  Learn How It Works
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Modern apartment"
                className="rounded-xl shadow-md h-64 w-full object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Cozy living room"
                className="rounded-xl shadow-md h-64 w-full object-cover mt-8"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Stylish kitchen"
                className="rounded-xl shadow-md h-64 w-full object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Beautiful bedroom"
                className="rounded-xl shadow-md h-64 w-full object-cover mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Host Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Host with StayFindz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to host successfully and earn money
              from your property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="p-3 bg-[#ff385c]/10 rounded-full w-max mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <span className="text-sm font-medium text-[#ff385c]">
                  {benefit.stat}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#f7f7f7] rounded-xl p-8 text-center">
            <p className="text-xl font-medium text-gray-700 mb-2">
              "85% of StayFindz hosts reach full occupancy within their first 60
              days"
            </p>
            <p className="text-gray-500">Based on 2023 host data</p>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Getting Started is Easy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  {step.icon}
                </div>
                <span className="text-sm font-semibold text-[#ff385c]">
                  STEP {step.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900 my-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/host/create-listing")}
              className="px-8 py-3 bg-[#ff385c] text-white rounded-lg font-bold hover:bg-[#e03148] transition-colors shadow-md hover:shadow-lg"
            >
              Create Your Listing
            </button>
          </div>
        </div>
      </section>
      {/* Host Toolkit Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Hosting Toolkit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your property successfully
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostToolkit.map((tool, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start gap-4"
              >
                <div className="p-2 bg-[#ff385c]/10 rounded-full mt-1">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hosting Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What you'll need to get started as a StayFindz host
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((requirement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  {requirement.icon}
                  <h3 className="text-xl font-bold text-gray-900">
                    {requirement.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {requirement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from StayFindz hosts who are earning extra income
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={testimonial.image}
                  alt="Testimonial property"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6 bg-white">
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-bold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#ff385c] font-medium">
                    {testimonial.stat}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQs Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about hosting
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#ff385c] transition-colors duration-200">
                      {faq.question}
                    </h3>
                    <span className="transition-transform duration-300 group-open:rotate-180">
                      <HelpCircle className="w-5 h-5 text-[#ff385c]" />
                    </span>
                  </summary>
                  <div className="mt-3 transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 group-open:max-h-[500px] group-open:opacity-100">
                    <p className="pb-2 text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about hosting
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
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
      <section className="py-16 bg-[#ff385c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Become a Host?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our community of hosts and start earning money from your extra
            space today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              //onClick={() => navigate("/host/create-listing")}
              className="px-8 py-4 bg-white text-[#ff385c] rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              List Your Property
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              Contact Our Team
            </button>
          </div>
          <p className="mt-4 text-sm text-white/80">
            It only takes 10 minutes. No experience needed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BecomeAHost;
