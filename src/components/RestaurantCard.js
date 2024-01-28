import { CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const RestaurantCard = ({ resList }) => {
  const { cloudinaryImageId, cuisines, areaName, name, avgRating } =
    resList?.info || {};
  const deliveryTime = resList?.info?.sla?.deliveryTime;

  const limitedCuisines =
    cuisines?.length > 2
      ? `${cuisines.slice(0, 2).join(", ")}...`
      : cuisines.join(", ");
  const limitName = name.length > 20 ? `${name.slice(0, 20)}...` : name;

  const { user } = useContext(UserContext);

  // Check if cloudinaryImageId is available before constructing the image URL
  const imageUrl = cloudinaryImageId ? CDN_URL + cloudinaryImageId : "";

  return (
    <div className="w-72 m-4 p-4 h-auto bg-slate-50 rounded-lg shadow-xl hover:shadow hover:bg-white hover:delay-200 hover:w-[282px]">
      <div className="relative h-40 overflow-hidden">
        <img
          className="object-cover bg-cover overflow-hidden w-full h-full rounded-lg"
          alt="res-logo"
          src={imageUrl}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">{limitName}</h3>
        <div className="flex items-center mt-2">
          <span className="text-green-500"> ⭐</span>
          <span className="font-bold ml-1">{avgRating}</span>
          <span className="mx-3 font-bold">{deliveryTime} mins</span>
        </div>
        <p className="text-gray-500">{limitedCuisines}</p>
        <p className="text-gray-500">{areaName}</p>
      </div>
    </div>
  );
};
