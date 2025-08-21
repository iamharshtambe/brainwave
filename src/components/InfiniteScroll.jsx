import { useEffect, useState } from 'react';

export default function InfiniteScroll() {
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${pageNumber}&limit=10`,
        );

        const data = await response.json();

        setImages((images) => [...images, ...data]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchImages();
  }, [pageNumber]);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="p-4 text-center font-bitcount text-4xl">
        Infinite Scroll
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-4 p-4">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.download_url}
            className="image h-[300px] w-[250px] rounded-2xl border border-sky-500 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
