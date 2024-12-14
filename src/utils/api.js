import axios from "axios";

const API_BASE_URL = "https://sky-scrapper.p.rapidapi.com/api/v1";
const API_BASE_URL_FLIGHT =
  "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights";

const headers = {
  "x-rapidapi-key": "9d9066de53msh1d126c9e79b8b64p1f2affjsn608a2748f342",
  "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
};

export const searchFlights = async (payload) => {
  try {
    const response = await axios.get(`${API_BASE_URL_FLIGHT}`, {
      params: payload,
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error searching for flights:", error);
    return null;
  }
};

export const searchFlightsPrice = async (payload) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/flights/getPriceCalendar`,
      {
        params: payload,
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error searching for flights Price:", error);
    return null;
  }
};

export const getFlightDetails = async (payload) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/flights/getFlightDetails`,
      {
        params: payload,
        headers: {
          "x-rapidapi-key":
            "9d9066de53msh1d126c9e79b8b64p1f2affjsn608a2748f342",
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching flight details:", error);
    return null;
  }
};

// export const getFlightDetails = async (sessionId, itineraryId, legs) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/flights/getFlightDetails`, {
//       params: {
//         itineraryId,  
//         legs: JSON.stringify(legs),  
//         sessionId,  
//       },
//       headers: {
//         "x-rapidapi-key": "9d9066de53msh1d126c9e79b8b64p1f2affjsn608a2748f342",
//         "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching flight details:", error);
//     return null;
//   }
// };

export const searchAirport = async (query, locale) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/flights/searchAirport`, {
      headers,
      params: {
        query,
        locale,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching for airport:", error);
    return null;
  }
};

export const searchHotelsByDesitnation = async (params) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/hotels/searchDestinationOrHotel`,
      {
        headers,
        params,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};

export const getNearbyAirports = async (lat, lng, locale) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/flights/getNearByAirports`,
      {
        headers: {
          "x-rapidapi-key":
            "465b673639msh44e80cdc259fda4p14accdjsn5bc7f5408681",
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
        },
        params: {
          lat: lat,
          lng: lng,
          locale: locale,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching nearby airports:", error);
    return null;
  }
};
