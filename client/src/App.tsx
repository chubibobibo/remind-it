import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomeLayout, LoginPage, LandingPage, RegisterPage } from "./utils";

/** @multiAuthActionFunc implements conditional action whether for logging in or registering. function used as action function for logging in and registering depending of the formId of the button clicked (login or register). */
import { multiAuthActionFunc } from "./utils/actionFunctions/MultiAuthActionFunc";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          index: true,
          element: <LandingPage />,
          action: multiAuthActionFunc,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
