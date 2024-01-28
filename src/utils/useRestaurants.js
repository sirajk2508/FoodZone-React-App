import { useState, useEffect } from "react";
import { swiggy_api_URL, swiggy_menu_api_url, RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY } from "../config";

const useRestaurants = (resId) => {
    const [restaurants, setRestaurant] = useState(null);
    const [menuItemsData, setMenuItemsData] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(swiggy_menu_api_url+resId);
        const json = await data.json();
        // console.log(json);
        // Set restaurant data
        const restaurantData = json?.data?.cards?.map(x => x.card)?.
        find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        // console.log(restaurantData);
        setRestaurant(restaurantData);

        const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                            map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
        // console.log(menuItemsData);
        setMenuItemsData(menuItemsData);
    }
    

    return [restaurants, menuItemsData];
}

export default useRestaurants;