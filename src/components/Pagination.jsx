import { useEffect, useState } from 'react';

function Product({ productObj }) {
  return (
    <div className="w-[200px] border border-white p-2 text-center">
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

      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4">
        {products.map((product) => (
          <Product key={product.id} productObj={product} />
        ))}
      </div>
    </div>
  );
}
