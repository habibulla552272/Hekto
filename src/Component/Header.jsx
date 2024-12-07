import React from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <section className="bg-heder-bg">
      <div className="container mx-auto text-white ">
        <div className="flex flex-wrap justify-center gap-5 md:justify-between py-2 font-josefin">
          <div className="text-sm md:text-lg div-1 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <p className=" flex items-center">
                <CiMail />
              </p>
              <p >mhhasanul@gmail.com</p>
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
              <p className="flex items-center">
                Login
                <span>
                  <CiUser />
                </span>
              </p>
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
              <p className="text-2xl flex ">
                <Link to="/curt">
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
