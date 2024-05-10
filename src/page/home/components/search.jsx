import React from "react";
import { SearchIcon } from "../../../assets/search-icon";
import { useGetSearch } from "../../../redux/service/useGetSearch";
export const Search = () => {
  const [input, setInput] = React.useState(undefined);
  const { data } = useGetSearch(input);
  return (
    <div className="">
      <div className="relative rounded-lg border border-total-eclipse bg-mountain-fig">
        <input
          className="w-full pl-[40px] p-[14px] bg-transparent outline-none text-sm font-normal text-hazy-skies "
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search for food, coffe, etc.."
        />
        <div className="absolute top-[50%] translate-y-[-50%] left-[10px]">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
