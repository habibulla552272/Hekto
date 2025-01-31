import React from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {

 //card data import 

 let curdData = useSelector((state) => state.cardItemSlice.cartItems);

 

 //card data import end

  return (
    <section className="bg-heder-bg">
      <div className="container mx-auto text-white">
        <div className="flex flex-col md:flex-row items-center flex-wrap justify-center gap-5 md:justify-between py-2 px-3  md:py-5 font-josefin">
          <div className="text-sm lg:text-lg div-1 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <p className=" flex items-center">
                <CiMail />
              </p>
              <p>mdhabiulla146425@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="flex items-center">
                <FaPhone />
              </p>
              <p>01707256246</p>
            </div>
          </div>

          <div className="flex gap-3 text-sm lg:text-lg">
            <div>
              <p className="flex gap-1 items-center">
                English
                <span className="text-sm">
                  <FaChevronDown />
                </span>
              </p>
            </div>
            <div>
              <p className="flex gap-1 items-center justify-center">
                USD
                <span className="text-sm">
                  <FaChevronDown />
                </span>
              </p>
            </div>
            <div>
              <Link to="/login">
                <p className="flex items-center">
                  Login
                  <span>
                    <CiUser />
                  </span>
                </p>
              </Link>
            </div>
            <div>
              <Link to="/wishlist">
                <p className="flex items-center ">
                  WishList
                  <span className="">
                    <CiHeart />
                  </span>
                </p>
              </Link>
            </div>
            <div className="flex items-center">
              <p className="text-2xl flex relative">
                <Link to="/curt">
                  <p className="absolute text-white -right-3 -top-3 bg-black  w-6 h-6 flex justify-center items-center rounded-full text-sm">
                    {curdData.length}
                  </p>
                  <FaShoppingCart />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
