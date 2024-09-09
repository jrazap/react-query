import { useNavigate, useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import Error from "../layout/Error";
import Loading from "../layout/Loading";

const RQSuperHeroPage = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error.message} />;

  return (
    <section className="section">
      <div className="container">
        <h1 className="display-4 mb-4">Super Hero Details</h1>
        <div className="card mb-3">
          <div className="row">
            <div className="col-md-12">
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
                <button
                  onClick={() => navigate(-1)}
                  className="btn btn-sm btn-outline-dark mt-3"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RQSuperHeroPage;
