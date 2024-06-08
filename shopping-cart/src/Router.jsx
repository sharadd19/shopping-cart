import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Home from "./components/HomePage/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/home"
      element={<App />}
      loader={appLoader}
      action={appAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route
          path="/home"
          element={<Home />}
          loader={homeLoader}
          action={homeAction}
        />
        <Route
          path="/store"
          element={<Store />}
          loader={storeLoader}
          action={storeAction}
        />
        <Route
          path="/bag"
          element={<Bag />}
          loader={bagLoader}
          action={bagAction}
        />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
