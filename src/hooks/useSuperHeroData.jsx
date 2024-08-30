import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`${import.meta.env.VITE_APP_API_URL}/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      }
      return undefined;
    },
  });
};
