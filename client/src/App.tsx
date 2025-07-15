import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomeLayout, LoginPage, LandingPage, RegisterPage } from "./utils";

/** @action separated file instead in the component that uses it */
import { action as loginAction } from "./utils/actionFunctions/LoginActionFunc";
import { action as registerAction } from "./utils/actionFunctions/RegisterActionFunction";

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
          action: registerAction,
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
