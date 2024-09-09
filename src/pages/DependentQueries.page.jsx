/* eslint-disable react/prop-types */
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../layout/Loading";
import Error from "../layout/Error";
import { RefreshhBtn } from "../layout/RefreshBtn";

const fetchUserByEmail = (email) => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/channels/${channelId}`);
};

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.data.channelId;

  const {
    data: channel,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery(
    ["channel", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

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
        <h1 className="display-4 mb-4">Dependent Queries</h1>
        <div className="row">
          {channel?.data.courses.map((course) => (
            <div className="col-lg-4" key={`c-${course}`}>
              <div className="card mb-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-body">
                      <h4 className="card-title mb-0">{course}</h4>
                      <p>{channel?.data.id}</p>
                      <p className="card-text">
                        <span className="fw-bold fs-6">User: </span>
                        {user?.data.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DependentQueriesPage;
