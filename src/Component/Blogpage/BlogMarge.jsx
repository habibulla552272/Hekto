import React from "react";
import BlogCard from "./BlogCard";
import BlogMiniCarad from "./BlogMiniCarad";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";


const BlogMarge = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="md:flex justify-between py-5">
          <div className="md:w-[66%]">
            <BlogCard
              name="habu"
              date="2025.01.01"
              blogHeader="Mauris at orci non vulputate diam tincidunt nec."
              blogDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
            />

            <BlogCard
              name="habu"
              date="2025.01.01"
              blogHeader="Mauris at orci non vulputate diam tincidunt nec."
              blogDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
            />

            <BlogCard
              name="habu"
              date="2025.01.01"
              blogHeader="Mauris at orci non vulputate diam tincidunt nec."
              blogDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."
            />
          </div>
          <div className="md:w-[40%] right-div">
            <div className="">
              <label className="text-xl py-2" htmlFor="">
                Search
              </label>
              <div className="border-2 px-2">
                <input className="outline-none px-2 py-2" type="search" />
              </div>
            </div>
            <div className="py-3">
              <h3>Categories</h3>
              <div className="flex flex-wrap justify-between font-josefin">
                <h3 className="w-[30%] bg-buttom-bg  ">Hobbies (24)</h3>
                <h3 className="w-[40%] ">Women (32)</h3>
                <h3 className="w-[40%] ">Women (32)</h3>
                <h3 className="w-[40%]">Women (32)</h3>
                <h3 className="w-[40%]">Women (32)</h3>
                <h3 className="w-[40%]">Women (32)</h3>
              </div>
            </div>
            <div className="py-3 flex flex-col gap-4">
              <h3 className="text-xl font-extrabold">Recent Post</h3>
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
            </div>
            <div className="py-4 flex flex-col gap-4">
              <h3 className="text-xl font-extrabold">Sale Product</h3>
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
            </div>
            <div className=" flex flex-col gap-4 py-5">
              <h3>Offer Product </h3>
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
              <BlogMiniCarad
                title="It is a Long Established fact"
                date="Aug 09 2020"
              />
            </div>

            <div className="py-3">
              <h2 className="text-xl font-extrabold py-2">Follow</h2>

              <div className="flex gap-3">
                <p className="  justify-center items-center rounded-full bg-blue-500 py-2 px-2">
                  <FaFacebookF />
                </p>
                <p className="  justify-center items-center rounded-full bg-red-600 py-2 px-2">
                  <CiInstagram />
                </p>
                <p className="  justify-center items-center rounded-full bg-green-400 py-2 px-2">
                  <CiTwitter />
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-extrabold">Tags</h2>

              <div className="w-1/2 flex flex-wrap justify-between  md:w-full ">
                <p className="border-b-2 w-[30%]">General</p>
                <p className="border-b-2 w-[30%]">General</p>
                <p className="border-b-2 w-[30%]">General</p>
                <p className="border-b-2 w-[30%]">General</p>
                <p className="border-b-2 w-[30%]">General</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMarge;
