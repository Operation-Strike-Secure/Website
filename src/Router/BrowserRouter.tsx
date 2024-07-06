import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "../Pages/ErrorPage";
import { HomePage } from "../Pages/HomePage";
import { LoginAdminPage } from "../Pages/LoginAdminPage";
import { StatPage } from "../Pages/StatPage";
import { CreationTicket } from "../Pages/CreationTicket";


export const BrowserRouter = createBrowserRouter([
  // Home page route
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  // 404 page route
  {
    path: "*",
    element: <ErrorPage />,
  },
  // Login page route
  {
    path: "loginAdmin",
    element: <LoginAdminPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "stat",
    element: <StatPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "ticket",
    element: <CreationTicket />,
    errorElement: <ErrorPage />,
  }
]);