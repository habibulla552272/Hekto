import React, { useContext } from "react";
import testcard from "../assets/image 1168.png";
import Slider from "react-slick";
import { apiData } from "./ContextApi";
import { Link } from "react-router-dom";

const Top_Categories = () => {
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
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  return (
    <section className="py-10">
      <div className="container mx-auto px-10">
        <div className="flex justify-center py-5">
          <h2 className="text-4xl">Top Categories</h2>
        </div>

        <div className="">
          <Slider {...settings}>
            {filteritem.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" md:!w-11/12 ! flex flex-col justify-center items-center"
                >
                  <div className="relative mx-auto overflow-hidden group  bg-gray-100  flex flex-col justify-center items-center pb-6 px-7 w-56 h-56 rounded-full hover:before:w-[50%] hover:before:h-[80%] hover:before:rounded-[70%] hover:before:rotate-1 hover:before:bg-blue-700 before:-bottom-0 hover:before:absolute hover:before:-left-20">
                    <img src={item.thumbnail} alt="" />
                    <div className="absolute -bottom-32 group-hover:bottom-2 duration-700 ease-in-out">
                      <button className="bg-green-400 px-3  py-1 rounded-md">
                        <Link to={`/shop/${item.id}`}>View Details</Link>
                      </button>
                    </div>
                    {/* <div className='absolute w-full h-full -left-20 top-20 rotate-180    rounded-full bg-blue-600'></div> */}
                  </div>
                  <div className="text-center py-3">
                    <h2>{item.title}</h2>
                    <p>{item.price}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Top_Categories;
