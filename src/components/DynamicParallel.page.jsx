/* eslint-disable react/prop-types */
import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/superheroes/${heroId}`);
};

const DynamicParallelPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((heroId) => {
      return {
        queryKey: ["super-hero", heroId],
        queryFn: () => fetchSuperHero(heroId),
      };
    })
  );

  console.log(queryResults);

  return (
    <section className="my-4">
      <div className="container">
        <h1 className="display-4 mb-4">Dynamic Parallel Page</h1>
      </div>
    </section>
  );
};

export default DynamicParallelPage;
