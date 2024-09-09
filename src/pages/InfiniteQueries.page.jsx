import axios from "axios";
import Loading from "../layout/Loading";
import Error from "../layout/Error";
import { useInfiniteQuery } from "react-query";
import { Fragment } from "react";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/colors`, {
    params: {
      _page: pageParam,
      _per_page: 2,
    },
  });
};

const InfiniteQueriesPage = () => {
  const {
    isLoading,
    data,
    isError,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      return pages.length < 5 ? pages.length + 1 : undefined;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error.message} />;
  return (
    <section className="section">
      <div className="container">
        <h1 className="display-4 mb-4">Infinite Queries</h1>
        <div className="row">
          {data?.pages.map((group, index) => {
            return (
              <Fragment key={index}>
                {group.data.data.map((color) => (
                  <div className="col-lg-4" key={color.id}>
                    <div className="card mb-3">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card-body">
                            <h5 className="card-title mb-0">
                              <span className="main-color">{`${color.id} | `}</span>
                              {color.name}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Fragment>
            );
          })}
        </div>

        <div className="flex-center my-4">
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={fetchNextPage}
            disabled={!hasNextPage}
          >
            Load More
          </button>
        </div>

        {isFetching && !isFetchingNextPage ? "Fetching..." : null}
      </div>
    </section>
  );
};

export default InfiniteQueriesPage;
