import { PhotoType } from "../App";
import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }: { photos: PhotoType[] | undefined }) => {
  return (
    <>
      {photos?.map((photo) => (
        <PhotoCard key={photo?.id} photo={photo} />
      ))}
    </>
  );
};

export default PhotoList;
