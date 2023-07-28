// import React, { useState, useEffect } from "react";

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     "https://acharyaproducts.com/wp-content/uploads/2023/01/banner3b.jpg",
//     "https://acharyaproducts.com/wp-content/uploads/2023/01/banner1.jpg",
//     // Add more slide URLs as needed
//   ];

//   useEffect(() => {
//     // Auto slide every 5 seconds (adjust the timing as needed)
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000);

//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="relative h-screen">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute w-full h-full transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//           style={{ zIndex: index === currentSlide ? 1 : 0 }}
//         >
//           <img src={slide} alt="" className="w-full h-auto" />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center">
//               <h2 className="text-white text-2xl font-bold">Shop Now</h2>
//               <button className="bg-green-500 text-white font-medium py-2 px-4 mt-4 rounded-md">
//                 Shop Now
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//       {/* Navigation arrows */}
//       <button
//         onClick={() =>
//           goToSlide((currentSlide - 1 + slides.length) % slides.length)
//         }
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md z-10"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={() => goToSlide((currentSlide + 1) % slides.length)}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md z-10"
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// export default Carousel;


// import React, { useState, useEffect } from "react";

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     "https://acharyaproducts.com/wp-content/uploads/2023/01/banner3b.jpg",
//     "https://acharyaproducts.com/wp-content/uploads/2023/01/banner1.jpg",
//     // Add more slide URLs as needed
//   ];

//   useEffect(() => {
//     // Auto slide every 5 seconds (adjust the timing as needed)
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000);

//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="relative h-screen">
//       <div className="flex h-full">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`w-full h-full absolute transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//             style={{
//               left: `${(index - currentSlide) * 100}%`,
//               zIndex: index === currentSlide ? 1 : 0,
//             }}
//           >
//             <img src={slide} alt="" className="w-full h-96 object-cover" />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center">
//                 <h2 className="text-white text-2xl font-bold">Shop Now</h2>
//                 <button className="bg-green-500 text-white font-medium py-2 px-4 mt-4 rounded-md">
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Navigation arrows */}
//       <button
//         onClick={() =>
//           goToSlide((currentSlide - 1 + slides.length) % slides.length)
//         }
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md z-10 hidden lg:block"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={() => goToSlide((currentSlide + 1) % slides.length)}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md z-10 hidden lg:block"
//       >
//         &#8594;
//       </button>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//         <div className="flex space-x-2">
//           {slides.map((_, index) => (
//             <div
//               key={index}
//             //   className={`w-4 h-4 rounded-full ${
//                 // index === currentSlide ? "bg-gray-800" : "bg-gray-300"
//             //   }`}
//               onClick={() => goToSlide(index)}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://acharyaproducts.com/wp-content/uploads/2023/01/banner3b.jpg",
    "https://acharyaproducts.com/wp-content/uploads/2023/01/banner1.jpg",
    // Add more slide URLs as needed
  ];

  useEffect(() => {
    // Auto slide every 5 seconds (adjust the timing as needed)
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-full  absolute transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${(index - currentSlide) * 100}%`,
            zIndex: index === currentSlide ? 1 : 0,
          }}
        >
          <img src={slide} alt="" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-2xl font-bold">Shop Now</h2>
              <button className="bg-green-500 text-white font-medium py-2 px-4 mt-4 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* Navigation arrows */}
      <button
        onClick={() =>
          goToSlide((currentSlide - 1 + slides.length) % slides.length)
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md z-10 hidden lg:block"
      >
        &#8592;
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md z-10 hidden lg:block"
      >
        &#8594;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              //   className={`w-4 h-4 rounded-full ${
              // index === currentSlide ? "bg-gray-800" : "bg-gray-300"
              //   }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
