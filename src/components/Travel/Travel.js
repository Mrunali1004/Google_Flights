import React from "react";
import image1 from "../../assets/image/bg7.jpg";
import image2 from "../../assets/image/bg4.jpg";
import image3 from "../../assets/image/bg8.jpg";
import image4 from "../../assets/image/bg9.jpg";
import image5 from "../../assets/image/bg5.jpg";

const Travel = () => {
  return (
    <div className="relative isolate px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen gap-8">
        {/* First Section - Heading and Introduction */}
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32 w-full lg:w-1/2 text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
              Travel the World
            </h1>
          </div>
          <p className="mt-8 text-lg text-black">
            "Adventure is out there – where will you go next?"
          </p>
          <p className="mt-4 text-lg text-black opacity-75">
            Embark on a journey to discover new destinations, cultures, and
            experiences. Let the world be your canvas!
          </p>
        </div>

        {/* Second Section - Travel Destinations */}
        <div className="w-full lg:w-1/2 flex flex-wrap justify-center gap-4 h-[550px]">
          <div className="w-5/12 sm:w-1/3 md:w-1/4 lg:w-1/4 flex justify-center items-center">
            <div className=" p-4 rounded-lg flex justify-center items-center max-w-[200px] shadow-xl hover:shadow-2xl transition-all">
              <img
                src={image1}
                alt="Destination 1"
                className="w-full h-auto rounded-lg shadow-custom-shadow object-cover"
              />
            </div>
          </div>

          <div className="w-5/12 sm:w-1/3 md:w-1/4 lg:w-1/4 flex flex-col justify-between space-y-4">
            <div className="bg-green-200 p-4 rounded-lg flex flex-col justify-between h-full space-y-4 shadow-xl hover:shadow-2xl transition-all">
              <img
                src={image2}
                alt="Destination 2"
                className="w-full h-auto rounded-lg shadow-custom-shadow object-cover mb-4"
              />
              <img
                src={image3}
                alt="Destination 3"
                className="w-full h-auto rounded-lg shadow-custom-shadow object-cover"
              />
            </div>
          </div>

          <div className="w-5/12 sm:w-1/3 md:w-1/4 lg:w-1/4 flex flex-col justify-around space-y-4">
            <div className="p-4 rounded-lg flex flex-col justify-around h-full space-y-4 shadow-xl hover:shadow-2xl transition-all">
              <img
                src={image4}
                alt="Destination 4"
                className="w-full h-auto rounded-lg shadow-custom-shadow object-cover mb-4"
              />
              <img
                src={image5}
                alt="Destination 5"
                className="w-full h-auto rounded-lg shadow-custom-shadow object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Travel Quote Section */}
      <div className="bg-teal-800 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold">
          Travel is the Only Thing You Buy That Makes You Richer
        </h2>
        <p className="mt-4 text-xl italic">
          "To Travel is to Live, To Live is to Experience, And to Experience is
          to Grow."
        </p>
      </div>

      {/* Why Travel? Section */}
      <div className="py-16 px-6 sm:px-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Why Travel?</h3>
        <p className="mt-4 text-lg text-gray-700">
          Traveling enriches your life with unforgettable memories, broadens
          your horizons, and deepens your understanding of the world around you.
          Whether you're looking for adventure, relaxation, or cultural
          immersion, the world has something incredible waiting for you.
        </p>
        <div className="mt-8 flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-xl text-gray-800">Adventure</h4>
            <p className="text-gray-600">
              Explore the unknown and step out of your comfort zone.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-xl text-gray-800">Culture</h4>
            <p className="text-gray-600">
              Immerse yourself in new customs, food, and traditions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-semibold text-xl text-gray-800">Relaxation</h4>
            <p className="text-gray-600">
              Find serenity in the tranquil corners of the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
