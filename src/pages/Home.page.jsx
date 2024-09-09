const HomePage = () => {
  return (
    <section className="my-4">
      <div className="container">
        <h1 className="display-4 mb-4">Home Page</h1>
        <p className="mb-3 fs-6 fw-normal">
          <strong className="main-color">React Query</strong> is a powerful
          data-fetching library for React that simplifies managing server-state
          in applications. It provides tools for fetching, caching,
          synchronizing, and updating server data without needing manual
          data-fetching code. Key features include automatic caching, background
          synchronization, pagination, and handling complex states like loading,
          error, and success. It significantly improves performance by reducing
          redundant requests and offers easy data revalidation, making it ideal
          for modern apps that require frequent interaction with server-side
          data.
        </p>
        <a
          href="https://tanstack.com/query/v3"
          target="_blank"
          className="btn btn-sm btn-outline-dark"
        >
          Documentation
        </a>
      </div>
    </section>
  );
};

export default HomePage;
