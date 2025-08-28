import { ArrowLeft, ArrowRight } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfProducts = products.length;
  const numberOfPages = Math.ceil(numberOfProducts / PAGE_SIZE);
  const startOfPage = currentPage * PAGE_SIZE;
  const endOfPage = startOfPage + PAGE_SIZE;

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('https://dummyjson.com/products?limit=100');

      const data = await response.json();

      setPrpducts(data.products);
    }

    fetchProducts();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black pb-10 text-white">
      <h1 className="p-4 font-bitcount text-4xl">Pagination</h1>

      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5">
        {products.slice(startOfPage, endOfPage).map((product) => (
          <Product key={product.id} productObj={product} />
        ))}
      </div>

      <div className="flex items-center">
        <span>
          <ArrowLeft size={30} className="cursor-pointer hover:text-blue-700" />
        </span>
        <div className="my-8">
          {[...Array(numberOfPages).keys()].map((num) => (
            <span
              onClick={() => setCurrentPage(num)}
              className="m-2 cursor-pointer border border-white p-3 hover:border-blue-700"
            >
              {num}
            </span>
          ))}
        </div>
        <span>
          <ArrowRight
            size={30}
            className="cursor-pointer hover:text-blue-700"
          />
        </span>
      </div>
    </div>
  );
}
