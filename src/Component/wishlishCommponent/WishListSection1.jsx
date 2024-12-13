import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { addtoCard } from '../Slice/cardSlice';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishListSection1 = () => {
  let wishlistData = useSelector((state) => state.wishItemSlice.wishItem);

  // added item in cardslice  start

  let dispatch = useDispatch();
  const cardHandel = (item) => {
    dispatch(addtoCard({ ...item, Qont: 1 }));
    toast("Item Added  !");
  };
  // added item in cardslice  end

  return (
    <section>
      <div className="container mx-auto">
        <div>
          {wishlistData.map((item, index) => (
            <div key={index} className=" flex  flex-col justify-center md:flex-row items-center shadow-md my-5 group bg-gray-100">
              <img
                className="w-40 md:w-fit group-hover:bg-green-200 px-1 py-1 rounded-md"
                src={item.thumbnail}
                alt="image"
              />
              <div className="px-2 py-2 flex flex-col items-center md:items-start">
                <h2>{item.title}</h2>
                <div className="py-2 flex flex-col items-center md:items-start">
                  <p>
                    ${item.price}
                    <span className="line-through px-2 text-orange-400">
                      ${Math.ceil(item.price + 10)}
                    </span>
                    <span>({item.stock})</span>
                  </p>
                  <p className='py-1'>ReturnPolicy:  {item.returnPolicy}</p>
                  <div></div>
                  <p className="text-sm w-11/12 mx-auto md:mx-0">{item.description}</p>
                </div>
                <div className="flex gap-2 text-2xl py-2">
                  <p onClick={() => cardHandel(item)}>
                    <FaShoppingCart />
                  </p>
                  <ToastContainer
                    position="top-center"
                    autoClose={500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />

                  {/* Same as */}

                  <p>
                    <CiHeart />
                  </p>
                  <p>
                    <FaSearchDollar />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WishListSection1
