import { PhotoType } from "../App";

const PhotoCard = ({ photo } : {photo: PhotoType}) => {
  return (
    <div>
      <img src={photo?.thumbnailUrl} alt={photo?.title} loading="lazy" />
      <p>{photo?.title}</p>
    </div>
  );
};

export default PhotoCard