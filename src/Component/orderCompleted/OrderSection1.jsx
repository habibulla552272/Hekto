import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineEventNote } from "react-icons/md";




const OrderSection1 = () => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <div className=" relative flex flex-col items-center border-b-2 border-dotted border-l-2 w-10/12 md:w-9/12 py-5 px-5 mx-auto ">
          <div className=" absolute -left-8 -top-14 ">
            <p className="text-6xl font-extrabold">
              <CiClock1 />
            </p>
          </div>
          <p className="text-red-400 border-2 px-3 py-3 rounded-full">
            <FaCheck />
          </p>
          <h2 className="text-2xl font-josefin">Your Order is Completed !</h2>
          <p className="text-sm text-center w-11/12 py-10">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <Link to="/shop">
            <button className="px-7 py-2 bg-buttom-bg my-3 rounded-md">
              Continue Shopping
            </button>
          </Link>
          <div className=" absolute -right-8 -bottom-8 ">
            <p className="text-6xl font-extrabold">
             <MdOutlineEventNote />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection1;
