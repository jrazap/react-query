/* eslint-disable react/prop-types */
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../layout/Loading";
import Error from "../layout/Error";
import { useState } from "react";

const fetchColors = (pageNumber, pageLimit) => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/colors`, {
    params: {
      _page: pageNumber,
      _per_page: pageLimit,
    },
  });
};

const PaginatedQueries = ({ pageLimit }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, isError, error, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber, pageLimit),{
      keepPreviousData: true,
    }
  );

  if (isLoading || isFetching) return <Loading />;
  if (isError) return <Error error={error.message} />;
  return (
    <section className="section">
      <div className="container">
        <h1 className="display-4 mb-4">Paginated Queries</h1>
        <div className="row">
          {data?.data?.data.map((color) => {
            return (
              <div className="col-lg-4" key={color.id}>
                <div className="card">
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
            );
          })}
        </div>
        <div className="btns d-flex gap-4 justify-content-center align-items-center my-4">
          <button
            type="button"
            disabled={pageNumber === 1}
            onClick={() => setPageNumber((page) => page - 1)}
            className="btn btn-sm btn-dark "
          >
            {"<"}
          </button>
          <span className="mx-2">Page {pageNumber}</span>
          <button
            type="button"
            disabled={pageNumber === 5}
            onClick={() => setPageNumber((page) => page + 1)}
            className="btn btn-sm btn-dark"
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaginatedQueries;
