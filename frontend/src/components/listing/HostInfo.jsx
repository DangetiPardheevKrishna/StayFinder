// import { formatDistanceToNow } from "date-fns";

// const HostInfo = ({ host }) => {
//   if (!host) return null;

//   const joined = formatDistanceToNow(new Date(host.createdAt), {
//     addSuffix: false,
//   });

//   return (
//     <div className="flex items-center gap-4 mt-8">
//       <img
//         src={host.profileImage || "/default-avatar.jpg"}
//         alt={host.name}
//         className="w-12 h-12 rounded-full object-cover"
//       />
//       <div>
//         <h3 className="font-semibold text-md">Hosted by {host.name}</h3>
//         <p className="text-sm text-gray-500">Superhost · {joined} hosting</p>
//       </div>
//     </div>
//   );
// };

// export default HostInfo;
// import { formatDistanceToNow } from "date-fns";
// import { Calendar, User } from "lucide-react";

// const HostInfo = ({ host }) => {
//   if (!host) return null;

//   const joinedDate = new Date(host.createdAt);
//   const hostingSince = joinedDate.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//   });
//   const hostingDuration = formatDistanceToNow(joinedDate);

//   return (
//     <div className="bg-white rounded-lg border border-gray-200 p-6 mt-8 shadow-sm">
//       <div className="flex items-start gap-4 sm:gap-6">
//         {/* Host Avatar */}
//         <div className="relative flex-shrink-0">
//           <img
//             src={host.profileImage || "/default-avatar.jpg"}
//             alt={host.name}
//             className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow-sm"
//           />
//           <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md border border-gray-100">
//             <User className="w-4 h-4 text-gray-600" />
//           </div>
//         </div>

//         {/* Host Details */}
//         <div className="flex-grow">
//           <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
//             Hosted by {host.name}
//           </h3>

//           <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
//             <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-2 w-fit">
//               <div className="p-1.5 bg-gray-100 rounded-full">
//                 <Calendar className="w-4 h-4 text-gray-600" />
//               </div>
//               <div>
//                 <p className="text-xs text-gray-500">Hosting since</p>
//                 <p className="text-sm font-medium">
//                   {hostingSince} ({hostingDuration})
//                 </p>
//               </div>
//             </div>
//           </div>

//           <button className="mt-6 px-4 py-2 text-sm bg-white border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors font-medium shadow-sm">
//             Contact Host
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HostInfo;

// import { formatDistanceToNow } from "date-fns";
// import { Calendar, User } from "lucide-react";

// const HostInfo = ({ host }) => {
//   if (!host) return null;

//   const joinedDate = new Date(host.createdAt);
//   const hostingSince = joinedDate.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//   });
//   const hostingDuration = formatDistanceToNow(joinedDate);

//   return (
//     <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
//       <h2 className="text-2xl font-bold mb-4">About your host</h2>

//       <div className="flex items-start gap-4">
//         {/* Host Avatar */}
//         <div className="relative flex-shrink-0">
//           <img
//             src={host.profileImage || "/default-avatar.jpg"}
//             alt={host.name}
//             className="w-16 h-16 rounded-full object-cover border-2 border-white"
//           />
//           <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm border border-gray-100">
//             <User className="w-4 h-4 text-[#ff385c]" />
//           </div>
//         </div>

//         {/* Host Details */}
//         <div className="flex-grow">
//           <h3 className="text-lg font-semibold text-gray-900 mb-1">
//             {host.name}
//           </h3>

//           <div className="flex items-center gap-3 mt-3">
//             <div className="flex items-center">
//               <Calendar className="w-5 h-5 text-[#ff385c] mr-2" />
//               <div>
//                 <p className="text-sm text-gray-500">Hosting since</p>
//                 <p className="font-medium">
//                   {hostingSince} • {hostingDuration}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <button className="mt-4 px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
//             Contact Host
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HostInfo;

import { formatDistanceToNow } from "date-fns";
import { Calendar, User, Phone, Mail } from "lucide-react";
import { useState } from "react";

const HostInfo = ({ host }) => {
  if (!host) return null;
  const [showContact, setShowContact] = useState(false);

  const joinedDate = new Date(host.createdAt);
  const hostingSince = joinedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  const hostingDuration = formatDistanceToNow(joinedDate);

  const formatPhoneNumber = (phone) => {
    if (!phone) return "";
    return `${phone.slice(0, 5)} ${phone.slice(5)}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
      <h2 className="text-2xl font-bold mb-4">About your host</h2>

      <div className="flex items-start gap-4">
        {/* Host Avatar */}
        <div className="relative flex-shrink-0">
          <img
            src={host.profileImage || "/default-avatar.jpg"}
            alt={host.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white"
          />
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm border border-gray-100">
            <User className="w-4 h-4 text-[#ff385c]" />
          </div>
        </div>

        {/* Host Details */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {host.name}
          </h3>

          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-[#ff385c] mr-2" />
              <div>
                <p className="text-sm text-gray-500">Hosting since</p>
                <p className="font-medium">
                  {hostingSince} • {hostingDuration}
                </p>
              </div>
            </div>
          </div>

          {showContact ? (
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff385c]" />
                <span className="font-medium">
                  {formatPhoneNumber(host.phone)}
                </span>
              </div>
              <button
                onClick={() => setShowContact(false)}
                className="text-sm text-gray-500 hover:text-gray-700 mt-2"
              >
                Hide contact info
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowContact(true)}
              className="mt-4 px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Show contact info
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostInfo;
