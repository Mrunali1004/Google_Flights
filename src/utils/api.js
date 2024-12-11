import axios from "axios";

const API_BASE_URL = "https://sky-scrapper.p.rapidapi.com/api/v1";

const headers = {
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
  "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
};

// Hotels

export const searchHotelsByDesitnation = async (params) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hotels/searchDestinationOrHotel`, {
      headers,
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};

// export const fetchHotelsDetails = async (params) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/hotels/getHotelDetails`, {
//       headers,
//       params,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching hotels:", error);
//     throw error;
//   }
// };

