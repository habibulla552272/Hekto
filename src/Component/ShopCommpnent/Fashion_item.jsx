import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";

const Fashion_item = (props) => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="text-center md:flex justify-between py-8">
          <div className="md:w-[45%] text-center md:text-start py-4">
            <h2 className="text-xl md:text-2xl  font-sans font-extrabold">
              Ecommerce Acceories & Fashion item
            </h2>
            <p className="text-sm ">About 9.620 results 0.62 seconds</p>
          </div>
          <div className="md:flex items-center justify-between w-11/12 md:w-[50%] py-5 md:py-0">
            <div className="flex justify-between">
              <div className="flex items-center  gap-1">
                <label className="text-sm " htmlFor="">
                  Per Page:
                </label>
                <input className="w-12 h-8 border-2 outline-none" type="text" />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="">Sort By:</label>
                <select
                  className="outline-none border-2 text-sm h-8 "
                  name=""
                  id=""
                >
                  <option value="Best Match">Best Match</option>
                  <option value="Best Match">Best Catch</option>
                  <option value="Best Match">Best caught</option>
                </select>
              </div>
            </div>
            <div className="py-5 md:py-0 text-xl md:text-sm  flex items-center gap-4 md:gap-1">
              <label className="pb-1">View:</label>
              <p onClick={props.ColumItemShowfunc} className="md:text-2xl">
                <TfiMenuAlt />
              </p>
              <p className=" text-xl md:text-2xl ">
                <CgMenuGridR />
              </p>
            </div>
            <div className="flex justify-start">
              <input
                className="outline-none border-2 w-full   md:w-24"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fashion_item;
