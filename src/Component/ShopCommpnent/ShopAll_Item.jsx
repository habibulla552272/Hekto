import React, { useContext, useEffect, useState } from "react";
import { apiData } from "../ContextApi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCard } from "../Slice/cardSlice";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShopAll_Item = () => {
  const data = useContext(apiData);
  let [category, setcategory] = useState([]);
  let [categoryShow, setcategoryShow] = useState(false);
  let [BrandShow, setBrandShow] = useState(false);
  let [priceShow, setPriceShow] = useState(false);
  let [categoryData, setcategoryData] = useState([]);
  let [Brand, setBrand] = useState([]);
  let [columItemShow, setcolumitemShow] = useState(false);

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
  let numbers = [];

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

  // perpage Handel start

  let perpageHandel = (e) => {
    if (e.target.value >= 5) {
      setPerPage(e.target.value);
    }
  };

  // perpage Handel End

  // added item in cardslice  start

  let dispatch = useDispatch();
  const cardHandel = (item) => {
    dispatch(addtoCard({ ...item, Qont: 1 }));
    toast("Item Added  !");
  };
  // added item in cardslice  end

  return (
    <section>
      {/* <Fashion_item  /> */}

      <div className="container mx-auto">
        {/* section 1 */}
        <div className="text-center md:flex justify-between py-8">
          <div className="md:w-[45%] text-center md:text-start py-4">
            <h2 className="text-xl md:text-2xl  font-sans font-extrabold">
              Ecommerce Acceories & Fashion item
            </h2>
            <p className="text-sm ">About 9.620 results 0.62 seconds</p>
          </div>
          <div className="md:flex items-center justify-between w-11/12 md:w-[50%] py-5 md:py-0">
            <div className="flex justify-between">
              <div className="flex items-center  gap-1">
                <label className="text-sm " htmlFor="">
                  Per Page:
                </label>
                <input
                  onChange={perpageHandel}
                  defaultValue={15}
                  className="w-12 h-8 border-2 outline-none"
                  type="Number"
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="">Sort By:</label>
                <select
                  className="outline-none border-2 text-sm h-8 "
                  name=""
                  id=""
                >
                  <option value="Best Match">Best Match</option>
                  <option value="Best Match">Best Catch</option>
                  <option value="Best Match">Best caught</option>
                </select>
              </div>
            </div>
            <div className="py-5 md:py-0 text-xl md:text-sm  flex items-center gap-4 md:gap-1">
              <label className="pb-1">View:</label>
              <p onClick={() => setcolumitemShow(true)} className="md:text-2xl">
                <TfiMenuAlt />
              </p>
              <p
                onClick={() => setcolumitemShow(false)}
                className=" text-xl md:text-2xl "
              >
                <CgMenuGridR />
              </p>
            </div>
            <div className="flex justify-start">
              <input
                className="outline-none border-2 w-full   md:w-24"
                type="text"
              />
            </div>
          </div>
        </div>
        {/* section 1  end*/}

        {/* section 2 start */}
        <div className="md:flex md:justify-between px-5 md:px-0">
          <div className="px-3 md:px-0 md:w-[25%] py-5 md:py-0 ">
            <div className="border-2 cursor-pointer hover:bg-green-300 hover:text-white">
              <h2
                onClick={() => {
                  setcategoryShow(!categoryShow);
                  setBrandShow(false);
                  setPriceShow(false);
                }}
                className="flex items-center px-5 py-2 border-2 bg-gray-100 text-black text-xl font-lato font-extrabold justify-between"
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
                      className="border-2 px-2 py-2 my-2 cursor-pointer hover:bg-black"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="brand border-2 cursor-pointer hover:bg-green-300 hover:text-white">
              <h2
                onClick={() => {
                  setBrandShow(!BrandShow);
                  setcategoryShow(false);
                  setPriceShow(false);
                }}
                className="flex items-center px-5 py-2 border-2 bg-gray-100 text-black text-xl font-lato font-extrabold justify-between"
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
                      className="border-2 px-2 py-2 my-2 cursor-pointer hover:bg-black"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="brand border-2 cursor-pointer">
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
                  {columItemShow === true ? (
                    perPageProduct.map((item, index) => (
                      <div
                        key={index}
                        className=" flex shadow-md my-5 group bg-gray-100"
                      >
                        <img
                          className="w-40 group-hover:bg-green-200 px-1 py-1 rounded-md"
                          src={item.thumbnail}
                          alt="image"
                        />
                        <div className="px-2 py-2">
                          <h2>{item.title}</h2>
                          <div className="py-2">
                            <p>
                              ${item.price}
                              <span className="line-through px-2 text-orange-400">
                                ${Math.ceil(item.price + 10)}
                              </span>
                            </p>
                            <div></div>
                            <p className="text-sm">{item.description}</p>
                          </div>
                          <div className="flex gap-2 text-2xl py-2">
                            <p onClick={() => cardHandel(item)}>
                              <FaShoppingCart />
                            </p>
                            <ToastContainer
                              position="top-center"
                              autoClose={500}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="light"
                            />

                            {/* Same as */}

                            <p>
                              <CiHeart />
                            </p>
                            <p>
                              <FaSearchDollar />
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-wrap">
                      {perPageProduct.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="group mx-auto pb-12 md:w-[40%] lg:w-[30%] shadow-1xl rounded-md"
                          >
                            <div className="flex justify-center items-center bg-gray-100  relative overflow-hidden">
                              <div className="flex gap-2 text-2xl absolute group-hover:left-5 top-2 -left-28 duration-700 ease-in-out">
                                <p onClick={() => cardHandel(item)}>
                                  <FaShoppingCart />

                                  {/* Same as */}
                                </p>
                                <ToastContainer
                                  position="top-center"
                                  autoClose={5000}
                                  hideProgressBar={false}
                                  newestOnTop={false}
                                  closeOnClick
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                  theme="light"
                                />
                                <p>
                                  <CiHeart />
                                </p>
                                <p>
                                  <FaSearchDollar />
                                </p>
                              </div>
                              <img
                                className="py-2 group-hover:bg-green-200"
                                src={item.thumbnail}
                                alt=""
                              />
                              <div className="absolute group-hover:bottom-2 -bottom-14 duration-700  ease-in-out">
                                <button className="bg-green-400 px-3  py-1 rounded-md">
                                  <Link to="/productdetails">View Details</Link>
                                </button>
                              </div>
                            </div>
                            <div className="text-center group-hover:bg-gray-200 ">
                              <h2 className="py-1">{item.title}</h2>
                              <div className="flex gap-2 py-1">
                                <span className="w-2 h-2 rounded-full text-orange-400 "></span>
                                <span className="w-2 h-2 rounded-full text-blue-400 "></span>
                                <span className="w-2 h-2 rounded-full text-red-400 "></span>
                              </div>
                              <p>${item.price}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <div className="flex flex-col  md:flex-row gap-4 justify-center items-center ">
                    <button
                      className="w-16 h-8 bg-buttom-bg px-1 flex justify-center items-center rounded-md mb-2"
                      onClick={handelPrivius}
                    >
                      Previus
                    </button>
                    <ul className="flex w-56 md:w-96 overflow-x-scroll">
                      {numbers.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className={`border-2 rounded-md p-2 cursor-pointer ${
                              currentPage == item
                                ? "bg-orange-400 text-white"
                                : " "
                            }`}
                            onClick={() => setCurrentPage(item)}
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                    <button
                      className="w-16 h-8 bg-buttom-bg px-2 py-1 flex items-center justify-center rounded-md mb-2"
                      onClick={handelNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : columItemShow === true ? (
                categoryData.map((item, index) => (
                  <div
                    key={index}
                    className=" flex shadow-md my-5 group bg-gray-100"
                  >
                    <img
                      className="w-40 group-hover:bg-green-200 px-1 py-1 rounded-md"
                      src={item.thumbnail}
                      alt="image"
                    />
                    <div className="px-2 py-2">
                      <h2>{item.title}</h2>
                      <div className="py-2">
                        <p>
                          ${item.price}
                          <span className="line-through text-orange-400 px-2">
                            ${Math.ceil(item.price + 10)}
                          </span>
                        </p>
                        <div></div>
                        <p className="text-sm">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Dignissimos dolorem cupiditate adipisci,
                          laboriosam sit architecto!
                        </p>
                      </div>
                      <div className="flex gap-2 text-2xl py-2">
                        <p
                          className="px-2 py-2 rounded-full hover:bg-green-300"
                          onClick={() => cardHandel(item)}
                        >
                          <FaShoppingCart />
                        </p>
                        <ToastContainer
                          position="top-center"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light"
                        />
                        <p>
                          <CiHeart />
                        </p>
                        <p>
                          <FaSearchDollar />
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                categoryData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group mx-auto pb-12 md:w-[40%] lg:w-[30%] shadow-1xl rounded-md"
                    >
                      <div className="flex justify-center items-center bg-gray-100  relative overflow-hidden">
                        <div className="flex gap-2 text-2xl absolute group-hover:left-5 top-2 -left-28 duration-700 ease-in-out">
                          <p onClick={() => cardHandel(item)}>
                            <FaShoppingCart />
                          </p>
                          <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                          />
                          <p>
                            <CiHeart />
                          </p>
                          <p>
                            <FaSearchDollar />
                          </p>
                        </div>
                        <img
                          className="py-2 group-hover:bg-green-200"
                          src={item.thumbnail}
                          alt=""
                        />
                        <div className="absolute group-hover:bottom-2 -bottom-14 duration-700  ease-in-out">
                          <button className="bg-green-400 px-3  py-1 rounded-md">
                            <Link to="/productdetails">View Details</Link>
                          </button>
                        </div>
                      </div>
                      <div className="text-center group-hover:bg-gray-200 ">
                        <h2 className="py-1">{item.title}</h2>
                        <div className="flex gap-2 py-1">
                          <span className="w-2 h-2 rounded-full text-orange-400 "></span>
                          <span className="w-2 h-2 rounded-full text-blue-400 "></span>
                          <span className="w-2 h-2 rounded-full text-red-400 "></span>
                        </div>
                        <p>${item.price}</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        {/* section 2 end */}
      </div>
    </section>
  );
};

export default ShopAll_Item;
