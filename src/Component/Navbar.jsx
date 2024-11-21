import React, { useState } from "react";
import Hekto from "../assets/Hekto (1).png";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import Pages from "../Pages/Pages";
import Products from "../Pages/Products";
import Blog from "../Pages/Blog";

const Navbar = () => {
  const [menuBar, StatemenuBar] = useState(false);
  const menuShow = () => {
    StatemenuBar(!menuBar);
  };
  return (
    <section>
      <div className="container mx-auto ">
        <div className="md:flex md:justify-between py-4 px-5 ">
          <div className="flex justify-between gap-10 relative text-white md:text-black">
            <div>
              <img src={Hekto} alt="" />
            </div>
            <div
              className={`md:static md:flex md:bg-white ${
                menuBar
                  ? "absolute w-60 text-center top-0 -left-3  bg-slate-950 opacity-100  duration-700"
                  : "absolute top-0 -left-16"
              }`}
            >
              <ul className="flex flex-col gap-5 justify-center items-center py-5 md:flex-row md:gap-10 md:py-0">
                <li>
                  <Link to="/" className="flex items-center">
                    Home <FaChevronDown />
                  </Link>
                </li>
                <li>
                  <Link to="/pages">Pages</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
            <div onClick={menuShow} className="md:hidden text-4xl text-black">
              {/* menubar */}
              {menuBar ? <IoClose /> : <IoMenu />}
            </div>
          </div>

          {/* search div */}
          <div
            onClick={() => StatemenuBar(false)}
            className="flex border-2 rounded-md justify-between"
          >
            <input className="outline-none px-5 w-full h-fit" type="search" />
            <p className="bg-buttom-bg px-2 py-2">
              <FcSearch />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
