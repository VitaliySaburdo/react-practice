import {PixabayImage} from '../types'

export const ImageGalleryItem = ({card}: {card: PixabayImage}) => {
  return <>
  <li key={card.id} className="ImageGalleryItem">
    <img className="ImageGalleryItem-image" src={card.previewURL} alt="" />
  </li>
  </>;
};
