import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import router from "./router.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import Loading from "./layout/Loading.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
      <ReactQueryDevtools position="bottom-right"/>
    </QueryClientProvider>
  </React.StrictMode>
);
