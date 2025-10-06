import { useEffect, useState } from "react";
import "./App.css";
import { Album } from "./components/Album";
import { Photo } from "./components/Photo";
// import axios from "axios";

// const DUMMY_DATA = [
//   {
//     albumId: 1,
//     id: 1,
//     title: "accusamus beatae ad facilis cum similique qui sunt",
//     url: "https://via.placeholder.com/600/92c952",
//     thumbnailUrl: "https://via.placeholder.com/150/92c952",
//   },
//   {
//     albumId: 1,
//     id: 2,
//     title: "reprehenderit est deserunt velit ipsam",
//     url: "https://via.placeholder.com/600/771796",
//     thumbnailUrl: "https://via.placeholder.com/150/771796",
//   },
// ];

const App = () => {
  // you can make use of the following to get the base url
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  console.log(import.meta.env.VITE_BASE_URL);

  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  useEffect(() => {
    fetch(`${BASE_URL}/albums`)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, [BASE_URL]);

  useEffect(() => {
    if (selectedAlbumId) {
      fetch(`${BASE_URL}/albums/${selectedAlbumId}/photos`)
        .then((res) => res.json())
        .then((data) => setPhotos(data));
    }
  }, [selectedAlbumId, BASE_URL]);

  return (
    <div className="container">
      <div className="flex gap-4">
        <div>
          <h1 className="pb-4 border-b-2 mb-4 sticky">Albums</h1>

          <div className="flex flex-col gap-2 h-screen overflow-y-auto pr-2">
            {/* Get Album data from https://jsonplaceholder.typicode.com/albums */}
            {/* <Album />
            <Album /> */}
            {albums.map((album) => (
              <Album
                key={album.id}
                title={album.title}
                onClick={() => setSelectedAlbumId(album.id)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="pb-4 border-b-2 mb-4">Photos</h1>

          <div className="grid grid-cols-4 gap-4">
            {/* Only show this initially */}
            <p className="col-span-4 text-gray-500">
              Click on an album to start viewing photos.
            </p>

            {photos.map((photo) => (
              <Photo key={photo.id} {...photo} />
            ))}

            {/* {!DUMMY_DATA.length && (
              <p className="col-span-4">No photos found in this album</p>
            )} */}
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <img src="/vite.svg" className="v__logo" alt="Vite logo" />
        <img src={reactLogo} className="v__logo react" alt="React logo" />
      </div> */}
    </div>
  );
};

export default App;
