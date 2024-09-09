import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchSuperHeroes = () => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/superheroes`);
};

const fetchFriends = () => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/friends`);
};

const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery(["super-heroes"], fetchSuperHeroes);
  const { data: friends } = useQuery(["friends"], fetchFriends);

  return (
    <section className="my-4">
      <div className="container">
        <h1 className="display-4 mb-4">Parallel Queries Page</h1>

        <div className="super-heroes mb-4">
          <h3 className="fs-2 fw-light mb-2">Super Heroes</h3>
          <div className="row">
            {superHeroes?.data.map((hero, idx) => {
              return (
                <div className="col-lg-4" key={`hero-${idx}`}>
                  <Link
                    to={`/rq-super-heroes/${hero.id}`}
                    className="card mb-3"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card-body">
                          <h5 className="card-title">{hero.name}</h5>
                          <p className="card-text">{hero.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="friends mb-4">
          <h3 className="fs-2 fw-light mb-2">Friends</h3>
          <div className="row">
            {friends?.data.map((friend, idx) => {
              return (
                <div className="col-lg-4" key={`friend-${idx}`}>
                  <div className="card mb-3">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card-body">
                          <h5 className="card-title">{friend.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallelQueriesPage;
