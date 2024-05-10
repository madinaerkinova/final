import React from "react";
import { addProduct } from "../../../redux/reducer/product-reducer";
import { useDispatch } from "react-redux";
export const Card = ({ id, title, url, price, newPrice, text, count }) => {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(addProduct({ id, title, url, price, newPrice, text, count }));
  };
  return (
    <div
      onClick={submit}
      className="group hover:scale-[1.05] transition-all duration-300 z-20 p-6 bg-primary rounded-lg relative w-[280px]"
    >
      <div className="absolute top-[-16%] left-[50%] translate-x-[-50%] ">
        <img src={url} alt={title} />
      </div>
      <div className="pt-24 text-center">
        <p className="text-sm font-medium text-white mb-2">{title}</p>
        <p className="text-sm font-normal text-white mb-1">{price}</p>
        <p className="text-sm font-normal text-hazy-skies">{text}</p>
      </div>
    </div>
  );
};
