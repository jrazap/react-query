// eslint-disable-next-line react/prop-types
const Error = ({ error }) => {
  return (
    <div className="error my-5">
      <div className="container">
        <div className="flex-center">
          <div className="alert alert-danger">
            <h3 className="fs-4 fw-light text-uppercase m-0">{error}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
