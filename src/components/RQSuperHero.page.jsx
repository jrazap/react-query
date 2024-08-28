import { Link, useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import Error from "../layout/Error";
import Loading from "../layout/Loading";

const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error.message} />;

  return (
    <section className="my-4">
      <div className="container">
        <h1 className="display-4 mb-4">Super Hero Details</h1>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data?.data.name}</h5>
                <p className="card-text">{data?.data.description}</p>
                <div className="super-powers items-center gap-2">
                  {data?.data.powers.map((power, idx) => (
                    <span key={`power-${idx}`} className="badge bg-dark p-2">
                      {power}
                    </span>
                  ))}
                </div>
                <Link to="/rq-super-heroes" className="btn btn-outline-dark mt-3">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RQSuperHeroPage;
