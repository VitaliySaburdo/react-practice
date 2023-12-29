import {PixabayImage} from '../types'

export const ImageGalleryItem = ({card}: {card: PixabayImage}) => {
  return <>
  <li className="ImageGalleryItem">
    <img className="ImageGalleryItem-image" src={card.webformatURL} alt="" />
  </li>
  </>;
};
