import { useEffect, useState } from 'react';

const PAGE_SIZE = 10;

function Product({ productObj }) {
  return (
    <div className="h-[250px] w-[200px] rounded-2xl border border-white p-2 text-center">
      <img
        src={productObj.thumbnail}
        alt="product_image"
        className="mx-auto block w-36"
      />
      <p>{productObj.title}</p>
    </div>
  );
}

export default function Pagination() {
  const [products, setPrpducts] = useState([]);

  const numberOfProducts = products.length;
  const numberOfPages = Math.ceil(numberOfProducts / PAGE_SIZE);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://dummyjson.com/products');

      const data = await response.json();

      setPrpducts(data.products);
    }

    fetchProducts();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black pb-10 text-white">
      <h1 className="p-4 font-bitcount text-4xl">Pagination</h1>

      <div className="mt-6 mb-8">
        {[...Array(10).keys()].map((num) => (
          <span className="m-2 border border-white p-3">{num}</span>
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5">
        {products.map((product) => (
          <Product key={product.id} productObj={product} />
        ))}
      </div>
    </div>
  );
}
