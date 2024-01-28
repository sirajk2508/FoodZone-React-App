import { useParams } from "react-router-dom";
import { CDN_URL } from "../config";
import useRestaurants from "../utils/useRestaurants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../config.js";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantsDetails = useRestaurants(resId);

  const menuItemsData = restaurantsDetails[1];
  // console.log(menuItemsData);
  const restaurant = restaurantsDetails[0];

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="menu bg-transparent">
      <div
        width="600"
        className="m-2 p-2 w-[600px] border shadow-inner rounded-lg bg-white mx-auto hover:shadow-2xl delay-75"
      >
        <h1 className="text-xl font-bold align-middle flex justify-center p-2">
          Restaurant id : {resId}
        </h1>
        <h2 className="text-3xl font-extrabold flex justify-center p-2 pb-4">
          {restaurant?.name}
        </h2>
        <img
          width="450"
          height="350"
          className="p-3 flex justify-self-center mx-auto"
          src={CDN_URL + restaurant?.cloudinaryImageId}
        />
        <h3 className="flex justify-center text-lg font-semibold">
          {restaurant?.areaName}, {restaurant?.city}
        </h3>
        <h3 className="flex justify-center text-lg font-semibold">
          {restaurant?.avgRating} stars
        </h3>
        <h3 className="flex justify-center text-lg font-semibold mb-2">
          {restaurant?.costForTwoMessage}
        </h3>
      </div>
  
      <div className=" bg-white border border-s-orange-200 shadow-inner m-10">
        <h1 className="text-2xl font-bold text-center m-2 p-2 underline mb-3">
          Menu
        </h1>

        <ul className="menu-list grid grid-cols-1 gap-4 ml-16 pl-14 pr-4 mr-2 pb-4 font-semibold align-middle">
          {Object.values(menuItemsData)
            .filter((item) => item.imageId)
            .map((item, index) => (
              <li
                className="list-none relative m-3 p-2 flex justify-between w-10/12 h-36 border-b-2 hover:shadow"
                key={index}
              >
                <span className="text-sm border border-black h-6">
                  {item.isVeg ? "🟢" : "🔴"}
                </span>
                <h5 className="my-auto absolute left-4 top-9">{item.name} </h5>
                <span className="absolute top-[65px] left-4 text-sm font-normal">
                  Rs. {item.price / 100}
                </span>
                <p className="top-[6rem] left-4 absolute text-sm font-normal w-9/12">
                  {item?.description}
                </p>
                <button
                  className="p-2 absolute top-24 text-center justify-center align-middle mx-[60.5rem] bg-green-100 hover:bg-green-200 hover:border border-green-700 w-16 h-10 rounded-lg"
                  onClick={() => addFoodItem(item)}
                >
                  Add+
                </button>

                <img
                  alt="dish image"
                  className="w-[8rem] p-2 rounded-2xl"
                  src={CDN_URL + item.imageId}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
