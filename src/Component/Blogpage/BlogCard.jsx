import React from 'react'
import { FaPenNib } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";


const BlogCard = (props) => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <div className="">
            <img className="bg-gray-100 rounded-md" src={props.Image} alt="" />
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-1 py-4">
                <p>
                  <FaPenNib />
                </p>
                <button className="bg-[#FFE7F9] px-2 w-32">{props.name}</button>
              </div>
              <div className="flex items-center gap-1">
                <p>
                  <CiCalendar />
                </p>
                <button className="bg-[#FFECE2] px-2 w-32">{props.date}</button>
              </div>
            </div>
            <div>
              <h2 className="py-6 text-xl md:text-2xl font-josefin font-extrabold">
                {props.blogHeader}
              </h2>
              <p>{props.blogDetails}</p>
              <button className="text-xl flex gap-2 py-2">
                Read More{" "}
                <span className="text-orange-500 flex items-center">.</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default BlogCard
