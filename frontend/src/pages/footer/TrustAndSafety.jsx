import { useState } from "react";
import {
  FaShieldAlt,
  FaCreditCard,
  FaUsers,
  FaHeadset,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const TrustAndSafety = () => {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqs = {
    verification: [
      {
        id: "verify1",
        question: "How does verification work?",
        answer:
          "We use secure third-party services to validate IDs while keeping your data private.",
      },
      {
        id: "verify2",
        question: "What if a guest isn’t verified?",
        answer:
          "Hosts can choose to accept only verified guests for added security.",
      },
    ],
    payments: [
      {
        id: "pay1",
        question: "Is my payment information safe?",
        answer:
          "Yes, we use PCI-compliant systems and never store full card details.",
      },
      {
        id: "pay2",
        question: "What if a booking is canceled?",
        answer:
          "Refunds follow our cancellation policy and are processed securely.",
      },
    ],
    community: [
      {
        id: "comm1",
        question: "What happens if someone violates policies?",
        answer:
          "We investigate reports and may suspend or ban offending accounts.",
      },
      {
        id: "comm2",
        question: "How do I report a concern?",
        answer:
          'Use the "Report" button on a profile or contact our support team.',
      },
    ],
    support: [
      {
        id: "sup1",
        question: "What’s considered an emergency?",
        answer: "Threats to safety, property damage, or illegal activity.",
      },
      {
        id: "sup2",
        question: "How quickly does support respond?",
        answer: "Live chat/phone: minutes | Email: within 24 hours.",
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Trust & Safety</h1>
      <p className="text-gray-600 mb-8">
        Your safety and peace of mind are our top priorities. We’ve built robust
        measures to ensure secure transactions, verified users, and a respectful
        community.
      </p>

      {/* Guest Verification Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <FaShieldAlt className="text-blue-500 text-2xl mr-3" />
          <h2 className="text-xl font-semibold text-gray-800">
            Guest Verification
          </h2>
        </div>
        <p className="text-gray-600 mb-4">
          We verify users to create a trusted environment.
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
          <li>
            <span className="font-medium">ID Verification</span> – Guests may be
            required to submit government-issued IDs.
          </li>
          <li>
            <span className="font-medium">Profile Reviews</span> – Hosts and
            guests can leave reviews to build trust.
          </li>
          <li>
            <span className="font-medium">Phone & Email Confirmation</span> –
            All users must confirm contact details.
          </li>
        </ul>
        <div className="mt-4">
          <h3 className="font-medium text-gray-700 mb-2">FAQs</h3>
          {faqs.verification.map((faq) => (
            <div key={faq.id} className="mb-2 border-b pb-2">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-700"
              >
                <span>{faq.question}</span>
                {openFaqs[faq.id] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFaqs[faq.id] && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Secure Payments Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <FaCreditCard className="text-green-500 text-2xl mr-3" />
          <h2 className="text-xl font-semibold text-gray-800">
            Secure Payments
          </h2>
        </div>
        <p className="text-gray-600 mb-4">
          Your money is protected with industry-leading security.
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
          <li>
            <span className="font-medium">Encrypted Transactions</span> – All
            payments are processed securely.
          </li>
          <li>
            <span className="font-medium">Held Securely</span> – Funds are
            released only after check-in.
          </li>
          <li>
            <span className="font-medium">Dispute Resolution</span> – Fair
            mediation in case of issues.
          </li>
        </ul>
        <div className="mt-4">
          <h3 className="font-medium text-gray-700 mb-2">FAQs</h3>
          {faqs.payments.map((faq) => (
            <div key={faq.id} className="mb-2 border-b pb-2">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-700"
              >
                <span>{faq.question}</span>
                {openFaqs[faq.id] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFaqs[faq.id] && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Community Standards Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <FaUsers className="text-purple-500 text-2xl mr-3" />
          <h2 className="text-xl font-semibold text-gray-800">
            Community Standards
          </h2>
        </div>
        <p className="text-gray-600 mb-4">
          We foster a respectful and inclusive platform.
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
          <li>
            <span className="font-medium">No Discrimination</span> – Zero
            tolerance for bias based on race, gender, or religion.
          </li>
          <li>
            <span className="font-medium">Respectful Communication</span> –
            Harassment or spam is prohibited.
          </li>
          <li>
            <span className="font-medium">Accurate Listings</span> –
            Misrepresentation can lead to account suspension.
          </li>
        </ul>
        <div className="mt-4">
          <h3 className="font-medium text-gray-700 mb-2">FAQs</h3>
          {faqs.community.map((faq) => (
            <div key={faq.id} className="mb-2 border-b pb-2">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-700"
              >
                <span>{faq.question}</span>
                {openFaqs[faq.id] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFaqs[faq.id] && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 24/7 Support Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <FaHeadset className="text-red-500 text-2xl mr-3" />
          <h2 className="text-xl font-semibold text-gray-800">24/7 Support</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Help is always available, day or night.
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
          <li>
            <span className="font-medium">Live Chat & Phone</span> – Immediate
            assistance for urgent issues.
          </li>
          <li>
            <span className="font-medium">Email Support</span> – Detailed help
            within 24 hours.
          </li>
          <li>
            <span className="font-medium">Emergency Assistance</span> – Local
            authorities contacted if needed.
          </li>
        </ul>
        <div className="mt-4">
          <h3 className="font-medium text-gray-700 mb-2">FAQs</h3>
          {faqs.support.map((faq) => (
            <div key={faq.id} className="mb-2 border-b pb-2">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-700"
              >
                <span>{faq.question}</span>
                {openFaqs[faq.id] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFaqs[faq.id] && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-blue-50 rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          We’re Committed to Your Safety
        </h2>
        <p className="text-gray-600 mb-4">
          Every feature is designed to protect you.
        </p>
        <a
          href="#"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition duration-200"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default TrustAndSafety;
