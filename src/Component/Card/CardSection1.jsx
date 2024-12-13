import React, { useState } from "react";

import { FaTrash } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import {
  clearCurdAllData,
  decrement,
  deleteitem,
  increment,
} from "../Slice/cardSlice";
import { Link } from "react-router-dom";


const CardSection1 = () => {
  let cardData = useSelector((state) => state.cardItemSlice.cartItems);

  let dispatch = useDispatch();
  let incrementHandel = (index) => {
    dispatch(increment(index));
  };
  let decrementHandel = (index) => {
    dispatch(decrement(index));
  };

  //delete handel start
  let deleteHandel = (index) => {
    dispatch(deleteitem(index));
  };

  //delete handel End

  let clearCurdData = () => {
    if (confirm("Are you sure.Delete all Data")) {
      dispatch(clearCurdAllData());
    }
  };

  let totalPrice= cardData.reduce((previus,current)=>{

    previus += current.price *current.Qont
    return previus
  },0)

 
  return (
    <section>
      <div className="container mx-auto">
        <div className="md:flex md:justify-between">
          {/* left div start  */}

          <div className="left md:w-[70%]">
            {cardData.length > 0 ? (
              <div>
                <div className="px-2">
                  <div className="w-11/12 mx-auto">
                    <ul className="flex gap-10 justify-center">
                      <li className="md:w-2/5 ">Product</li>
                      <li className="md:w-[20%] flex items-center"> Price</li>
                      <li className="md:w-[18%] flex justify-center text-center items-center px-5">
                        Quantity
                      </li>
                      <li className="md:w-[20%] flex items-center">total</li>
                    </ul>
                  </div>

                  <div className="w-11/12 mx-auto">
                    {cardData.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row justify-between   py-4"
                      >
                        <div className="md:w-2/5 flex flex-col md:flex-row gap-2">
                          <div className="relative  md:w-1/2 rounded-md">
                            <p
                              onClick={() => deleteHandel(index)}
                              className="absolute right-0 bg-green-300 px-2 py-2 rounded-full hover:bg-orange-400"
                            >
                              <FaTrash />
                            </p>
                            <img
                              src={item.thumbnail}
                              alt=""
                              className="bg-gray-300 w-64 md:w-full"
                            />
                          </div>
                          <div className="flex flex-col gap-1 justify-center w-11/12 ">
                            <h2 className="text-sm md:text-lg">{item.title}</h2>
                            <p className="text-sm">Color:Brown</p>
                            <p className="text-sm">Size:XL</p>
                          </div>
                        </div>
                        <div className="flex  md:flex md:w-[60%] justify-between">
                          <div className="w-[20%] flex items-center">
                            <p>${item.price}</p>
                          </div>
                          <div className="w-[18%] flex justify-center text-center items-center px-5">
                            <div className="flex  gap-2 border-2 bg-gray-100 w-full cursor-pointer">
                              <p
                                className="border-r-2 w-1/4"
                                onClick={() => decrementHandel(index)}
                              >
                                -
                              </p>
                              <p className="border-r-2 w-1/2">{item.Qont}</p>
                              <p
                                className="w-1/4"
                                onClick={() => incrementHandel(index)}
                              >
                                +
                              </p>
                            </div>
                          </div>
                          <div className="w-[20%] flex items-center">
                            <p>${item.price * item.Qont.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between px-5 font-semibold">
                  <button className="bg-buttom-bg px-3 py-2 text-white rounded-md">
                    <Link to="/">BackTo Home</Link>
                  </button>

                  <button
                    onClick={() => clearCurdData()}
                    className="bg-buttom-bg px-3 text-white  py-2 rounded-md"
                  >
                    Clear All Data
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center py-5">
                <h2 className=" text-xl md:text-2xl font-josefin ">
                  Curd is Empty
                </h2>
                <h2 className="py-2 text-xl md:text-2xl font-josefin ">
                  You Did not Add Anything
                </h2>
                <button className="bg-buttom-bg px-3 py-2 text-white rounded-md">
                  <Link to="/">BackTo Home</Link>
                </button>
              </div>
            )}
          </div>
          {/* Left div End  */}

          {/* right div start  */}
          <div className="right md:w-[25%]">
            <div className="py-4">
              <h2 className="text-center text-2xl font-mono py-5">
                Card Totals
              </h2>
              <div className="bg-gray-300 py-6 px-5">
                <div className="flex justify-between border-b-2 py-5">
                  <h2 className="text-xl font-semibold font-serif">
                    Subtotals:
                  </h2>
                  <p>{totalPrice}</p>
                </div>
                <div className="flex justify-between border-b-2 py-5">
                  <h2 className="text-xl font-semibold font-serif">Total</h2>
                  <p></p>
                </div>
                <div className="flex items-center gap-4  py-5">
                  <input type="checkbox" />
                  <p>Shiping & taxes Calculated at checkout</p>
                </div>
                <button className="bg-green-500 w-full py-2 text-center">
                  Proceed To Checkout
                </button>
              </div>
            </div>
            <div className="py-4">
              <h2 className="text-center text-2xl font-mono py-5">
                Calculate Shopping
              </h2>
              <div className="bg-gray-300 py-6 px-5">
                <div className="flex justify-between  py-5">
                  <input
                    type="text"
                    className="outline-none w-full border-b-2 py-2 px-2 bg-gray-300"
                    placeholder="Bangladesh"
                  />
                </div>
                <div className="flex justify-between  py-5">
                  <input
                    type="text"
                    className="outline-none w-full border-b-2 py-2 px-2 bg-gray-300"
                    placeholder="Mohammadpur Rayer Bazer"
                  />
                </div>
                <div className="flex items-center py-5">
                  <input
                    type="text"
                    className="outline-none w-full border-b-2 py-2 px-2 bg-gray-300"
                    placeholder="Post Code "
                  />
                </div>
                <button className="bg-buttom-bg  py-2 px-7 text-center">
                  <Link to="/checkout">Proceed To Checkout</Link>
                </button>
              </div>
            </div>
          </div>
          {/* right div End  */}
        </div>
      </div>
    </section>
  );
};

export default CardSection1;
