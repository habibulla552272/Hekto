import React, { useContext, useEffect, useState } from "react";
import { apiData } from "../ContextApi";
import { IoIosArrowUp } from "react-icons/io";

import { IoIosArrowDown } from "react-icons/io";

const ShopAll_Item = () => {
  const data = useContext(apiData);
  let [category, setcategory] = useState([]);
  let [categoryShow, setcategoryShow] = useState(false);
  let [BrandShow,setBrandShow]=useState(false)
  let [categoryData, setcategoryData] = useState([]);
  let [Brand,setBrand]=useState([]);

  // filter category unique value useing set method
  useEffect(() => {
    setcategory([...new Set(data.map((item) => item.category))]);
  }, [data]);
  // filter Brand unique value useing set method
useEffect(() => {
  setBrand([...new Set(data.map((item) => item.brand))]);
}, [data]);





  //    filter category item
  const handleCategory = (listItem, type) => {
    if (type === "category") {
      let filteritem = data.filter((item) => item.category === listItem);
      setcategoryData(filteritem);
    }
    else if (type === "brand") {
      let filteritem = data.filter((item) => item.brand === listItem);
      setcategoryData(filteritem);
    }
  };
  



  return (
    <section>
      
      <div className="md:flex md:justify-between px-5">
        <div className="px-3 md:w-[25%]">
          <div className="border-2 ">
            <h2
              onClick={() => {

                setcategoryShow(!categoryShow);
                setBrandShow(false)

              }}
              className="flex items-center px-5 py-2 border-2 bg-gray-100 text-xl font-lato font-extrabold justify-between"
            >
              Category {categoryShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h2>
            <ul
              className={`px-5 h-36 overflow-y-scroll ${
                categoryShow ? " " : "hidden"
              }`}
            >
              {category.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleCategory(item,'category')}
                    className="border-2 px-2 py-2 my-2 cursor-pointer"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="brand border-2 ">
            <h2
              onClick={() => {
                setBrandShow(!BrandShow);
                setcategoryShow(false)
              }}
              className="flex items-center px-5 py-2 border-2 bg-gray-100 text-xl font-lato font-extrabold justify-between"
            >
              Brand {BrandShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h2>
            <ul
              className={`px-5 h-36 overflow-y-scroll ${
                BrandShow ? " " : "hidden"
              }`}
            >
              {Brand.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleCategory(item,'brand')}
                    className="border-2 px-2 py-2 my-2 cursor-pointer"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="md:w-[70%]">
          <div className="flex  justify-between flex-wrap ">
            {categoryData == 0
              ? data.map((item, index) => (
                  <div
                    key={index}
                    className=" mx-auto pb-12 md:w-[40%] lg:w-[30%]"
                  >
                    <div className="flex justify-center items-center bg-gray-100">
                      <img src={item.thumbnail} alt="" />
                    </div>
                    <div className="text-center">
                      <h2>{item.title}</h2>
                      <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full text-orange-400 "></span>
                        <span className="w-2 h-2 rounded-full text-blue-400 "></span>
                        <span className="w-2 h-2 rounded-full text-red-400 "></span>
                      </div>
                      <p>{item.price}</p>
                    </div>
                  </div>
                ))
              : categoryData.map((item, index) => (
                  <div
                    key={index}
                    className=" mx-auto pb-12 md:w-[40%] lg:w-[30%]"
                  >
                    <div className="flex justify-center items-center bg-gray-100">
                      <img src={item.thumbnail} alt="" />
                    </div>
                    <div className="text-center">
                      <h2>{item.title}</h2>
                      <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full text-orange-400 "></span>
                        <span className="w-2 h-2 rounded-full text-blue-400 "></span>
                        <span className="w-2 h-2 rounded-full text-red-400 "></span>
                      </div>
                      <p>{item.price}</p>
                    </div>
                  </div>
                ))}
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopAll_Item;
