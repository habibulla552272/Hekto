import React from "react";
import sofa from "../assets/Group 153.png";

const Unique_Features = () => {
  return (
    <section className="bg-[rgba(241,240,255,1)]">
      <div className="container mx-auto py-10">
        <div className="md:flex md:gap-10">
          <div className="md:w-[50%]">
            <img src={sofa} alt="" />
          </div>
          <div className="flex flex-col justify-center md:w-[50%]">
            <h2 className="w-11/12 text-4xl font-lato">Unique Features Of leatest & Trending Poducts</h2>
            <ul className="list-disc px-5 py-5">
              <li className="py-2">All frames constructed with hardwood solids and laminates</li>
              <li className="py-2 ">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </li>
              <li className="py-2">Arms, backs and seats are structurally reinforced</li>
            </ul>
            <div className="flex gap-5">
              <button className="px-7 py-2 bg-buttom-bg rounded-md">
                Add To Cart
              </button>
              <button className="flex flex-col">
                B&B Italian Sofa <span>$32.00</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique_Features;
