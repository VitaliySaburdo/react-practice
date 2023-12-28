import { useEffect, useState } from "react";
import { fetchData } from "../service/service";
import "./App.css";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(query);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  const HandleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery("");
  };

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <SearchBar handleOnSubmit={HandleSearch} handleOnChange={handleOnInput} />
    </>
  );
}

export default App;
