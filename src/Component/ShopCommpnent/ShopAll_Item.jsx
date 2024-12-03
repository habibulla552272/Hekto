import React, { useContext, useEffect, useState } from "react";
import { apiData } from "../ContextApi";
import { IoIosArrowUp } from "react-icons/io";

import { IoIosArrowDown } from "react-icons/io";

const ShopAll_Item = () => {
  const data = useContext(apiData);
  let [category, setcategory] = useState([]);
  let [categoryShow, setcategoryShow] = useState(false);
  let [BrandShow, setBrandShow] = useState(false);
  let [priceShow, setPriceShow] = useState(false);
  let [categoryData, setcategoryData] = useState([]);
  let [Brand, setBrand] = useState([]);

  // filter category unique value useing set method
  useEffect(() => {
    setcategory([...new Set(data.map((item) => item.category))]);
  }, [data]);
  // filter Brand unique value useing set method
  useEffect(() => {
    setBrand([...new Set(data.map((item) => item.brand))]);
  }, [data]);

  //    filter category item start
  const handleCategory = (listItem, type) => {
    if (type === "category") {
      let filteritem = data.filter((item) => item.category === listItem);
      setcategoryData(filteritem);
    } else if (type === "brand") {
      let filteritem = data.filter((item) => item.brand === listItem);
      setcategoryData(filteritem);
    }
  };
  const handlePrice = (low, high) => {
    let filteritem = data.filter(
      (item) => item.price > low && item.price <= high
    );
    setcategoryData(filteritem);
  };

  //    filter category item End

  // pagination  start
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(15);
  let lastItemIndex = currentPage * perPage;
  let firstItemIndex = lastItemIndex - perPage;

  let pageNumber = Math.ceil(data.length / perPage);
  let numbers = useState([]);

  for (let i = 1; i <= pageNumber; i++) {
    numbers.push(i);
  }

  let perPageProduct = data.slice(firstItemIndex, lastItemIndex);

  const handelPrivius = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handelNext = () => {
    if (currentPage !== pageNumber) {
      setCurrentPage(currentPage + 1);
    }
  };

  //pagination End

  return (
    <section>
      <div className="md:flex md:justify-between px-5 ">
        <div className="px-3 md:w-[25%] py-5 md:py-0">
          <div className="border-2 ">
            <h2
              onClick={() => {
                setcategoryShow(!categoryShow);
                setBrandShow(false);
                setPriceShow(false);
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
                    onClick={() => handleCategory(item, "category")}
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
                setcategoryShow(false);
                setPriceShow(false);
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
                    onClick={() => handleCategory(item, "brand")}
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
                setPriceShow(!priceShow);
                setcategoryShow(false);
                setBrandShow(false);
              }}
              className="flex items-center px-5 py-2 border-2 bg-gray-100 text-xl font-lato font-extrabold justify-between"
            >
              Price {BrandShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h2>
            <ul
              className={`px-5 h-36 overflow-y-scroll ${
                priceShow ? " " : "hidden"
              }`}
            >
              <div
                onClick={() => {
                  handlePrice(0, 50);
                }}
                className="flex justify-between bg-gray-100 px-2 rounded-md py-1 my-2"
              >
                <li>$0</li>
                <li>$50</li>
              </div>
              <div
                onClick={() => {
                  handlePrice(51, 100);
                }}
                className="flex justify-between bg-gray-100 px-2 rounded-md py-1 my-2"
              >
                <li>$51</li>
                <li>$100</li>
              </div>
              <div
                onClick={() => {
                  handlePrice(101, 150);
                }}
                className="flex justify-between bg-gray-100 px-2 rounded-md py-1  my-2"
              >
                <li>$101</li>
                <li>$150</li>
              </div>
              <div
                onClick={() => {
                  handlePrice(151, 200);
                }}
                className="flex justify-between bg-gray-100 px-2 rounded-md py-1 my-2"
              >
                <li>$151</li>
                <li>$200</li>
              </div>
              <div
                onClick={() => {
                  handlePrice(201, 250);
                }}
                className="flex justify-between bg-gray-100 px-2 rounded-md py-1 my-2"
              >
                <li>$201</li>
                <li>$250</li>
              </div>
              <div
                onClick={() => {
                  handlePrice(251, 300);
                }}
                className="flex justify-between bg-gray-100 px-2 rounded-md py-1 my-2"
              >
                <li>$251</li>
                <li>$300</li>
              </div>
              <div
                onClick={() => {
                  handlePrice(301, 400);
                }}
                className="flex justify-between bg-gray-100 px-2 rounded-md py-1 my-2"
              >
                <li>$301</li>
                <li>$400</li>
              </div>
              <div
                onClick={() => {
                  handlePrice(401, 500);
                }}
                className="flex justify-between bg-gray-100 px-2 rounded-md py-1 my-2"
              >
                <li>$401</li>
                <li>$500</li>
              </div>

              <div
                onClick={() => {
                  handlePrice(501, 100000);
                }}
                className="flex justify-between bg-gray-100 px-2 rounded-md py-1 my-2"
              >
                <li>$501</li>
                <li>$1000</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="md:w-[70%]">
          <div className="flex  justify-between flex-wrap ">
            {categoryData == 0 ? (
              <div>
                <div className="flex  justify-between flex-wrap">
                  {perPageProduct.map((item, index) => (
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
                <div className="flex flex-col  md:flex-row gap-4 justify-center items-center ">
                  <button className="w-16 h-8 bg-buttom-bg px-1 flex justify-center items-center rounded-md mb-2" onClick={handelPrivius}>Previus</button>
                  <ul className="flex w-56 md:w-96 overflow-x-scroll">
                    {numbers.map((item) => {
                      return <li className={`border-2 rounded-md p-2 cursor-pointer ${currentPage == item ? 'bg-orange-400 text-white': ' ' }`} onClick={()=>setCurrentPage(item)}>{item}</li>;
                    })}
                  </ul>
                  <button className="w-16 h-8 bg-buttom-bg px-2 py-1 flex items-center justify-center rounded-md mb-2" onClick={handelNext}>Next</button>
                </div>
              </div>
            ) : (
              categoryData.map((item, index) => (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopAll_Item;
