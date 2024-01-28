import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/" className="h-20">
      <img
        className="w-24 h-20 rounded-xl shadow-2xl hover:w-[98px] hover:h-[82px]"
        alt="Food Zone Logo"
        src="data:image/jpeg;base64,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"
      ></img>
    </a>
  );
};

const Header = () => {
  const isOnline = useOnline();
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between p-2 bg-blue-50 shadow-lg rounded-xl m-2">
      <Title />
      {/* <h1 className="food-zone-title">FOOD ZONE</h1> */}
      <div className="nav-items">
        <ul className="flex font-medium">
          <li className="m-3 p-3 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="m-3 p-3 hover:font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="m-3 p-3 hover:font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-3 p-3 hover:font-bold">
            <i className="fa-solid fa-cart-shopping"></i>
            <Link to="/cart">Cart - {cartItems.length} Items</Link>
          </li>
          <li className="m-3 p-3 hover:font-bold">
            <Link to="/instamart">Instamart</Link>
          </li>
          
        </ul>
      </div>
      <div>
        
      <Link to="/login">{isOnline ? (
        <h2 className="m-3 p-3 font-bold text-green-400 border border-green-200 cursor-pointer hover:text-green-500 rounded-lg">
          <span className="text-black font-normal">Logged in: </span>
          {user.name}
        </h2>
      ) : (
        <h2 className="m-3 p-3 mx-10 font-bold text-red-400 border border-red-200 cursor-pointer hover:text-red-500 rounded-lg">
          You're Offline 🥺
        </h2>
      )}</Link>
      </div>
    </div>
  );
};

export default Header;
