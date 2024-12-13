import React, { useContext } from "react";
import "../Component/featured.css";
import { apiData } from "./ContextApi";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addtoCard } from "./Slice/cardSlice";
import { addtoWishList } from "./Slice/wishlishSlice";


const Featured = () => {
  const info = useContext(apiData);
  let filteritem = info.filter((item) => {
    return item.category === "laptops";
  });

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // appendDots: (dots) => (
    //   <div>
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <div className="w-5 h-5 bg-green-500 mt-10" >
    //     <h2 className="w-5 h-2 "></h2>
    //   </div>
    // ),
  };

  // added item in cardslice  start

  let dispatch = useDispatch();
  const cardHandel = (item) => {
    dispatch(addtoCard({ ...item, Qont: 1 }));
    toast.success("Item Added!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  // added item in cardslice  end

  // added item in wishlisht  start

  let wishListHandel = (item)=>{
    dispatch(addtoWishList(item))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto slider-container overflow-hidden py-2">
        <h2 className="text-center text-3xl font-lato">Featured Products</h2>

        <Slider {...settings}>
          {filteritem.map((item, index) => (
            <div key={index} className="group !w-[97%]  shadow-1xl">
              <div className="flex  flex-col items-center relative overflow-hidden bg-gray-100 rounded-md">
                <div className="flex gap-2 text-2xl absolute group-hover:left-5 top-2 -left-28 duration-700 ease-in-out">
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
                  <p onClick={()=>wishListHandel(item)}>
                    <CiHeart />
                  </p>
                  <p>
                    <FaSearchDollar />
                  </p>
                </div>
                <img className="py-10" src={item.thumbnail} alt="" />
                <div className="absolute group-hover:bottom-2 -bottom-14 duration-700  ease-in-out">
                  <button className="bg-green-400 px-3  py-1 rounded-md">
                    <Link to={`/shop/${item.id}`}>View Details</Link>
                  </button>
                </div>
              </div>
              <div className="text-center  group-hover:bg-blue-500 text-black group-hover:text-white">
                <h2 className="flex justify-center items-center  h-10">
                  {item.title}
                </h2>
                <div className="flex gap-1 py-2 justify-center">
                  <span className="bg-green-200  w-5 h-1"></span>
                  <span className=" bg-buttom-bg w-5 h-1"></span>
                  <span className="bg-orange-200 w-5 h-1"></span>
                </div>
                <p>code.xyslylsahi</p>
                <p className="pb-5">${item.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Featured;
