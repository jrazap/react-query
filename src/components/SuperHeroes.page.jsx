import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../layout/Loading";

const SuperHeroesPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/superheroes`
      );

      setData(data);
    } catch (error) {
      console.error("Error fetching superheroes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="my-4">
      <div className="container">
        <h1 className="display-4 mb-4">Super Heroes Page</h1>
        <div className="row">
          {data.map((hero, idx) => {
            return (
              <div className="col-lg-4" key={`hero-${idx}`}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{hero.name}</h5>
                        <p className="card-text">{hero.description}</p>
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
