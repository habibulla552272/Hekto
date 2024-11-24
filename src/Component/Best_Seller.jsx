import React, { useContext } from "react";
import { apiData } from "./ContextApi";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Best_Seller = () => {
  let info = useContext(apiData);

  let filteritem = info.filter((item) => {
    return item.category === "laptops";
  });
  filteritem.map((item, index) => {
    item.No = index + 1;
  });

  //   let lastFilter = filteritem.filter((item) => {
  //     return item.NO > 1 && item.No <= 5;
  //   });

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex   md:justify-between overflow-hidden flex-wrap">
          {filteritem.map((item, index) => (
            <div key={index} className="w-fit mx-auto py-5  md:w-[30%] group ">
              <div className="relative overflow-hidden bg-gray-200">
                <div className="absolute bg-blue-900 group-hover:left-2 left-2 -top-20 group-hover:top-3 duration-700 ease-in-out">
                  <p className="text-xl text-white py-2 px-5">Sale</p>
                </div>
                <img src={item.thumbnail} alt="" />
                <div className="flex flex-col gap-2 text-2xl absolute group-hover:bottom-6 -bottom-60 left-3 duration-700 ease-in-out">
                  <p>
                    <FaShoppingCart />
                  </p>
                  <p>
                    <CiHeart />
                  </p>
                  <p>
                    <FaSearchDollar />
                  </p>
                </div>
              </div>
              <div className="flex justify-between bg-whitesmoke shadow-lg py-2 h-20">
                <h2 className="w-[60%]">{item.title}</h2>
                <p className="w-[30%]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Best_Seller;
