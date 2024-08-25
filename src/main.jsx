import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={"Loading..."}>
        <RouterProvider router={router} />
      </Suspense>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
