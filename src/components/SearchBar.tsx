import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar flex justify-center items-center p-2 ">
      <input
        type="text"
        className="search-input p-2 w-xl bg-zinc-800 text-zinc-100 rounded-lg"
        placeholder="Search armor piece..."
        value={query}
        onChange={handleInputChange}
      />
      <button
        className="search-button p-2 bg-zinc-500 text-zinc-100 rounded-lg cursor-pointer hover:bg-zinc-800 transition"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
