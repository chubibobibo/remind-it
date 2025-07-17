import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomeLayout,
  LoginPage,
  LandingPage,
  RegisterPage,
  ErrorPage,
} from "./utils";

/** @multiAuthActionFunc implements conditional action whether for logging in or registering. function used as action function for logging in and registering depending of the formId of the button clicked (login or register). */
import { multiAuthActionFunc } from "./utils/actionFunctions/MultiAuthActionFunc";
import { ToastContainer, Zoom } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
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
      <ToastContainer
        position='top-center'
        transition={Zoom}
        // toastClassName={(context) =>
        //   toastContext[context?.type || "default"] +
        //   "relative flex p-1 rounded-md justify-between overflow-hidden cursor-pointer"
        // }
        // style={{ zIndex: 9999 }}
        className='fixed z-[1000]'
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
