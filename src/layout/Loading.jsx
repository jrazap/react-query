const Loading = () => {
  return (
    <div className="loading my-4">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center flex-column gap-4">
          <h2 className="text-center mt-4">Loading...</h2>
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
