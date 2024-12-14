import React, { useState } from "react";
import { searchFlights } from "../../utils/api";
import AirportSearch from "../Flight/AirportSearch";

const Flight = () => {
  const [formData, setFormData] = useState({
    fromDestination: "",
    toDestination: "",
    date: "",
    returnDate: "",
    adults: 1,
    children: 0,
    classType: "economy",
    tripType: "roundtrip",
  });

  const [flightLoading, setFlightLoading] = useState(false);
  const [flightResults, setFlightResults] = useState(null);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSuggestionClick = (suggestion, name) => {
    setFormData({
      ...formData,
      [name]: suggestion.suggestionTitle,
      [name + "Object"]: suggestion,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      date,
      returnDate,
      classType,
      adults,
      children,
      tripType,
      fromDestinationObject,
      toDestinationObject,
    } = formData;

    if (!fromDestinationObject || !toDestinationObject) {
      alert("Please select valid departure and destination airports.");
      return;
    }

    setFlightLoading(true);

    try {
      const flights = await searchFlights({
        originSkyId: fromDestinationObject.skyId,
        destinationSkyId: toDestinationObject.skyId,
        originEntityId: fromDestinationObject.entityId,
        destinationEntityId: toDestinationObject.entityId,
        date,
        returnDate,
        cabinClass: classType,
        tripType: tripType,
        adults: adults,
        children: children,
        sortBy: "best",
        currency: "USD",
        countryCode: "US",
        market: "en-US",
      });

      setFlightResults(flights);
      console.log(flights.data.itineraries);
      console.log(flightResults);
    } catch (error) {
      alert("Failed to fetch flights. Please try again later.");
    } finally {
      setFlightLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center absolute top-[64px] w-full mt-5 z-10">
        <div className="bg-white p-4 rounded-lg shadow-custom-shadow w-full max-w-3xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Book Your Flight
          </h1>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Trip Type
                </label>
                <select
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="roundtrip">Roundtrip</option>
                  <option value="oneway">One Way</option>
                  <option value="multicity">Multi-City</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Class
                </label>
                <select
                  name="classType"
                  value={formData.classType}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="economy">Economy</option>
                  <option value="premium-economy">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Adults
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        adults: Math.max(1, formData.adults - 1),
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded-l-md mt-1 bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full text-center px-4 py-2 border-t border-b border-gray-300 mt-1"
                    min="1"
                    max="10"
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        adults: Math.min(10, formData.adults + 1),
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded-r-md mt-1 bg-gray-200 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Children
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        children: Math.max(0, formData.children - 1),
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded-l-md mt-1 bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full text-center px-4 py-2 border-t border-b border-gray-300 mt-1"
                    min="0"
                    max="10"
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        children: Math.min(10, formData.children + 1),
                      })
                    }
                    className="px-3 py-2 border border-gray-300 rounded-r-md mt-1 bg-gray-200 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <AirportSearch
                  onSuggestionClick={handleSuggestionClick}
                  name="fromDestination"
                />
              </div>
              <div className="relative">
                <AirportSearch
                  onSuggestionClick={handleSuggestionClick}
                  name="toDestination"
                />
              </div>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bblue-600"
                required
              />
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bblue-600"
                required
              />
            </div>

            <div>
              <button
                onClick={handleSubmit}
                disabled={flightLoading}
                className="w-full  bg-teal-900 hover:bg-teal-300 flex justify-center text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 focus:ring-2 focus:ring-bblue-600"
              >
                {flightLoading ? "Searching Flights..." : "Search Flights"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen py-8 mt-[359px]">
        <div className="w-full max-w-3xl space-y-6">
          {flightResults?.data.itineraries.map((itinerary) => (
            <div
              key={itinerary.id}
              className="bg-white p-3 rounded-lg shadow-lg  hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white p-2 rounded-lg">
                Price: {itinerary.price.formatted}
              </h2>
              {itinerary.legs.map((leg, index) => (
                <div
                  key={leg.id}
                  className="mb-6 border-b border-gray-200 pb-4"
                >
                  <div className="grid grid-cols-2 gap-6 text-gray-700">
                    <p>
                      <strong>Origin:</strong> {leg.origin.name}
                    </p>
                    <p>
                      <strong>Destination:</strong> {leg.destination.name}
                    </p>
                    <p>
                      <strong>City:</strong> {leg.destination.city}
                    </p>
                    <p>
                      <strong>Country:</strong> {leg.destination.country}
                    </p>
                    <p>
                      <strong>Duration:</strong> {leg.durationInMinutes} mins
                    </p>
                    <p>
                      <strong>Stops:</strong> {leg.stopCount}
                    </p>
                  </div>
                  {leg.segments?.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-800 bg-teal-100 p-2 rounded-md mb-2">
                        Segments:
                      </h4>
                      {leg.segments.map((segment, segIndex) => (
                        <div
                          key={segment.id}
                          className="ml-4 border-l-2 pl-4 border-gray-300 mb-4"
                        >
                          <p>
                            <strong>Flight Number:</strong>{" "}
                            {segment.flightNumber}
                          </p>
                          <p>
                            <strong>Departure:</strong> {segment.departure}
                          </p>
                          <p>
                            <strong>Arrival:</strong> {segment.arrival}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Flight;
