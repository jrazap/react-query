/* eslint-disable react/prop-types */
export const RefreshhBtn = ({ refetch }) => (
  <div className="flex-center my-4">
    <button className="btn btn-outline-dark" onClick={refetch}>
      Refresh Data
    </button>
  </div>
);
