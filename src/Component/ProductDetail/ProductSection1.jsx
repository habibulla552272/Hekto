import React, { useContext } from "react";
import ProductImage34 from "./ProductImage/Rectangle 134.png";
import ProductImage36 from "./ProductImage/Rectangle 136.png";
import ProductImage37 from "./ProductImage/Rectangle 137.png";
import ProductImage38 from "./ProductImage/Rectangle 138.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { apiData } from "../ContextApi";

const ProductSection1 = () => {
  let product = useParams();
  let Data = useContext(apiData);
  let singelData = Data.filter((item) => item.id == product.id);
 
console.log(Data);


  return (
    <section>
      <div className="container mx-auto py-20">
        {singelData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center  flex-wrap shadow-lg"
          >
            <div className="w-[25%] md:w-[15%] flex flex-col gap-4 py-2 px-2">
              {item.images.map((items, index) => (
                <div key={index} className="bg-gray-200 hover:bg-green-200">
                  <img src={items} alt="image" />
                </div>
              ))}
            </div>
            <div className="mid w-[70%] py-2 px-1 md:w-[40%]">
              <img
                className="bg-gray-100 hover:bg-green-200"
                src={item.thumbnail}
                alt="img"
              />
            </div>
            <div className="right w-11/12 md:w-[40%] px-2 py-2 md:px-0 md:py-0">
              <h2 className="text-2xl py-3 font-serif">{item.title}</h2>
              <div className="flex gap-2 text-orange-400">
                <FaStar />
                <FaStar />
                <FaStar />

                <FaStarHalfStroke />
                <FaRegStar />
                <p className="px-2">(22)</p>
              </div>
              <div className="flex gap-5">
                <p>${item.price}</p>
                <p className="line-through text-red-400">${item.price + 10}</p>
              </div>
              <h3 className="text-2xl font-serif">color</h3>
              <p>{item.description}</p>
              <div className="flex gap-3 items-center py-3">
                <button>Add to cart</button>

                <CiHeart className="text-xl " />
              </div>
              <h2 className="py-2">Categories:</h2>
              <h2 className="py-2 flex gap-2"> 
                <h2>tags:</h2>
              {item.tags.map((tags,index)=>(
                <p key={index}>{tags}</p>
              ))
                 }
              </h2>
              <div className="flex gap-3 items-center">
                <h2 className="pr-3">Share</h2>
                <div className="flex gap-2 text-orange-500">
                  <FaFacebookF />
                  <FaInstagram />
                  <CiTwitter />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection1;
