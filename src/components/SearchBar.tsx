import { useEffect, useState, useCallback } from "react";
import { Search } from "lucide-react"; 
import Suggestions from "./Suggestions";
import { getSuggestions } from "../services/getSuggestions";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Debounced fetch function
  const fetchSuggestions = useCallback(async () => {
    if (query.trim().length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const data = await getSuggestions(query);
      setSuggestions(data || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  }, [query]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchSuggestions();
    }, 150);

    return () => clearTimeout(delayDebounce);
  }, [query, fetchSuggestions]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSuggestions();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        {/* Input field */}
        <input
          value={query}
          type="text"
          placeholder="Search books by title or author..."
          aria-label="Search books"
          className="w-full pl-12 pr-28 py-4 text-base rounded-full border border-gray-200 shadow-md bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:outline-none transition"
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Left search icon */}
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
          <Search size={20} />
        </div>

        {/* Search button */}
        <button
          type="submit"
          className="absolute right-2 top-2 bottom-2 px-6 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition"
        >
          Search
        </button>
      </form>

      {/* Suggestions list */}
      {suggestions.length > 0 && <Suggestions suggestions={suggestions} />}
    </div>
  );
};

export default SearchBar;
