import { ImageGalleryItem } from "./ImageGalleryItem";
import {PixabayImage} from '../types'

export const ImageGallery = ({gallery}: {gallery: PixabayImage[]}) => {
  return (
    <>
      <ul className="ImageGallery ">
        {gallery.map(card => (
          <ImageGalleryItem card={card}/>
        ))}
      </ul>
    </>
  );
};
