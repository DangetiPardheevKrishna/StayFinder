import {
  Home,
  MessageSquare,
  CreditCard,
  Star,
  Calendar,
  MapPin,
  ClipboardList,
  ChevronDown,
  BookOpen,
  Video,
  FileText,
  Settings,
  User,
  Shield,
  IndianRupee,
  Camera,
  ThumbsUp,
  AlertCircle,
  Phone,
  Mail,
  HelpCircle,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const HostResources = () => {
  const [activeTab, setActiveTab] = useState("listing");

  // Resource Categories
  const resourceCategories = [
    {
      id: "listing",
      name: "Listing Setup",
      icon: <Home className="w-5 h-5" />,
    },
    {
      id: "communication",
      name: "Guest Communication",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      id: "policies",
      name: "Policies & Standards",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: "payments",
      name: "Payment Info",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: "growth",
      name: "Growing Your Business",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  // Listing Setup Resources
  const listingResources = [
    {
      title: "Creating an Attractive Listing",
      description: "Step-by-step guide to showcase your space effectively",
      icon: <BookOpen className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
    {
      title: "Professional Photography Tips",
      description: "How to take photos that increase bookings",
      icon: <Camera className="w-8 h-8 text-[#ff385c]" />,
      type: "Tutorial",
      link: "#",
    },
    {
      title: "Optimizing Your Listing Title",
      description: "Best practices for writing compelling titles",
      icon: <FileText className="w-8 h-8 text-[#ff385c]" />,
      type: "Article",
      link: "#",
    },
    {
      title: "Setting Competitive Pricing",
      description: "How to price your listing for maximum occupancy",
      icon: <IndianRupee className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
    {
      title: "Amenities That Increase Bookings",
      description: "Which amenities guests value most",
      icon: <ThumbsUp className="w-8 h-8 text-[#ff385c]" />,
      type: "Research",
      link: "#",
    },
    {
      title: "Listing Refresh Checklist",
      description: "Monthly maintenance for your listing",
      icon: <ClipboardList className="w-8 h-8 text-[#ff385c]" />,
      type: "Checklist",
      link: "#",
    },
  ];

  // Guest Communication Resources
  const communicationResources = [
    {
      title: "Pre-Arrival Message Templates",
      description: "Professional templates for different guest types",
      icon: <Mail className="w-8 h-8 text-[#ff385c]" />,
      type: "Templates",
      link: "#",
    },
    {
      title: "Handling Guest Inquiries",
      description: "Best practices for quick, effective responses",
      icon: <MessageSquare className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
    {
      title: "Managing Difficult Situations",
      description: "De-escalation techniques for hosts",
      icon: <AlertCircle className="w-8 h-8 text-[#ff385c]" />,
      type: "Article",
      link: "#",
    },
    {
      title: "Creating a Welcome Book",
      description: "What to include in your digital or physical guide",
      icon: <BookOpen className="w-8 h-8 text-[#ff385c]" />,
      type: "Template",
      link: "#",
    },
    {
      title: "24/7 Support Access",
      description: "When and how to contact StayFindz support",
      icon: <Phone className="w-8 h-8 text-[#ff385c]" />,
      type: "Reference",
      link: "#",
    },
    {
      title: "Cultural Sensitivity Guide",
      description: "Welcoming guests from diverse backgrounds",
      icon: <User className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
  ];

  // Policy Resources
  const policyResources = [
    {
      title: "Cancellation Policy Options",
      description: "Choosing the right policy for your listing",
      icon: <Calendar className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
    {
      title: "House Rules Examples",
      description: "Effective rules that protect your property",
      icon: <ClipboardList className="w-8 h-8 text-[#ff385c]" />,
      type: "Templates",
      link: "#",
    },
    {
      title: "Damage Protection Overview",
      description: "Understanding your coverage",
      icon: <Shield className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
    {
      title: "Local Regulations Checklist",
      description: "Ensuring compliance in your area",
      icon: <MapPin className="w-8 h-8 text-[#ff385c]" />,
      type: "Checklist",
      link: "#",
    },
    {
      title: "Safety Standards Video",
      description: "Essential safety measures for hosts",
      icon: <Video className="w-8 h-8 text-[#ff385c]" />,
      type: "Video",
      link: "#",
    },
    {
      title: "Guest Screening Tips",
      description: "Red flags to watch for in reservations",
      icon: <User className="w-8 h-8 text-[#ff385c]" />,
      type: "Article",
      link: "#",
    },
  ];

  // Payment Resources
  const paymentResources = [
    {
      title: "Setting Up Payout Methods",
      description: "How to receive your earnings",
      icon: <CreditCard className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
    {
      title: "Understanding Fees & Taxes",
      description: "Breakdown of StayFindz fees and tax obligations",
      icon: <IndianRupee className="w-8 h-8 text-[#ff385c]" />,
      type: "Article",
      link: "#",
    },
    {
      title: "Payout Schedule Explained",
      description: "When and how often you get paid",
      icon: <Calendar className="w-8 h-8 text-[#ff385c]" />,
      type: "Reference",
      link: "#",
    },
    {
      title: "Maximizing Your Earnings",
      description: "Strategies to increase your revenue",
      icon: <TrendingUp className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
    {
      title: "Tax Deductions for Hosts",
      description: "Potential write-offs for your rental",
      icon: <FileText className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
    {
      title: "Pricing Strategy Webinar",
      description: "Recording of our most popular pricing workshop",
      icon: <Video className="w-8 h-8 text-[#ff385c]" />,
      type: "Video",
      link: "#",
    },
  ];

  // Growth Resources
  const growthResources = [
    {
      title: "Achieving Superhost Status",
      description: "Requirements and benefits explained",
      icon: <Star className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
    {
      title: "Getting 5-Star Reviews",
      description: "Proven methods to earn top ratings",
      icon: <ThumbsUp className="w-8 h-8 text-[#ff385c]" />,
      type: "Article",
      link: "#",
    },
    {
      title: "Scaling Your Hosting Business",
      description: "Adding multiple properties successfully",
      icon: <Home className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
    {
      title: "Seasonal Preparation Guide",
      description: "Adapting your strategy throughout the year",
      icon: <Calendar className="w-8 h-8 text-[#ff385c]" />,
      type: "Checklist",
      link: "#",
    },
    {
      title: "Co-Hosting Best Practices",
      description: "Working with assistants or partners",
      icon: <User className="w-8 h-8 text-[#ff385c]" />,
      type: "Guide",
      link: "#",
    },
    {
      title: "Marketing Your Listing",
      description: "Promoting beyond StayFindz platform",
      icon: <TrendingUp className="w-8 h-8 text-[#ff385c]" />,
      type: "Article",
      link: "#",
    },
  ];

  // Get current resources based on active tab
  const getCurrentResources = () => {
    switch (activeTab) {
      case "listing":
        return listingResources;
      case "communication":
        return communicationResources;
      case "policies":
        return policyResources;
      case "payments":
        return paymentResources;
      case "growth":
        return growthResources;
      default:
        return listingResources;
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#ff385c]/10 to-[#ff914d]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Host Resources Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed as a StayFindz host
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Resource Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {resourceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === category.id
                    ? "bg-[#ff385c] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentResources().map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#ff385c]/10 rounded-lg">
                      {resource.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#ff385c] uppercase tracking-wider">
                        {resource.type}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                  <button className="mt-4 text-[#ff385c] font-medium hover:text-[#e03148] transition-colors flex items-center gap-1">
                    View Resource
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Support Section */}
          <div className="mt-16 bg-[#f7f7f7] rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Personalized Help?
                </h2>
                <p className="text-gray-600 mb-6">
                  Our dedicated host support team is available 24/7 to answer
                  your questions and help you optimize your listing.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-[#ff385c]" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Call Host Support
                      </p>
                      <p className="text-gray-600">1-800-STAYFINDZ</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#ff385c]" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Email Our Team
                      </p>
                      <p className="text-gray-600">hosts@stayfindz.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-6 h-6 text-[#ff385c]" />
                    <div>
                      <p className="font-medium text-gray-900">Help Center</p>
                      <p className="text-gray-600">Browse all help articles</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Support team"
                  className="rounded-lg shadow-md w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#ff385c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold mb-2">4.9</p>
              <p className="text-xl">Average Host Rating</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold mb-2">85%</p>
              <p className="text-xl">Occupancy Rate</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-xl">Host Support Availability</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HostResources;
