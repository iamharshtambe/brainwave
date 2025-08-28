import { useEffect, useState } from 'react';

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
    <div className="mx-auto flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col">
        <h1 className="p-4 text-center font-bitcount text-4xl">Pagination</h1>
        <div>
          {products.map((product) => (
            <div>{product.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
