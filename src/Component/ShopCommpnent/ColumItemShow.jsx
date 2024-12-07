import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const ColumItemShow = () => {
  return (
    <section>
      <div className="container mx-auto flex">
        <img className='w-40' src="" alt="image" />
        <div>
          <h2>hey bro how are you</h2>
          <div className='py-2'>
            <p>
              $25.55 <span className="line-through bg-purple-400"> $52.00</span>
            </p>
            <div></div>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos dolorem cupiditate adipisci, laboriosam sit
              architecto!
            </p>
          </div>
          <div className="flex gap-2 text-2xl py-2">
            <p onClick={() => cardHandel(item)}>
              <FaShoppingCart />
            </p>
            <p>
              <CiHeart />
            </p>
            <p>
              <FaSearchDollar />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColumItemShow
