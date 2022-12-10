import axios from "axios";
import { useQuery } from "react-query";

export const getApi = (endpoint: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["detail"],
    queryFn: () =>
      axios
        .get(endpoint)
        .then((res) => res.data)
        .catch((err) => console.log(err)),
  });
  return { data, isLoading, isError };
};
