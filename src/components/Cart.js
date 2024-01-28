import { useDispatch, useSelector } from "react-redux";
import { FoodItem } from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartItems.length) {
      const countPrice = cartItems.reduce((acc, item) => {
        acc = acc + item.price / 100;
        return acc;
      }, 0);
      setTotalPrice(countPrice);
    }
  }, [cartItems]);

  const dispatch = useDispatch();
  // console.log(cartItems);
  const handleClearCart = () => {
    dispatch(clearCart());
    setTotalPrice(0);
  };

  return (
    <>
      <div className="flex justify-around mx-auto px-20">
        <h1 className="font-bold text-3xl text-center m-2 p-2">
          Cart items - {cartItems.length}{" "}
          <button
            className="bg-green-100 p-2 ml-20 text-sm font-sans font-semibold hover:bg-green-200 my-auto"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        </h1>
        <p className="font-semibold text-xl my-auto text-center">
          Total Price: ₹ {totalPrice}
        </p>
      </div>
      <div className="flex flex-wrap justify-center align-middle">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
