import React from "react";
import { Link } from "react-router-dom";
import CommonHero from "./CommonHero";
import Group197 from "../assets/Group 197.png";

const NotFound_Page = () => {
  return (
    <section>
      <CommonHero heading="404 Not Found" page="404 Not Found" />
      <div className="container mx-auto">
        <div className="flex justify-center items-center py-36">
          <div className="relative">
            <img
              className="flex justify-center items-center"
              src={Group197}
              alt=""
            />

            <button>
              <Link
                className="bg-buttom-bg px-2 py-2  text-white  rounded-md absolute  left-[40%]  bottom-3  md:left-[41%]  md:bottom-6 md:py-6 md:px-9"
                to="/"
              >
                Back To Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound_Page;
