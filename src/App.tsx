import { useState, Suspense, useEffect } from "react";
import useSWR from "swr";
import PhotoList from "./components/PhotoList";

export type PhotoType = {
  id: number;
  url: string;
  title: string;
  thumbnailUrl: string;
};

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json().then((datas) => datas.slice(0, 10)));

const Loading = () => <p>Loading...</p>;

const ABC = () => {
  const { data: photos, error } = useSWR<PhotoType[]>(
    "https://jsonplaceholder.typicode.com/photos",
    fetcher
  );
  return <p>ABC</p>;
};

function App() {
  // const [photos, setPhotos] = useState<PhotoType[]>([])
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((res) => res.json())
  //     .then((datas) => setPhotos(datas.slice(0, 10)));
  // }, []);
  const { data: photos, error } = useSWR<PhotoType[]>(
    "https://jsonplaceholder.typicode.com/photos",
    fetcher
  );
  return (
    <>
      <Suspense fallback={<Loading />}>
        <PhotoList photos={photos} />
      </Suspense>
      {/* <ABC /> */}
    </>
  );
}

export default App;
