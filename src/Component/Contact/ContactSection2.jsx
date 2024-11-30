import React from "react";
import Group124 from './ContactImage/Group 124.png'
const ContactSection2 = () => {
  return (
    <section>
      <div className="container mx-auto py-12">
        <div className=" gap-8 flex flex-col-reverse  md:flex-row md:items-center">
          <div className="left">
            <h2 className="text-2xl font-josefin font-semibold">Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              deleniti incidunt fuga animi at quis.
            </p>

            <form action="">
              <div className="md:flex justify-between">
                <div className="my-5  border-2 md:w-[45%]">
                  <input
                    className="px-2 py-1 outline-none text-xl w-full"
                    type="text"
                    name=""
                    id="name"
                    placeholder="Your Name *"
                  />
                </div>
                <div className="my-5 border-2 md:w-[45%]">
                  <input
                    className="px-2 py-1 outline-none text-xl w-full"
                    type="email"
                    name=""
                    id="name"
                    placeholder="Your E-mail"
                  />
                </div>
              </div>
              <div className="border-2 my-4">
                <input
                  className="px-2 py-1 outline-none text-xl w-full"
                  type="text"
                  name=""
                  id="name"
                  placeholder="subject *"
                />
              </div>
              <div className="border-2 my-4">
                <textarea className="px-3 pt-3 w-full outline-none" rows='8' placeholder="Enter your messege">

                </textarea>
              </div>
            </form>
          </div>
          <div className="right">
            <img src={Group124} alt="" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection2;
