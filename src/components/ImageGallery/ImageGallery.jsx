import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images}) => {
  return <ul>
    {images.map(img => {return <ImageGalleryItem key={img.id} img={img} />;})}
  </ul>;
};
