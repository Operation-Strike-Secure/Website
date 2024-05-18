import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "../Pages/ErrorPage";
import { HomePage } from "../Pages/HomePage";
import { TicketEnCour } from "../Pages/TicketEnCour"
import { CreationTicket } from "../Pages/CreationTicket"
import { StatPage } from "../Pages/StatPage"
import { TicketDetail } from '../Pages/TicketDetail';

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
  // Ticket en cours page route
  {
    path: "/ticket-cour",
    element: <TicketEnCour />,
    errorElement: <ErrorPage />,
  },
  // Creation ticket page route
  {
    path: "/creation-ticket",
    element: <CreationTicket />,
    errorElement: <ErrorPage />,
  },
  // Stat page route
  {
    path: "/statistiques",
    element: <StatPage />,
    errorElement: <ErrorPage />,
  },
  // Ticket detail page route
  {
    path: "/ticket-detail/:id",
    element: <TicketDetail />,
    errorElement: <ErrorPage />,
  },
]);