import React from "react";


const CommonHero = (props) => {
  return (
    <section className="bg-[#F6F5FF] py-24 px-10 md:px-0">
      <div className="container mx-auto">
        <h2 className="font-lato font-extrabold text-xl md:text-3xl">{props.heading}</h2>
        <p className="md:text-xl">Home.Page. <span className="text-red-500">{props.page}</span></p>
      </div>
    </section>
  );
};

export default CommonHero;
