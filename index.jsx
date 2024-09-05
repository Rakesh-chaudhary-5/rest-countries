import reactDom from "react-dom/client"
import App from "./App";
import Country from "./components/country";
import Home from "./components/home";
import Shimmer from "./components/country-shimmer";

import { createBrowserRouter, RouterProvider} from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {
            path: "/",
            element: <Home />,
          },
        {
          path: "/:country",
          element: <Country />,
        },
        {
          path: "/shimmer",
          element: <Shimmer />,
        },
    ],
    },
  ]);

 const root = reactDom.createRoot(document.querySelector('.root'));
 root.render(
    <RouterProvider router={router} />
 )