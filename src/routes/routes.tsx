import type { RouteObject } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { HomePage } from "../module/home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
];

export default routes;
