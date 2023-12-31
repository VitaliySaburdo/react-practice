import { ImageGalleryItem } from "./ImageGalleryItem";
import { PixabayImage } from "../types";

export const ImageGallery = ({
  gallery,
  onClick,
}: {
  gallery: PixabayImage[];
  onClick: (imgUrl: string) => void;
}) => {
  return (
    <>
      <ul className="ImageGallery">
        {gallery.map((card) => (
          <ImageGalleryItem onClick={onClick} key={card.id} card={card} />
        ))}
      </ul>
    </>
  );
};
