import { CDN_URL } from "../config";

export const FoodItem = ({ name, description, price, imageId }) => {
  const imageUrl = imageId ? CDN_URL + imageId : "";
  const shortDescription = description?.length > 28 ? `${description.slice(0, 28)}...` : description;

  return (
    <div className="w-72 m-4 p-4 h-84 bg-slate-100 rounded-lg cursor-pointer shadow-xl hover:shadow hover:w-[284px] hover:bg-white hover:delay-100 hover:w-73">
      <div className="relative h-40 overflow-hidden">
        <img
          className="object-cover bg-cover overflow-hidden w-full h-full"
          alt="res-logo"
          src={imageUrl}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-500">{shortDescription}</p>
        <p className="text-gray-500 font-medium">Rupees: ₹ {price / 100}</p>
      </div>
    </div>
  );
};
