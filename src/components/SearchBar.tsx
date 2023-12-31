import { useState } from "react";
import search from "../assets/search.svg";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={handleOnSubmit}>
          <input
            type="text"
            className="SearchForm-input"
            name="query"
            onChange={handleOnChange}
            value={query}
            placeholder="Enter your query"
          />
          <button className="SearchForm-button">
            <img src={search} alt="search" />
          </button>
        </form>
      </div>
    </>
  );
};
