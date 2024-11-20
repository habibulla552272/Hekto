import React from "react";
import Slider from "react-slick";
import Sofa from "../assets/sofa promotional header.png";
import Image32 from "../assets/image 32.png";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="bg-hero-bg">
      <div className="containe w-11/12 mx-auto px-5">
        <Slider {...settings}>
          <div className="">
            <div className="flex flex-col-reverse md:flex-row md:justify-between">
              <div className="flex md:w-[60%]">
                <div className="w-[300px]">
                  <img className="w-[300px]" src={Image32} alt="" />
                </div>
                <div className="relative top-[25%] ">
                  <h3 className="py-3 text-[rgba(251,46,134,1)]">
                    Best Furniture For Your Castle..
                  </h3>
                  <h2 className="py-2 text-4xl font-josefin">
                    New Furniture Collection Trends in 2020
                  </h2>
                  <p className="py-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptas quaerat eos itaque fugit.
                  </p>
                  <button className="bg-buttom-bg px-4 py-2 rounded-sm">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="md:w-[40%]">
                <img src={Sofa} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col-reverse md:flex-row md:justify-between">
              <div className="flex md:w-[60%]">
                <div className="w-[300px]">
                  <img className="w-[300px]" src={Image32} alt="" />
                </div>
                <div className="relative top-[25%] ">
                  <h3 className="py-3 text-[rgba(251,46,134,1)]">
                    Best Furniture For Your Castle..
                  </h3>
                  <h2 className="py-2 text-4xl font-josefin">
                    New Furniture Collection Trends in 2020
                  </h2>
                  <p className="py-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptas quaerat eos itaque fugit.
                  </p>
                  <button className="bg-buttom-bg px-4 py-2 rounded-sm">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="md:w-[40%]">
                <img src={Sofa} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col-reverse md:flex-row md:justify-between">
              <div className="flex md:w-[60%]">
                <div className="w-[300px]">
                  <img className="w-[300px]" src={Image32} alt="" />
                </div>
                <div className="relative top-[25%] ">
                  <h3 className="py-3 text-[rgba(251,46,134,1)]">
                    Best Furniture For Your Castle..
                  </h3>
                  <h2 className="py-2 text-4xl font-josefin">
                    New Furniture Collection Trends in 2020
                  </h2>
                  <p className="py-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptas quaerat eos itaque fugit.
                  </p>
                  <button className="bg-buttom-bg px-4 py-2 rounded-sm">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="md:w-[40%]">
                <img src={Sofa} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
