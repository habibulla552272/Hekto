import React from "react";
import Discount_item from "../assets/tortuga-01-b 1.png";
import { FaCheck } from "react-icons/fa6";

const Discount_item1 = () => {
  return (
    <div className="flex flex-col-reverse px-10 md:px-0 md:flex-row md:items-center">
      <div>
        <h3>20% Discount Of All Products</h3>
        <h5>Eams Sofa Compact</h5>
        <p className="py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
          feugiat habitasse nec, bibendum condimentum.
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <FaCheck />
            <p>Material expose like metals</p>
          </div>

          <div className="flex gap-3 ">
            <FaCheck />
            <p>Material expose like metals</p>
          </div>
        </div>
        <div className="flex justify-between py-4">
          <div className="flex gap-3">
            <FaCheck />
            <p>Material expose like metals</p>
          </div>

          <div className="flex gap-3">
            <FaCheck />
            <p>Material expose like metals</p>
          </div>
        </div>
        <button className="px-5 py-2 bg-buttom-bg">shop Now</button>
      </div>
      <div className="">
        <img src={Discount_item} alt="" />
      </div>
    </div>
  );
};

export default Discount_item1;
