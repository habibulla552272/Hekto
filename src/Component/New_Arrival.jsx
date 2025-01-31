import React, { useContext } from "react";
import { apiData } from "./ContextApi";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addtoCard } from "./Slice/cardSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addtoWishList } from "./Slice/wishlishSlice";

const New_Arrival = () => {
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

  // added item in cardslice  start

  let dispatch = useDispatch();
  const cardHandel = (item) => {
    dispatch(addtoCard({ ...item, Qont: 1 }));
    toast("Item Added  !");
  };
  // added item in cardslice  end
    // added item in wishlisht  start
  
    let wishListHandel = (item) => {
      dispatch(addtoWishList(item));
      toast("Item Added  in WishItem !");
    };
    // added item in wishlisht  end

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex   md:justify-between overflow-hidden flex-wrap">
          {filteritem.map((item, index) => (
            <div key={index} className="w-fit mx-auto py-5  md:w-[30%] group ">
              <div className="relative overflow-hidden bg-gray-200 z-20">
                <div className="absolute bg-blue-900 group-hover:left-2 left-2 -top-20 group-hover:top-3 duration-700 ease-in-out">
                  <p className="text-xl text-white py-2 px-5">Sale</p>
                </div>
                <img
                  className="py-10 w-[98%] h-[320px] mx-auto"
                  src={item.thumbnail}
                  alt=""
                />
                <div className="absolute flex translate-x-[90%] group-hover:bottom-2 -bottom-14 duration-700  ease-in-out">
                  <button className="bg-green-400 px-3  py-1 rounded-md">
                    <Link to={`/shop/${item.id}`}>View Details</Link>
                  </button>
                </div>
                <div className="flex flex-col gap-2 text-2xl absolute group-hover:bottom-6 -bottom-60 left-3 duration-700 ease-in-out">
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
                  <p onClick={() => wishListHandel(item)}>
                    <CiHeart />
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
                    <FaSearchDollar />
                  </p>
                </div>
              </div>
              <div className="flex justify-between bg-whitesmoke shadow-lg py-2 h-20 z-50">
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

export default New_Arrival;
