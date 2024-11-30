import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";


import Rectangle128 from "./ProductImage/Rectangle 128.png";

import Rectangle130 from "./ProductImage/Rectangle 130.png";

import Rectangle131 from "./ProductImage/Rectangle 131.png";

import Rectangle132 from "./ProductImage/Group 233.png";

const RelatedProducts = () => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <h2 className="text-2xl font-serif py-5">Related Products</h2>
        <div className="flex flex-wrap justify-between">
          <div className=" mx-auto md:w-[23%] shadow-md py-2">
            <div className="bg-gray-100">
              <img src={Rectangle128} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-sm">Mens Fashion Wear</h2>
              <div className="flex text-orange-400 py-2 px-1">
                <FaStar />
                <FaStar />
                <FaStar />

                <FaStarHalfStroke />
                <FaRegStar />
              </div>
            </div>
            <p>$41.00</p>
          </div>
          <div className="mx-auto md:w-[23%] shadow-md py-2">
            <div className="bg-gray-100">
              <img src={Rectangle130} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-sm">Mens Fashion Wear</h2>
              <div className="flex text-orange-400 py-2 px-1">
                <FaStar />
                <FaStar />
                <FaStar />

                <FaStarHalfStroke />
                <FaRegStar />
              </div>
            </div>
            <p>$41.00</p>
          </div>
          <div className="mx-auto md:w-[23%] shadow-md py-2">
            <div className="bg-gray-100">
              <img src={Rectangle131} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-sm">Mens Fashion Wear</h2>
              <div className="flex text-orange-400 py-2 px-1">
                <FaStar />
                <FaStar />
                <FaStar />

                <FaStarHalfStroke />
                <FaRegStar />
              </div>
            </div>
            <p>$41.00</p>
          </div>
          <div className="mx-auto md:w-[23%] shadow-md py-2">
            <div className="bg-gray-100">
              <img src={Rectangle132} alt="" />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-sm">Mens Fashion Wear</h2>
              <div className="flex text-orange-400 py-2 px-1">
                <FaStar />
                <FaStar />
                <FaStar />

                <FaStarHalfStroke />
                <FaRegStar />
              </div>
            </div>
            <p>$41.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts
