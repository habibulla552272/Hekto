import React, { useContext } from "react";
import { apiData } from "./ContextApi";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image1163 from '../assets/image 1162.png'
import Image1161 from '../assets/image 1161.png'
import Image19 from "../assets/image 19.png";
import Image28 from "../assets/image 28.png";
import Image30 from "../assets/image 30.png";




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
            })}
          </div>
          <div className="divbottom py-10 md:flex justify-between">
            <div className="bg-top_Categories-bg md:w-[35%] p-4">
              <div>
                <h2>23% off in all products</h2>
              </div>
              <div className="flex justify-between">
                <Link className="border-b-2 pb-1 h-8 text-red-500">Shop Now</Link>
                <img src={Image1163} alt="" />
              </div>
            </div>
            <div className="bg-top_categories-bg md:w-[38%] p-4">
              <div>
                <h2>23% off in all products</h2>
              </div>
              <div className="flex justify-between">
                <Link className="border-b-2 text-red-500">View collection</Link>
              </div>
              <div className="flex justify-end">
                <img src={Image1161} alt="" />
              </div>
            </div>
            <div className="py-5 md:py-0 md:w-[20%]">
              <div className="flex gap-5 items-center">
                <div className="bg-hero-bg p-2">
                  <img src={Image19} alt="" />
                </div>
                <div>
                  <h2>Executive Seat chair</h2>
                  <p>$344</p>
                </div>
              </div>
              <div className="py-5  flex gap-5 items-center">
                <div className="bg-hero-bg p-2">
                  <img src={Image19} alt="" />
                </div>
                <div>
                  <h2>Executive Seat chair</h2>
                  <p>$344</p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="bg-hero-bg p-2">
                  <img src={Image19} alt="" />
                </div>
                <div>
                  <h2>Executive Seat chair</h2>
                  <p>$344</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Top_Categories;
