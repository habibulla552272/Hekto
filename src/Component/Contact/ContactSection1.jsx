import React from "react";

const ContactSection1 = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="md:flex md:gap-5 md:items-center md:justify-between">
          <div className="left md:w-[48%]">
            <h2 className="py-3 text-2xl font-josefin font-bold">
              Information About us
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              hic aliquam quos? Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex gap-2 py-3">
              <span className="w-4 h-4 rounded-full bg-blue-950"></span>

              <span className="w-4 h-4 rounded-full bg-red-600"></span>
              <span className="w-4 h-4 rounded-full bg-green-400"></span>
            </div>
          </div>
          <div className="right md:w-[48%]">
            <h2 className="py-3 text-2xl font-josefin font-bold">
              Copntact Way
            </h2>
            <div className="flex gap-6 flex-wrap justify-between">
              <div className="w-5/12 flex items-center gap-2">
                <p className="w-10 h-10 rounded-full bg-blue-950 "></p>
                <div className="flex flex-col ">
                  <p>Tel:01770256246</p>
                  <p>E-Mail:shop@store.com</p>
                </div>
              </div>
              <div className="w-5/12 flex items-center gap-2">
                <p className="w-10 h-10 rounded-full bg-red-600"></p>
                <div>
                  <p>Support Forum</p>
                  <p>For voer 24hr</p>
                </div>
              </div>
              <div className="w-5/12 flex items-center gap-2">
                <p className="w-10 h-10 rounded-full bg-yellow-500"></p>
                <div>
                  <p>20 Margaret st,London</p>
                  <p>Great britain,3NM98-LK</p>
                </div>
              </div>
              <div className="w-5/12 flex items-center gap-2">
                <p className="w-10 h-10 rounded-full bg-green-500"></p>
                <div>
                  <p>Free standard shipping</p>
                  <p>on all orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection1;
