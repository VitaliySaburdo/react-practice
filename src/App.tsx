import { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import { fetchData } from "../service/service";
import { PixabayImage } from "./types";
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { ImageGallery } from "./components/ImageGallery";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

function App() {
  const [query, setQuery] = useState<string>("");
  const [gallery, setGallery] = useState<PixabayImage[]>([]);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [largeImgUrl, setLargeImgUrl] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (query === "") {
        return;
      }
      try {
        const { hits } = await fetchData(query, page);
        if (hits.length === 0) {
          alert("No hits found");
        }
        setGallery((prevCards) => [...prevCards, ...hits]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query, page]);

  const onSearchQuery = (query: string) => {
    setGallery([]);
    setQuery(query);
    setPage(1);
  };

  const handleOnLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    const scroll = Scroll.animateScroll;
    scroll.scrollMore(650);
  };

  const handleClickOnImage = (imgUrl: string) => {
    setIsOpen(true);
    setLargeImgUrl(imgUrl);
  };

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <SearchBar onSubmit={onSearchQuery} />
      <ImageGallery onClick={handleClickOnImage} gallery={gallery} />
      {gallery.length !== 0 && (
        <Button style={{ marginBottom: "20px" }} onClick={handleOnLoadMore}>
          Load more
        </Button>
      )}
      {isOpen && (
        <Modal onClick={toggleModal}>
          {" "}
          <img src={largeImgUrl} alt="img" />{" "}
        </Modal>
      )}
    </>
  );
}

export default App;
