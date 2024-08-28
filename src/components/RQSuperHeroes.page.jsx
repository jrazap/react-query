import Loading from "../layout/Loading";
import Error from "../layout/Error";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.error("Perform side effect after encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  const RefreshhBtn = () => (
    <div className="flex-center my-4">
      <button className="btn btn-outline-dark" onClick={refetch}>
        Refresh Data
      </button>
    </div>
  );

  if (isLoading || isFetching) return <Loading />;
  if (isError)
    return (
      <>
        <Error error={error.message} />
        <RefreshhBtn />
      </>
    );
  return (
    <section className="my-4">
      <div className="container">
        <h1 className="display-4 mb-4">RQ Super Heroes Page</h1>

        {/* Without Select */}
        {/* {data && (
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
        )} */}

        {/* With Select */}
        {data && (
          <div className="row">
            {data.map((heroName, idx) => {
              return (
                <div className="col-lg-4" key={`hero-${idx}`}>
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{heroName}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {<RefreshhBtn />}
      </div>
    </section>
  );
};

export default RQSuperHeroesPage;
