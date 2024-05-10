import { useQuery } from "@tanstack/react-query";
import { requst } from "../../config/request";

export const useGetSearch = (text) => {
  return useQuery({
    queryKey: ["get-product", text],
    queryFn: () => {
      return requst.get(`/all`, { params: { title_like: text } });
    },
  });
};
