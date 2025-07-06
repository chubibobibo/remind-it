import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomeLayout, LoginPage, LandingPage, RegisterPage } from "./utils";

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
