import { createBrowserRouter } from "react-router-dom";
import LayoutComponent from "./layout/Layout";
import HomePage from "./pages/Home.page";
import SuperHeroesPage from "./pages/SuperHeroes.page";
import RQSuperHeroesPage from "./pages/RQSuperHeroes.page";
import RQSuperHeroPage from "./pages/RQSuperHero.page";
import ParallelQueriesPage from "./pages/ParallelQueries.page";
import DynamicParallelPage from "./pages/DynamicParallel.page";
import DependentQueriesPage from "./pages/DependentQueries.page";
import PaginatedQueries from "./pages/PaginatedQueries";
import InfiniteQueriesPage from "./pages/InfiniteQueries.page";

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
        path: "rq-dependent",
        element: <DependentQueriesPage email="jrazap@gmail.com" />,
      },
      {
        path: "rq-paginated",
        element: <PaginatedQueries pageLimit={2} />,
      },
      {
        path: "rq-infinite",
        element: <InfiniteQueriesPage />,
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
