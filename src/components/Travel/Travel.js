import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Travel = () => {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div className="flex justify-center items-center min-h-screen">
        {/* First div */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-54 w-full sm:w-1/2">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                Travel
              </h1>
            </div>
          </div>
          <div className="text-center">
            <form>
              <div className="sm:col-span-3 flex items-center justify-center w-full">
                <div className="mt-2 flex items-center justify-center w-96 rounded-full shadow-custom-shadow">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Search For Your Flights, Hotels and more"
                    className="block w-full h-12 px-3 py-1.5 font-medium text-lg text-gray-900 bg-white rounded-full placeholder:text-gray-400 placeholder:text-sm focus:outline-none sm:text-sm text-center"
                  />
                </div>
              </div>
            </form>
            <div className="mt-8">
              <h1 className="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                "Adventure is out there – where will you go next?"{" "}
              </h1>
            </div>
          </div>
        </div>

        {/* Second div */}
        <div className="w-full sm:w-1/2 py-32 sm:py-48 lg:py-54 text-center">
          <h1>abc</h1>
        </div>
      </div>
    </div>
  );
};

export default Travel;
