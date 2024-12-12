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
      <div className="container mx-auto text-white ">
        <div className="flex flex-wrap justify-center gap-5 md:justify-between py-2 md:py-5 font-josefin">
          <div className="text-sm md:text-lg div-1 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <p className=" flex items-center">
                <CiMail />
              </p>
              <p>mhhasanul@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="flex items-center">
                <FaPhone />
              </p>
              <p>(12345)67890</p>
            </div>
          </div>

          <div className="flex gap-3 text-sm md:text-lg">
            <div>
              <p className="flex items-center">
                English
                <span>
                  <FaChevronDown />
                </span>
              </p>
            </div>
            <div>
              <p className="flex items-center">
                USD
                <span>
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
              <p className="flex items-center ">
                WishList
                <span>
                  <CiHeart />
                </span>
              </p>
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
