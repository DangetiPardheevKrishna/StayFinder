// import { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ImageGallery({ images }) {
//   const [mainImage, setMainImage] = useState(images?.[0]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [startIndex, setStartIndex] = useState(0); // To start from clicked image

//   const openModal = (index) => {
//     setStartIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const sliderSettings = {
//     initialSlide: startIndex,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//   };

//   return (
//     <div className="mb-8">
//       {/* Main Image */}
//       <div className="rounded-xl overflow-hidden mb-4">
//         <img
//           src={mainImage}
//           alt="Main Image"
//           className="w-full h-[400px] object-cover rounded-xl"
//         />
//       </div>

//       {/* Thumbnails */}
//       <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
//         {images?.slice(0, 9).map((url, index) => (
//           <div
//             key={index}
//             onClick={() => openModal(index)}
//             className="cursor-pointer overflow-hidden rounded-xl border-2 border-transparent hover:border-blue-500"
//           >
//             <img
//               src={url}
//               alt={`Thumbnail ${index + 1}`}
//               className="h-[80px] w-full object-cover"
//             />
//           </div>
//         ))}

//         {images?.length > 9 && (
//           <div className="flex items-center justify-center bg-gray-100 text-sm text-gray-600 rounded-xl">
//             +{images.length - 9} more
//           </div>
//         )}
//       </div>

//       {/* Modal with Slider */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-lg p-4 w-full max-w-4xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Slider {...sliderSettings}>
//               {images.map((img, idx) => (
//                 <div key={idx}>
//                   <img
//                     src={img}
//                     alt={`Image ${idx + 1}`}
//                     className="w-full h-[500px] object-contain rounded-md"
//                   />
//                 </div>
//               ))}
//             </Slider>
//             <button
//               onClick={closeModal}
//               className="mt-4 text-red-500 underline block mx-auto"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from "react-icons/fi";

// export default function ImageGallery({ images }) {
//   const [mainImage, setMainImage] = useState(images?.[0]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [startIndex, setStartIndex] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   // Update main image when images prop changes
//   useEffect(() => {
//     if (images?.length) {
//       setMainImage(images[0]);
//     }
//   }, [images]);

//   const openModal = (index) => {
//     setStartIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsFullscreen(false);
//   };

//   const toggleFullscreen = () => {
//     setIsFullscreen(!isFullscreen);
//   };

//   const sliderSettings = {
//     initialSlide: startIndex,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     customPaging: (i) => (
//       <div className="w-2 h-2 bg-white opacity-50 rounded-full mt-4"></div>
//     ),
//   };

//   function NextArrow(props) {
//     const { onClick } = props;
//     return (
//       <button
//         onClick={onClick}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
//         aria-label="Next image"
//       >
//         <FiChevronRight className="text-gray-800 text-xl" />
//       </button>
//     );
//   }

//   function PrevArrow(props) {
//     const { onClick } = props;
//     return (
//       <button
//         onClick={onClick}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
//         aria-label="Previous image"
//       >
//         <FiChevronLeft className="text-gray-800 text-xl" />
//       </button>
//     );
//   }

//   if (!images || images.length === 0) {
//     return (
//       <div className="w-full h-[400px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
//         No images available
//       </div>
//     );
//   }

//   return (
//     <div className="mb-8">
//       {/* Main Image with Zoom Button */}
//       <div className="relative rounded-xl overflow-hidden mb-4 group">
//         <img
//           src={mainImage}
//           alt="Main Image"
//           className="w-full h-[400px] md:h-[500px] object-cover rounded-xl cursor-zoom-in transition-transform duration-300 hover:scale-105"
//           onClick={() => openModal(images.indexOf(mainImage))}
//         />
//         <button
//           onClick={() => openModal(images.indexOf(mainImage))}
//           className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
//           aria-label="Zoom image"
//         >
//           <FiZoomIn className="text-gray-800 text-xl" />
//         </button>
//       </div>

//       {/* Thumbnails Grid */}
//       <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
//         {images?.slice(0, 9).map((url, index) => (
//           <div
//             key={index}
//             onClick={() => {
//               setMainImage(url);
//               openModal(index);
//             }}
//             className={`cursor-pointer overflow-hidden rounded-xl border-2 transition-all ${
//               mainImage === url
//                 ? "border-blue-500 scale-105"
//                 : "border-transparent hover:border-blue-300"
//             }`}
//           >
//             <img
//               src={url}
//               alt={`Thumbnail ${index + 1}`}
//               className="h-[80px] w-full object-cover"
//               loading="lazy"
//             />
//           </div>
//         ))}

