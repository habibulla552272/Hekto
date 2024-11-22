import React from "react";
import delivery from "../assets/free-delivery 1.png";
import cashBack from "../assets/cashback 1.png";
import premium from "../assets/premium-quality 1.png";
import Group from "../assets/Group.png";

const What_Shopex = () => {
  return (
    <section>
      <div className="container mx-auto py-14">
        <h2 className="text-center text-4xl font-lato py-10">
          What Shopex Offer!
        </h2>
        <div className="md:flex md:justify-between md:gap-10 text-center">
          <div className="shadow-lg w-11/12 mx-auto py-5">
            <div className="flex justify-center py-5 pt-8">
              <img src={delivery} alt="" />
            </div>
            <div>
              <h3 className="py-5">24/7 Support</h3>
              <p className="w-11/12 py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
          <div className="shadow-lg w-11/12 mx-auto py-5">
            <div className="flex justify-center py-5 pt-8">
              <img src={cashBack} alt="" />
            </div>
            <div>
              <h3 className="py-5">24/7 Support</h3>
              <p className="w-11/12 py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
          <div className="shadow-lg w-11/12 mx-auto py-5">
            <div className="flex justify-center py-5 pt-8">
              <img src={premium} alt="" />
            </div>
            <div>
              <h3 className="py-5">24/7 Support</h3>
              <p className="w-11/12 py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
          <div className="shadow-lg w-11/12 mx-auto py-5">
            <div className="flex justify-center py-5 pt-8">
              <img src={Group} alt="" />
            </div>
            <div>
              <h3 className="py-5">24/7 Support</h3>
              <p className="w-11/12 py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What_Shopex;
