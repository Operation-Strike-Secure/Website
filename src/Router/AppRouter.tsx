import { RouterProvider } from "react-router-dom";

import { BrowserRouter } from "./BrowserRouter";

export const AppRouter = () => {
  return <RouterProvider router={BrowserRouter} />;
};