//         {images?.length > 9 && (
//           <div
//             className="flex items-center justify-center bg-gray-100 text-sm text-gray-600 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors"
//             onClick={() => openModal(9)}
//           >
//             +{images.length - 9} more
//           </div>
//         )}
//       </div>

//       {/* Modal with Slider */}
//       {isModalOpen && (
//         <div
//           className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 ${
//             isFullscreen ? "p-0" : "p-4"
//           }`}
//           onClick={closeModal}
//         >
//           <div
//             className={`bg-white rounded-lg relative ${
//               isFullscreen ? "w-full h-full" : "w-full max-w-4xl"
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Slider {...sliderSettings} className="h-full">
//               {images.map((img, idx) => (
//                 <div key={idx} className="h-full">
//                   <img
//                     src={img}
//                     alt={`Image ${idx + 1}`}
//                     className={`w-full ${
//                       isFullscreen ? "h-screen" : "h-[70vh]"
//                     } object-contain`}
//                   />
//                 </div>
//               ))}
//             </Slider>

//             {/* Fullscreen Toggle Button */}
//             <button
//               onClick={toggleFullscreen}
//               className="absolute top-4 right-14 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all z-10"
//               aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
//             >
//               {isFullscreen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
//                 </svg>
//               )}
//             </button>

//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all z-10"
//               aria-label="Close gallery"
//             >
//               <FiX className="text-xl" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from "react-icons/fi";

// export default function ImageGallery({ images }) {
//   const [mainImage, setMainImage] = useState(images?.[0]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [startIndex, setStartIndex] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     if (images?.length) {
//       setMainImage(images[0]);
//     }
//   }, [images]);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!isModalOpen) return;

//       if (e.key === "ArrowRight") {
//         sliderRef.current?.slickNext();
//       } else if (e.key === "ArrowLeft") {
//         sliderRef.current?.slickPrev();
//       } else if (e.key === "Escape") {
//         closeModal();
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [isModalOpen]);

//   const openModal = (index) => {
//     setStartIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsFullscreen(false);
//   };

//   const toggleFullscreen = () => {
//     setIsFullscreen(!isFullscreen);
//   };

//   const sliderSettings = {
//     initialSlide: startIndex,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     customPaging: () => (
//       <div className="w-2 h-2 bg-white opacity-50 rounded-full mt-4"></div>
//     ),
//   };

//   function NextArrow(props) {
//     const { onClick } = props;
//     return (
//       <button
//         onClick={onClick}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
//         aria-label="Next image"
//       >
//         <FiChevronRight className="text-gray-800 text-xl" />
//       </button>
//     );
//   }

//   function PrevArrow(props) {
//     const { onClick } = props;
//     return (
//       <button
//         onClick={onClick}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
//         aria-label="Previous image"
//       >
//         <FiChevronLeft className="text-gray-800 text-xl" />
//       </button>
//     );
//   }

//   if (!images || images.length === 0) {
//     return (
//       <div className="w-full h-[400px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
//         No images available
//       </div>
//     );
//   }

//   return (
//     <div className="mb-8">
//       {/* Main Image with Zoom Button */}
//       <div className="relative rounded-xl overflow-hidden mb-4 group">
//         <img
//           src={mainImage}
//           alt="Main Image"
//           className="w-full h-[400px] md:h-[500px] object-cover rounded-xl cursor-zoom-in transition-transform duration-300 hover:scale-105"
//           onClick={() => openModal(images.indexOf(mainImage))}
//         />
//         <button
//           onClick={() => openModal(images.indexOf(mainImage))}
//           className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
//           aria-label="Zoom image"
//         >
//           <FiZoomIn className="text-gray-800 text-xl" />
//         </button>
//       </div>

//       {/* Thumbnails Grid */}
//       <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
//         {images?.slice(0, 9).map((url, index) => (
//           <div
//             key={index}
//             onClick={() => {
//               setMainImage(url);
//               openModal(index);
//             }}
//             className={`cursor-pointer overflow-hidden rounded-xl border-2 transition-all ${
//               mainImage === url
//                 ? "border-blue-500 scale-105"
//                 : "border-transparent hover:border-blue-300"
//             }`}
//           >
//             <img
//               src={url}
//               alt={`Thumbnail ${index + 1}`}
//               className="h-[80px] w-full object-cover"
//               loading="lazy"
//             />
//           </div>
//         ))}

