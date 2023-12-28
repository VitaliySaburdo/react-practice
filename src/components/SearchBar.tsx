import search from "../assets/react.svg";

export const SearchBar = () => {
  return (
    <>
      <div className="Searchbar">
        <form className="SearchForm">
          <input type="text" className="SearchForm-input" />
          <button className="SearchForm-button">{search}</button>
        </form>
      </div>
    </>
  );
};
