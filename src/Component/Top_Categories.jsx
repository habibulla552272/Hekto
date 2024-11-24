import React, { useContext } from "react";
import { apiData } from "./ContextApi";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";

import { CiHeart } from "react-icons/ci";


const Top_Categories = () => {
    let topData = useContext(apiData);
    let topitemFilter = topData.filter((item) => {
       
        
      return item.category === "motorcycle";
    });
    return (
      <section>
        <div className="container mx-auto py-10">
          <h2 className="text-center text-4xl py-5">Trending Products</h2>
          <div className="md:flex md:gap-8 md:overflow-hidden">
            {topitemFilter.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="group w-11/12 mx-auto py-8 md:py-0  md:w-[25%]  shadow-2xl"
                  >
                    <div className="flex  flex-col items-center relative overflow-hidden bg-white  rounded-md">
                      <div className="flex gap-2 text-2xl absolute group-hover:left-5 top-2 -left-28 duration-700 ease-in-out">
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
                      <img
                        className="py-5 w-11/12 bg-gray-100"
                        src={item.thumbnail}
                        alt=""
                      />
                      <div className="absolute group-hover:bottom-2 -bottom-14 duration-700  ease-in-out">
                        <button className="bg-green-400 px-3  py-1 rounded-md">
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="text-center  group-hover:bg-blue-500 text-black group-hover:text-white">
                      <h2 className="flex justify-center items-center  h-10">
                        {item.title}
                      </h2>
                      <div className="flex gap-1 py-2 justify-center">
                        <span className="bg-green-200  w-5 h-1"></span>
                        <span className=" bg-buttom-bg w-5 h-1"></span>
                        <span className="bg-orange-200 w-5 h-1"></span>
                      </div>
                      <p>code.xyslylsahi</p>
                      <p className="pb-5">${item.price}</p>
                    </div>
                  </div>
                );
            }
             
            )}
          </div>
        </div>
      </section>
    );
};

export default Top_Categories;
