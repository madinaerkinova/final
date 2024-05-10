import React from "react";
import { DeleteIcon } from "../../../assets/delete-icon";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/reducer/product-reducer";
export const MiniCard = ({ id, title, url, price, newPrice, text, count }) => {
  const dispatch = useDispatch();

  const deletedata = () => {
    dispatch(deleteProduct({ id }));
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <img
            className="w-[45px] h-[40%] object-cover"
            src={url}
            alt={title}
          />
          <div className="flex flex-col">
            <p className="text-sm mb-1 w-[80%] font-medium text-white">
              {title.slice(8)}...
            </p>
            <p className="text-xs font-medium text-hazy-skies">$ {price}</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <p className="py-[10px] px-[14px] rounded-md bg-secondary text-white text-base font-medium border border-secondary">
            {count}
          </p>
          <p className="text-white text-base font-medium">$ {newPrice}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <input
          className="px-[14px]  py-[10px] text-sm font-normal text-hazy-skies bg-secondary rounded-lg"
          placeholder="Order Note..."
          type="text"
        />
        <button
          className="hover:scale-[1.07] transition-all duration-300"
          onClick={deletedata}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
