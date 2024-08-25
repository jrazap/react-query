import { createBrowserRouter } from "react-router-dom";
import LayoutComponent from "./layout/Layout";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "super-heroes",
        element: <SuperHeroesPage />,
      },
      {
        path: "rq-super-heroes",
        element: <RQSuperHeroesPage />,
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
