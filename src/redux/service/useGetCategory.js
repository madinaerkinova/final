import { useQuery } from "@tanstack/react-query";
import { requst } from "../../config/request";

export const useGetCategory = (start) => {
  return useQuery({
    queryKey: ["get-category", start],
    queryFn: () => {
      return requst
        .get(`/product/${start}`)

        .then((res) => res.data);
    },
  });
};
