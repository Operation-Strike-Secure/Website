import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "../Pages/ErrorPage";
import { HomePage } from "../Pages/HomePage";

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
]);
