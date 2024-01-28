/**
  * Header
    - Logo (Title)
    - Nav-items (Right side)
    - Cart
                
  * Body
    - Search bar
    - RestaurantList
    - Restaurant card
        - Image
        - Name
        - Rating
        - Cuisines

  * Footer
    - Links
    - Copyright

*/

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import { Body } from "./components/Body.js";
import { Footer } from "./components/Footer.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorMessage } from "./components/ErrorMessage.js";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { lazy, Suspense } from "react";
import { Shimmer } from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./components/Cart.js";
import LoginForm from "./components/LoginForm.js";

const Instamart = lazy(() => import("./components/Instamart.js"));

const Applayout = () => {
  const [user, setUser] = useState({
    name: "Siraj Khan",
    email: "sirajkhan@email.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LoginForm/>
      }
    ],
  },
  {
    path: "/instamart",
    element: (
      <Suspense fallback={<Shimmer />}>
        <Instamart />
      </Suspense>
    ),
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
