import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


import { useSelector } from 'react-redux';

const ChekoutSection1 = () => {

    let CardData= useSelector((state)=> state.cardItemSlice.cartItems)
   
    // total price count;

    let totalPrice = CardData.reduce((previous,current)=>{

        previous += current.price *current.Qont

        return previous
    },0)

    const navigate =useNavigate();
    const orderHandel = ()=>{

      navigate('/orderconfirm');
    }
    

  return (
    <section>
      <div className="container mx-auto">
        <div className="py-10">
          <h2 className="py-2 text-xl">Hekto Demo</h2>
          <p>Card/Information/Shipping/Payment</p>
        </div>
        <div className="bottom flex flex-col-reverse md:flex-row md:justify-between ">
          <div className="left md:w-[60%]">
            <form action="#">


            <div className="px-4">
              <div className="flex justify-between py-4">
                <h2 className='font-semibold font-josefin text-xm md:text-xl '>Contact Information</h2>
                <p className='text-xs md:text-sm'>Already Have an Account</p>
              </div>
              <div className="">
                <input
                  className="outline-none border-b-2 w-full py-3"
                  type="email"
                  placeholder="Email or Mobile Number" required
                />

                <div className="flex  gap-8 items-center py-3">
                  <input type="checkbox" />
                  <p>Keep me up to date on news and excluive offers</p>
                </div>
              </div>
              <div className="py-10">
                <h2 className="py-5 font-extrabold text-sm md:text-xl font-josefin">Shipping Address</h2>

                <div className="flex flex-col  md:flex-row gap-5">
                  <input
                    className="w-full border-b-2 py-4  outline-none"
                    type="text"
                    placeholder="First Name (optional)"
                    required
                  />
                  <input
                    className="w-full border-b-2 py-4 outline-none"
                    type="text"
                    placeholder="Last Name " required
                  />
                </div>

                <div>
                  <input
                    className="w-full border-b-2 py-4  outline-none"
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div>
                  <input
                    className="w-full border-b-2 py-4  outline-none"
                    type="text"
                    placeholder="Appaetnentment,suit,etc(Optional)"
                  />
                </div>
                <div>
                  <input
                    className="w-full border-b-2 py-4  outline-none"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <div className="md:flex gap-5 py-5">
                  <input
                    className="w-full border-b-2 py-4  outline-none"
                    type="text"
                    placeholder="Bangladesh"
                  />
                  <input
                    className="w-full border-b-2 py-4  outline-none"
                    type="text"
                    placeholder="Post Code"
                  />
                </div>

                <div>
                  <button className="bg-buttom-bg py-2 px-4 rounded-md ">
                    <Link>Continue Shipping</Link>
                  </button>
                </div>
              </div>
            </div>

            </form>
          </div>
          <div className="right md:w-[38%]">
            <div className='px-5 py-5 md:px-0 md:py-0'>
              {CardData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b-2 py-4"
                  >
                    <div className="flex gap-2 items-center">
                      <div className='relative'>
                        <p className=' absolute bg-green-300  font-extrabold  rounded-full w-7 h-7 flex justify-center items-center text-xs md:text-xl '>{item.Qont}</p>
                        <img
                          className="w-28 bg-gray-100"
                          src={item.thumbnail}
                          alt=""
                        />
                      </div>
                      <div>
                        <p className='w-52'>{item.title}</p>
                        <p>Size:xl</p>
                      </div>
                    </div>
                    <div>
                      <p>${item.price * item.Qont.toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gray-300 py-6 px-5">
              <div className="flex justify-between border-b-2 py-5">
                <h2 className="text-xl font-semibold font-serif">Subtotals:</h2>
                <p>${totalPrice}</p>
              </div>
              <div className="flex justify-between border-b-2 py-5">
                <h2 className="text-xl font-semibold font-serif">Total</h2>
                <p>
                    
                    ${totalPrice + 300}</p>
              </div>
              <div className="flex items-center gap-4  py-5">
                <input type="checkbox" />
                <p>Shiping & taxes Calculated at checkout</p>
              </div>
              <button onClick={orderHandel} className="bg-green-500 w-full py-2 text-center">
                Order Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChekoutSection1
