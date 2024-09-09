import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../layout/Loading";
import Error from "../layout/Error";

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    await axios
      .get(`${import.meta.env.VITE_APP_API_URL}/superheroes`)
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <section className="section">
      <div className="container">
        <h1 className="display-4 mb-4">Super Heroes</h1>
        <div className="row">
          {data.map((hero, idx) => {
            return (
              <div className="col-lg-4" key={`hero-${idx}`}>
                <div className="card mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card-body">
                        <h5 className="card-title">{hero.name}</h5>
                        <p className="card-text">{hero.description}</p>
                        <div className="super-powers items-center gap-2">
                          {hero.powers.map((power, idx) => (
                            <span
                              key={`power-${idx}`}
                              className="badge bg-dark p-2"
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

export default SuperHeroesPage;
