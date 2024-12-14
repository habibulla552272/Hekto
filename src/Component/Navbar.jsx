import React, { useContext, useState } from "react";
import Hekto from "../assets/Hekto (1).png";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { apiData } from "./ContextApi";

const Navbar = () => {
  let data = useContext(apiData);

  const [menuBar, StatemenuBar] = useState(false);

  // const [searchClick, setSearchClick] = useState(false);
  const [searchFilerProducts, setSearchFilerProducts] = useState([]);

  const searchHandeler = (e) => {
    if (e.target.value !== "") {
      let searchdata = data.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );

      setSearchFilerProducts(searchdata);
    } else {
      setSearchFilerProducts([]);
    }
  };

  const menuShow = () => {
    StatemenuBar(!menuBar);
  };
  return (
    <section>
      <div className="container mx-auto ">
        <div className="md:flex md:justify-between py-4 px-5 ">
          <div className="flex justify-between gap-10 relative text-white md:text-black">
            <div>
              <Link to="/">
                <img src={Hekto} alt="" />
              </Link>
            </div>
            <div
              className={`md:static md:flex md:bg-white ${
                menuBar
                  ? "absolute w-60 text-center top-0 left-0  bg-slate-950 z-[99] ease-in-out  duration-700"
                  : "absolute top-0 -left-52"
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
                  <Link to="/contact">Contact</Link>
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
            <input
              onChange={searchHandeler}
              className="outline-none px-5 py-1 w-full h-fit"
              type="search"
            />
            <p className="bg-buttom-bg px-2 py-2">
              <FcSearch />
            </p>
          </div>
        </div>

        <div className="">
          {searchFilerProducts.length > 0 && (
            <div className="px-4 md:absolute md:w-96 right-24 top-24 md:top-32 h-96 overflow-y-scroll z-40">
              {searchFilerProducts.map((item, index) => (
                <Link key={index} to={`/shop/${item.id}`}>
                  <div
                    key={index}
                    className="flex justify-between items-center  border-2 my-3 bg-gray-200"
                  >
                    <img
                      className="w-1/3 bg-white"
                      src={item.thumbnail}
                      alt=""
                    />
                    <h2 className="text-sm w-5/12 px-3">{item.title}</h2>
                    <p className="pr-4 w-1/4">{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
