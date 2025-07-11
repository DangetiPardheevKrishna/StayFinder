import {
  ShieldCheck,
  AlertTriangle,
  Phone,
  Wifi,
  Lock,
  FireExtinguisher,
  MapPin,
  UserCheck,
  CreditCard,
  MessageSquare,
  HelpCircle,
  Home,
  PenTool,
} from "lucide-react";

const SafetyTips = () => {
  // Safety tip categories
  const safetyCategories = [
    {
      id: "physical",
      title: "Physical Safety",
      icon: <ShieldCheck className="w-8 h-8 text-[#ff385c]" />,
      tips: [
        {
          title: "Secure Your Property",
          content:
            "Ensure all doors and windows have working locks. Consider installing a safe for valuables.",
          critical: true,
          icon: <Lock className="w-5 h-5 text-[#ff385c]" />,
        },
        {
          title: "Emergency Preparedness",
          content:
            "Keep a first aid kit, fire extinguisher, and emergency contact list visible and accessible.",
          critical: true,
          icon: <PenTool className="w-5 h-5 text-[#ff385c]" />,
        },
        {
          title: "Property Safety Features",
          content:
            "Install smoke detectors, carbon monoxide alarms, and clearly mark emergency exits.",
          critical: false,
          icon: <FireExtinguisher className="w-5 h-5 text-[#ff385c]" />,
        },
      ],
    },
    {
      id: "online",
      title: "Online Safety",
      icon: <Wifi className="w-8 h-8 text-[#ff385c]" />,
      tips: [
        {
          title: "Secure Communications",
          content:
            "Always communicate through StayFindz messaging to protect your personal information.",
          critical: true,
          icon: <MessageSquare className="w-5 h-5 text-[#ff385c]" />,
        },
        {
          title: "Verified Users Only",
          content:
            "Only accept bookings from guests with verified profiles and positive reviews.",
          critical: false,
          icon: <UserCheck className="w-5 h-5 text-[#ff385c]" />,
        },
        {
          title: "Payment Security",
          content:
            "Never accept payments outside the StayFindz platform to avoid scams.",
          critical: true,
          icon: <CreditCard className="w-5 h-5 text-[#ff385c]" />,
        },
      ],
    },
    {
      id: "emergencies",
      title: "Emergency Procedures",
      icon: <AlertTriangle className="w-8 h-8 text-[#ff385c]" />,
      tips: [
        {
          title: "Local Emergency Numbers",
          content:
            "Post local police, fire, and medical emergency numbers in a visible location.",
          critical: true,
          icon: <Phone className="w-5 h-5 text-[#ff385c]" />,
        },
        {
          title: "Emergency Exits",
          content:
            "Clearly mark all emergency exits and ensure they remain unobstructed at all times.",
          critical: true,
          icon: <Home className="w-5 h-5 text-[#ff385c]" />,
        },
        {
          title: "Nearest Hospital",
          content:
            "Provide directions to the nearest hospital or urgent care facility.",
          critical: false,
          icon: <MapPin className="w-5 h-5 text-[#ff385c]" />,
        },
      ],
    },
    {
      id: "support",
      title: "Platform Support",
      icon: <HelpCircle className="w-8 h-8 text-[#ff385c]" />,
      tips: [
        {
          title: "24/7 Safety Line",
          content:
            "Our safety team is available anytime at 1-800-STAY-SAFE for urgent issues.",
          critical: true,
          icon: <Phone className="w-5 h-5 text-[#ff385c]" />,
        },
        {
          title: "Reporting Tools",
          content:
            "Use our in-app reporting features for any safety concerns during a stay.",
          critical: false,
          icon: <AlertTriangle className="w-5 h-5 text-[#ff385c]" />,
        },
        {
          title: "Insurance Coverage",
          content:
            "All bookings include $1M in property damage protection and liability coverage.",
          critical: false,
          icon: <ShieldCheck className="w-5 h-5 text-[#ff385c]" />,
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#ff385c]/10 to-[#ff914d]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-[#ff385c]">Safety</span> Guidelines
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Essential safety information for StayFindz hosts and guests
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These guidelines help create safe experiences for everyone in the
              StayFindz community
            </p>
          </div>

          {/* Safety Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {safetyCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <div className="p-3 bg-[#ff385c]/10 rounded-full w-max mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.tips.length} essential tips
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Safety Tips */}
          {safetyCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                {category.icon}
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.tips.map((tip, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border ${
                      tip.critical
                        ? "border-[#ff385c] bg-[#ff385c]/5"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">{tip.icon}</div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                          {tip.title}
                          {tip.critical && (
                            <span className="text-xs px-2 py-1 bg-[#ff385c] text-white rounded-full">
                              Critical
                            </span>
                          )}
                        </h4>
                        <p className="text-gray-700">{tip.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Emergency Contact Card */}
          <div className="bg-[#ff385c] text-white rounded-xl p-8 md:p-12 overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Emergency Assistance</h3>
              <p className="text-xl mb-6 max-w-2xl">
                If you're in immediate danger or need urgent help, contact these
                resources:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-6 h-6" />
                    <h4 className="font-bold">StayFindz Safety Line</h4>
                  </div>
                  <p className="text-lg">1-800-STAY-SAFE</p>
                  <p className="text-sm opacity-90">
                    24/7 support for urgent issues
                  </p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-6 h-6" />
                    <h4 className="font-bold">Local Emergency</h4>
                  </div>
                  <p className="text-lg">911 (US) or local number</p>
                  <p className="text-sm opacity-90">Police/Fire/Medical</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <HelpCircle className="w-6 h-6" />
                    <h4 className="font-bold">Non-Emergency Help</h4>
                  </div>
                  <p className="text-lg">help@stayfindz.com</p>
                  <p className="text-sm opacity-90">Report safety concerns</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-10">
              <ShieldCheck className="w-64 h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Safety Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More tools and information to help you stay safe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#ff385c]" />
                Host Protection Insurance
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about our $1M property damage protection and liability
                coverage included with every booking.
              </p>
              <button className="text-[#ff385c] font-medium hover:text-[#e03148]">
                View Coverage Details →
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-[#ff385c]" />
                Guest Verification
              </h3>
              <p className="text-gray-600 mb-4">
                How StayFindz verifies guest identities and what to look for
                when reviewing booking requests.
              </p>
              <button className="text-[#ff385c] font-medium hover:text-[#e03148]">
                Learn About Verification →
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-[#ff385c]" />
                COVID-19 Safety
              </h3>
              <p className="text-gray-600 mb-4">
                Current cleaning protocols and health safety recommendations for
                hosts and guests.
              </p>
              <button className="text-[#ff385c] font-medium hover:text-[#e03148]">
                View Health Guidelines →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafetyTips;
