import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { HomePage } from "../module/home";
import { EnquiryPage } from "../module/Enquiry";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contact/",
        element: <EnquiryPage />,
      },
      {
        path: "request-demo/",
        element: <EnquiryPage />,
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
