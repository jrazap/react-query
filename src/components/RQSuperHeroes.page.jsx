import Loading from "../layout/Loading";
import Error from "../layout/Error";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";
import { RefreshhBtn } from "../layout/RefreshBtn";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.error("Perform side effect after encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  if (isLoading || isFetching) return <Loading />;
  if (isError)
    return (
      <>
        <Error error={error.message} />
        <RefreshhBtn refetch={refetch} />
      </>
    );
  return (
    <section className="my-4">
      <div className="container">
        <h1 className="display-4 mb-4">RQ Super Heroes Page</h1>
        <div className="row">
          {data?.data.map((hero, idx) => {
            return (
              <div className="col-lg-4" key={`hero-${idx}`}>
                <Link to={`/rq-super-heroes/${hero.id}`} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-8">
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

        <RefreshhBtn refetch={refetch} />
      </div>
    </section>
  );
};

export default RQSuperHeroesPage;