//         {images?.length > 9 && (
//           <div
//             className="flex items-center justify-center bg-gray-100 text-sm text-gray-600 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors"
//             onClick={() => openModal(9)}
//           >
//             +{images.length - 9} more
//           </div>
//         )}
//       </div>

//       {/* Modal with Slider */}
//       {isModalOpen && (
//         <div
//           className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 ${
//             isFullscreen ? "p-0" : "p-4"
//           }`}
//           onClick={closeModal}
//         >
//           <div
//             className={`bg-white rounded-lg relative ${
//               isFullscreen ? "w-full h-full" : "w-full max-w-4xl"
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Slider ref={sliderRef} {...sliderSettings} className="h-full">
//               {images.map((img, idx) => (
//                 <div key={idx} className="h-full">
//                   <img
//                     src={img}
//                     alt={`Image ${idx + 1}`}
//                     className={`w-full ${
//                       isFullscreen ? "h-screen" : "h-[70vh]"
//                     } object-contain`}
//                   />
//                   <div className="text-center text-sm text-gray-500 mt-2">
//                     {idx + 1} / {images.length}
//                   </div>
//                 </div>
//               ))}
//             </Slider>

//             {/* Fullscreen Toggle */}
//             <button
//               onClick={toggleFullscreen}
//               className="absolute top-4 right-14 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all z-10"
//               aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
//             >
//               {isFullscreen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
//                 </svg>
//               )}
//             </button>

//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all z-10"
//               aria-label="Close gallery"
//             >
//               <FiX className="text-xl" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from "react-icons/fi";

// export default function ImageGallery({ images }) {
//   const [mainImage, setMainImage] = useState(images?.[0]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [startIndex, setStartIndex] = useState(0);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [modalView, setModalView] = useState("grid"); // 'grid' or 'slider'

//   useEffect(() => {
//     if (images?.length) {
//       setMainImage(images[0]);
//     }
//   }, [images]);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!isModalOpen || modalView !== "slider") return;
//       if (e.key === "ArrowRight") {
//         document.querySelector(".slick-next")?.click();
//       } else if (e.key === "ArrowLeft") {
//         document.querySelector(".slick-prev")?.click();
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isModalOpen, modalView]);

//   const openModalGrid = () => {
//     setModalView("grid");
//     setIsModalOpen(true);
//   };

//   const openSlider = (index) => {
//     setStartIndex(index);
//     setModalView("slider");
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setIsFullscreen(false);
//     setModalView("grid");
//   };

//   const toggleFullscreen = () => {
//     setIsFullscreen(!isFullscreen);
//   };

//   const sliderSettings = {
//     initialSlide: startIndex,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     customPaging: () => (
//       <div className="w-2 h-2 bg-white opacity-50 rounded-full mt-4"></div>
//     ),
//   };

//   function NextArrow({ onClick }) {
//     return (
//       <button
//         onClick={onClick}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md"
//         aria-label="Next image"
//       >
//         <FiChevronRight className="text-gray-800 text-xl" />
//       </button>
//     );
//   }

//   function PrevArrow({ onClick }) {
//     return (
//       <button
//         onClick={onClick}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md"
//         aria-label="Previous image"
//       >
//         <FiChevronLeft className="text-gray-800 text-xl" />
//       </button>
//     );
//   }

//   if (!images || images.length === 0) {
//     return (
//       <div className="w-full h-[400px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
//         No images available
//       </div>
//     );
//   }

//   return (
//     <div className="mb-8">
//       {/* Main Display Image */}
//       <div className="relative rounded-xl overflow-hidden mb-4 group">
//         <img
//           src={mainImage}
//           alt="Main"
//           className="w-full h-[400px] md:h-[500px] object-cover rounded-xl cursor-zoom-in transition-transform duration-300 hover:scale-105"
//           onClick={openModalGrid}
//         />
//         <button
//           onClick={openModalGrid}
//           className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100"
//         >
//           <FiZoomIn className="text-gray-800 text-xl" />
//         </button>
//       </div>

//       {/* Thumbnails Preview */}
//       <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
//         {images.slice(0, 9).map((url, index) => (
//           <div
//             key={index}
//             onClick={openModalGrid}
//             className="cursor-pointer overflow-hidden rounded-xl border-2 hover:border-blue-400 transition-all"
//           >
//             <img
//               src={url}
//               alt={`Thumbnail ${index + 1}`}
//               className="h-[80px] w-full object-cover"
//               loading="lazy"
//             />
//           </div>
//         ))}

