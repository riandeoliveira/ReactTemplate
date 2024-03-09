import { Page } from "@/pages";
import { AppRoute } from "@/routes/AppRoute";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoute page={Page.Home} />,
  },
]);
