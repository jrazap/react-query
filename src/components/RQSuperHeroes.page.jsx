import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../layout/Loading";
import Error from "../layout/Error";

const fetchSuperHeroes = () => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/superheroes`);
};

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      cacheTime: 5000,
      staleTime: 30000,
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      // refetchInterval: 5000,
      // refetchIntervalInBackground: true,
    }
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error.message} />;
  return (
    <section className="my-4">
      <div className="container">
        <h1 className="display-4 mb-4">RQ Super Heroes Page</h1>
        <div className="row">
          {data.data.map((hero, idx) => {
            return (
              <div className="col-lg-4" key={`hero-${idx}`}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{hero.name}</h5>
                        <p className="card-text">{hero.description}</p>
                        <div className="super-powers items-center gap-2">
                          {hero.powers.map((power, idx) => (
                            <span
                              key={`power-${idx}`}
                              className="badge bg-dark"
                            >
                              {power}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RQSuperHeroesPage;
