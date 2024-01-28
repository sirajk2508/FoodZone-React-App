import React, { useEffect, useState } from "react";
import { restaurantList, swiggy_api_URL } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resData = await checkJsonData(json);
      // console.log(resData);
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0)
        setErrorMessage("Sorry! No matches found.");
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  const isOnline = useOnline();
  console.log(isOnline);
  if (!isOnline)
    return <h1>🔴Offline, please check your internet connection!!</h1>;

  if (!allRestaurants) return null;

  return (
    <>
      <div className="flex justify-center">
        <div className="w-96 search-container bg-slate-100 p-2 m-2 rounded-md shadow-md">
          <input
            type="text"
            className="search-input border w-72 border-gray-300 p-2 mr-2 rounded-md focus:outline-none focus:border-gray-500"
            placeholder="Type restaurant name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none"
            onClick={() => {
              searchData(searchText, allRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {/* console.log(restaurants); */}

      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="w-200 m-3 rounded-lg">
          <div className="flex flex-wrap justify-center ">
            {filteredRestaurants.map((restaurant) => (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard resList={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
