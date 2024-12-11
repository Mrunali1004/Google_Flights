import React, { useState } from "react";
import { searchHotelsByDesitnation } from "../../utils/api";

const Hotel = () => {
  const [query, setQuery] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a valid query.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const params = { query };
      const data = await searchHotelsByDesitnation(params);
      if (data && data.status && Array.isArray(data.data)) {
        setHotels(data.data);
        setError(null);
        setQuery("");
      } else {
        setError("No hotels found or invalid data format.");
      }
    } catch (err) {
      console.error("Error fetching hotels:", err);
      setError("Failed to fetch hotels. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  console.log(hotels);

  return (
    <>
      <div className="max-w-md mx-auto mt-20 p-10 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          Find Your Perfect Stay
        </h1>
        <form
          onSubmit={handleSearch}
          className="flex flex-col items-center gap-4"
        >
          <input
            type="text"
            placeholder="Enter a City"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-blue-600 bg-black text-white font-semibold rounded-md transform transition duration-300 ease-in-out ${
              loading ? "bg-blue-300 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-sm text-center text-red-500">{error}</p>
        )}
      </div>

      <div className="py-10">
        <div className="flex flex-wrap justify-center gap-6">
          {hotels.length > 0
            ? hotels.map((hotel, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-1/2 lg:w-1/3 transform transition duration-300 hover:scale-105"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {hotel.entityName || "Unnamed Hotel"}
                    </h3>

                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          <strong>Class:</strong> {hotel.class || "N/A"}
                        </span>
                        <span className="text-sm text-gray-600">
                          <strong>Entity ID:</strong> {hotel.entityId || "N/A"}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          <strong>Entity Type:</strong>{" "}
                          {hotel.entityType || "N/A"}
                        </span>
                        <span className="text-sm text-gray-600">
                          <strong>Hierarchy:</strong> {hotel.hierarchy || "N/A"}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">
                          <strong>Location:</strong> {hotel.location || "N/A"}
                        </span>
                      </div>

                      {/* Points of Interest */}
                      {hotel.pois && hotel.pois.length > 0 ? (
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-700">
                            Points of Interest:
                          </h4>
                          <ul className="list-inside list-decimal ml-5 space-y-1">
                            {hotel.pois.map((poi, poiIndex) => (
                              <li key={poiIndex}>
                                <strong>{poi.entityId || "Entity Id"}</strong> -{" "}
                                {poi.entityName || "Entity Name"}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="mt-4">
                          <span className="text-sm text-gray-500">
                            No points of interest available.
                          </span>
                        </div>
                      )}

                      <div className="mt-4">
                        <span className="text-sm text-gray-600">
                          <strong>Score:</strong>{" "}
                          {hotel.score !== undefined ? hotel.score : "N/A"}
                        </span>
                      </div>

                      <div className="mt-2">
                        <span className="text-sm text-gray-600">
                          <strong>Suggested Item:</strong>{" "}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: hotel.suggestItem || "N/A",
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : !loading && (
                <p className="text-sm text-center text-gray-500">
                  No results found. Try another search!
                </p>
              )}
        </div>
      </div>
    </>
  );
};

export default Hotel;
