import { useEffect } from "react";
import { fetchData } from "../service/service";
import "./App.css";

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
      <h1>App</h1>
    </>
  );
}

export default App;
