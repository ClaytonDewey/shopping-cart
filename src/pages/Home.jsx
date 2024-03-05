import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { ProductTile } from '../components';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchListOfProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();

      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className='min-h-screen w-full flex justify-center items-center'>
          <Circles
            height={'120'}
            width={'120'}
            color='rgb(127,29,29)'
            visible={true}
          />
        </div>
      ) : (
        <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto py-3'>
          {products && products.length
            ? products.map((product, idx) => (
                <ProductTile key={idx} product={product} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};
export default Home;
