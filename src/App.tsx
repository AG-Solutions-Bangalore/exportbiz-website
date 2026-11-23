import { RouterProvider } from "react-router-dom";
import { SEOProvider } from "./SEO";
import { router } from "./routes";

export default function App() {
  return (
    <SEOProvider>
      <RouterProvider router={router} />
    </SEOProvider>
  );
}
