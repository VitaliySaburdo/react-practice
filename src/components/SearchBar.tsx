import search from "../assets/search.svg";

type SearchBarProps = {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  handleOnChange,
  handleOnSubmit,
}) => {
  return (
    <>
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={handleOnSubmit}>
          <input
            type="text"
            className="SearchForm-input"
            name="query"
            onChange={handleOnChange}
          />
          <button className="SearchForm-button">
            <img src={search} alt="search" />
          </button>
        </form>
      </div>
    </>
  );
};
