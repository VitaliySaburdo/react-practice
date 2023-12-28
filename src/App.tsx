import { useEffect } from "react";
import { fetchData } from "../service/service";
import "./App.css";
import { SearchBar } from "./components/SearchBar";

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />
    </>
  );
}

export default App;
