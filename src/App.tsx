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

  const onSearchQuery = (query: string) => {
    setQuery(query);
  };

  return (
    <>
      <SearchBar onSubmit={onSearchQuery} />
    </>
  );
}

export default App;
