import { PixabayImage } from "../types";

export const ImageGalleryItem = ({
  card,
  onClick,
}: {
  card: PixabayImage;
  onClick: (imgUrl: string) => void;
}) => {
  return (
    <>
      <li className="ImageGalleryItem">
        <img
          onClick={() => onClick(card.largeImageURL)}
          className="ImageGalleryItem-image"
          src={card.webformatURL}
          alt={card.tags}
        />
      </li>
    </>
  );
};
