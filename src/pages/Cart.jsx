import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setCartTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, cartTotal);

  return <>{cart && cart.length ? <div></div> : null}</>;
};
export default Cart;
