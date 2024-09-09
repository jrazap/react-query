/* eslint-disable react/prop-types */
import axios from "axios";
import { useQueries } from "react-query";
import { Link } from "react-router-dom";

const fetchSuperHero = (heroId) => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/superheroes/${heroId}`);
};

const DynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((heroId) => {
      return {
        queryKey: ["super-hero", heroId],
        queryFn: () => fetchSuperHero(heroId),
      };
    })
  );

  console.log(queryResults);

  return (
    <section className="my-4">
      <div className="container">
        <h1 className="display-4 mb-4">Dynamic Parallel Page</h1>
        <div className="row">
          {queryResults?.map((item, idx) => (
            <div className="col-lg-4" key={`hero-${idx}`}>
              <Link
                to={`/rq-super-heroes/${item.data?.data.id}`}
                className="card mb-3"
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title">{item.data?.data.name}</h5>
                      <p className="card-text">{item.data?.data.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicParallelPage;
