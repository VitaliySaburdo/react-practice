import { useEffect, useState } from "react";
import { fetchData } from "../service/service";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { ImageGallery } from "./components/ImageGallery";

function App() {
  const [query, setQuery] = useState<string>("");
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if(query === '') {
        return
      }
      try {
        const data = await fetchData(query);
        setGallery(data);
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
      <ImageGallery gallery={gallery}/>
    </>
  );
}

export default App;