//         {images.length > 9 && (
//           <div
//             className="flex items-center justify-center bg-gray-100 text-sm text-gray-600 rounded-xl cursor-pointer hover:bg-gray-200"
//             onClick={openModalGrid}
//           >
//             +{images.length - 9} more
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4`}
//           onClick={closeModal}
//         >
//           <div
//             className={`bg-white rounded-lg relative w-full ${
//               isFullscreen ? "h-full" : "max-w-6xl max-h-[90vh] overflow-y-auto"
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Close */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full z-10"
//             >
//               <FiX className="text-xl" />
//             </button>

//             {/* Fullscreen Button (only in slider) */}
//             {modalView === "slider" && (
//               <button
//                 onClick={toggleFullscreen}
//                 className="absolute top-4 right-14 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full z-10"
//               >
//                 {isFullscreen ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
//                   </svg>
//                 )}
//               </button>
//             )}

//             {/* Grid View */}
//             {modalView === "grid" && (
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
//                 {images.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt={`Grid ${index}`}
//                     className="w-full h-[200px] object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform"
//                     onClick={() => openSlider(index)}
//                   />
//                 ))}
//               </div>
//             )}

//             {/* Slider View */}
//             {modalView === "slider" && (
//               <Slider {...sliderSettings} className="h-full">
//                 {images.map((img, idx) => (
//                   <div key={idx} className="h-full">
//                     <img
//                       src={img}
//                       alt={`Image ${idx + 1}`}
//                       className={`w-full ${
//                         isFullscreen ? "h-screen" : "h-[70vh]"
//                       } object-contain`}
//                     />
//                   </div>
//                 ))}
//               </Slider>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export default function HotelGallery({ images = [] }) {
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const openSliderFromGrid = (index) => {
    setSliderIndex(index);
    setIsSliderOpen(true);
    setIsGridOpen(false);
  };

  const sliderSettings = {
    initialSlide: sliderIndex,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
      >
        <FiChevronRight className="text-xl text-gray-700" />
      </button>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
      >
        <FiChevronLeft className="text-xl text-gray-700" />
      </button>
    );
  }

  return (
    <>
      {/* === Top Two-Column Layout === */}
      <div className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden">
        {/* === Main Large Image === */}
        <div className="col-span-2">
          <img
            src={images[0]}
            alt="Main"
            className="w-full h-[420px] object-cover rounded cursor-pointer"
            onClick={() => setIsGridOpen(true)}
          />
        </div>

        {/* === Right Two Small Images (Stacked) === */}
        <div className="flex flex-col gap-2">
          {images.slice(1, 3).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`side-img-${idx}`}
              className="w-full h-[204px] object-cover rounded cursor-pointer"
              onClick={() => setIsGridOpen(true)}
            />
          ))}
        </div>
      </div>

      {/* === Bottom Thumbnails Row === */}
      <div className="grid grid-cols-5 gap-2 mt-2">
        {images.slice(3, 7).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            className="w-full h-[100px] object-cover rounded cursor-pointer"
            onClick={() => setIsGridOpen(true)}
          />
        ))}

        {/* "+X photos" */}
        {images.length > 7 && (
          <div
            className="w-full h-[100px] bg-black bg-opacity-60 text-white flex items-center justify-center text-sm font-semibold rounded cursor-pointer"
            onClick={() => setIsGridOpen(true)}
          >
            +{images.length - 7} photos
          </div>
        )}
      </div>

      {/* === Grid Modal === */}
      {isGridOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-6">
          <div className="bg-white max-w-6xl w-full rounded-lg overflow-auto p-6 relative max-h-[90vh]">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              All Photos
            </h2>
            <button
              onClick={() => setIsGridOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 overflow-y-auto">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`grid-img-${index}`}
                  className="w-full h-32 object-cover rounded cursor-pointer hover:scale-105 transition"
                  onClick={() => openSliderFromGrid(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* === Slider Modal === */}
      {isSliderOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsSliderOpen(false)}
              className="absolute top-4 right-4 text-white z-10"
            >
              <FiX size={28} />
            </button>
            <Slider {...sliderSettings}>
              {images.map((img, idx) => (
                <div key={idx} className="flex items-center justify-center">
                  <img
                    src={img}
                    alt={`Slide ${idx}`}
                    className="w-full max-h-[80vh] object-contain mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}
