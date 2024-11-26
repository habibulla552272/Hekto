import React from "react";
import frame1 from "../assets/Frame 3 (1).png";
import frame2 from "../assets/Frame 3.png";
import frame3 from "../assets/Frame 4.png";
import { FaPenNib } from "react-icons/fa";

import { CiMail } from "react-icons/ci";

const Leatest_Blog = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className=" justify-center md:flex md:flex-wrap md:gap-10">
          <div className="w-11/12 mx-auto px-6 md:px-0  md:w-[40%] lg:w-[30%] py-5">
            <img src={frame2} alt="" />
            <div className="px-2">
              <div className="flex gap-10 py-3">
                <div className="flex items-center gap-2">
                  <p>
                    <FaPenNib />
                  </p>
                  <p>SaberAli</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    <CiMail />
                  </p>
                  <p>21 August,2020</p>
                </div>
              </div>
              <h3 className="py-2">Top essential trends in 2021</h3>
              <p className="py-2">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <button className="border-b-2 ">Read More...</button>
            </div>
          </div>
          <div className="w-11/12 mx-auto px-6 md:px-0  md:w-[40%] lg:w-[30%] py-5">
            <img src={frame1} alt="" />
            <div className="px-2">
              <div className="flex gap-10 py-3">
                <div className="flex items-center gap-2">
                  <p>
                    <FaPenNib />
                  </p>
                  <p>SaberAli</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    <CiMail />
                  </p>
                  <p>21 August,2020</p>
                </div>
              </div>
              <h3 className="py-2">Top essential trends in 2021</h3>
              <p className="py-2">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <button className="border-b-2 ">Read More...</button>
            </div>
          </div>

          <div className="w-11/12 mx-auto px-6 md:px-0  md:w-[40%] lg:w-[30%] py-5">
            <img src={frame3} alt="" />
            <div className="px-2">
              <div className="flex gap-10 py-3 ">
                <div className="flex items-center justify-center gap-2">
                  <p>
                    <FaPenNib />
                  </p>
                  <p>SaberAli</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <p>
                    <CiMail />
                  </p>
                  <p>21 August,2020</p>
                </div>
              </div>
              <h3 className="py-2">Top essential trends in 2021</h3>
              <p className="py-2">
                More off this less hello samlande lied much over tightly circa
                horse taped mightly
              </p>
              <button className="border-b-2 ">Read More...</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leatest_Blog;
