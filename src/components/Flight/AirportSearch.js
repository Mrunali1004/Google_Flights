import React, { useState, useEffect } from "react";
import { searchAirport } from "../../utils/api";

export default function AirportSearch({ onSuggestionClick, name }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {}, [searchTerm]);

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim().length > 2) {
      setIsSearching(true);
      const { data, status } = await searchAirport(
        e.target.value.trim(),
        "en-US"
      ).catch((e) => setIsSearching(false));
      setIsSearching(false);
      if (data && status) {
        const fetchedSuggestions = data.map((item) => ({
          suggestionTitle: item.presentation.suggestionTitle,
          skyId: item.skyId,
          entityId: item.entityId,
        }));
        setSuggestions(fetchedSuggestions);
      }
    }
  };
  const handleSuggestionClick = (e) => {
    setSearchTerm(e.suggestionTitle);
    onSuggestionClick && onSuggestionClick(e, name);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        name="fromDestination"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Where from?"
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
        required
      />
      {isSearching && <div className="absolute top-full mt-2">Loading...</div>}
      {suggestions.length > 0 && (
        <ul className="absolute top-full mt-2 bg-white shadow-custom-shadow  rounded-md w-full max-h-48 overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {suggestion.suggestionTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
