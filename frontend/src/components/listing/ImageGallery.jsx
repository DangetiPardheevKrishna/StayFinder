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
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from "react-icons/fi";

export default function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images?.[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Update main image when images prop changes
  useEffect(() => {
    if (images?.length) {
      setMainImage(images[0]);
    }
  }, [images]);

  const openModal = (index) => {
    setStartIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const sliderSettings = {
    initialSlide: startIndex,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div className="w-2 h-2 bg-white opacity-50 rounded-full mt-4"></div>
    ),
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
        aria-label="Next image"
      >
        <FiChevronRight className="text-gray-800 text-xl" />
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all"
        aria-label="Previous image"
      >
        <FiChevronLeft className="text-gray-800 text-xl" />
      </button>
    );
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[400px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
        No images available
      </div>
    );
  }

  return (
    <div className="mb-8">
      {/* Main Image with Zoom Button */}
      <div className="relative rounded-xl overflow-hidden mb-4 group">
        <img
          src={mainImage}
          alt="Main Image"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-xl cursor-zoom-in transition-transform duration-300 hover:scale-105"
          onClick={() => openModal(images.indexOf(mainImage))}
        />
        <button
          onClick={() => openModal(images.indexOf(mainImage))}
          className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100"
          aria-label="Zoom image"
        >
          <FiZoomIn className="text-gray-800 text-xl" />
        </button>
      </div>

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
        {images?.slice(0, 9).map((url, index) => (
          <div
            key={index}
            onClick={() => {
              setMainImage(url);
              openModal(index);
            }}
            className={`cursor-pointer overflow-hidden rounded-xl border-2 transition-all ${
              mainImage === url
                ? "border-blue-500 scale-105"
                : "border-transparent hover:border-blue-300"
            }`}
          >
            <img
              src={url}
              alt={`Thumbnail ${index + 1}`}
              className="h-[80px] w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}

        {images?.length > 9 && (
          <div
            className="flex items-center justify-center bg-gray-100 text-sm text-gray-600 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={() => openModal(9)}
          >
            +{images.length - 9} more
          </div>
        )}
      </div>

      {/* Modal with Slider */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 ${
            isFullscreen ? "p-0" : "p-4"
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-lg relative ${
              isFullscreen ? "w-full h-full" : "w-full max-w-4xl"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Slider {...sliderSettings} className="h-full">
              {images.map((img, idx) => (
                <div key={idx} className="h-full">
                  <img
                    src={img}
                    alt={`Image ${idx + 1}`}
                    className={`w-full ${
                      isFullscreen ? "h-screen" : "h-[70vh]"
                    } object-contain`}
                  />
                </div>
              ))}
            </Slider>

            {/* Fullscreen Toggle Button */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-14 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all z-10"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all z-10"
              aria-label="Close gallery"
            >
              <FiX className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
