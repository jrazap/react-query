import { createBrowserRouter } from "react-router-dom";
import LayoutComponent from "./layout/Layout";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamicParallelPage from "./components/DynamicParallel.page";

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
        path: "rq-super-heroes/:heroId",
        element: <RQSuperHeroPage />,
      },
      {
        path: "rq-super-heroes",
        element: <RQSuperHeroesPage />,
      },
      {
        path: "rq-parallel",
        element: <ParallelQueriesPage />,
      },
      {
        path: "rq-dynamic-parallel",
        element: <DynamicParallelPage heroIds={[1, 3]} />,
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
