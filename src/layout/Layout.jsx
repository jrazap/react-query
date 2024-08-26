import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { QueryClientProvider, QueryClient } from "react-query";

const LayoutComponent = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Outlet />
    </QueryClientProvider>
  );
};

export default LayoutComponent;
