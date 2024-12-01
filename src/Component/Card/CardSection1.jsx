import React from 'react'
import CardImage1 from './CardImage/Rectangle 38 (1).png'

const CardSection1 = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className='md:flex md:justify-between'>
          <div className="left md:w-[70%]">
            <div>
              <ul className="flex">
                <li className="w-2/5">Product</li>
                <li className="w-[20%]"> Price</li>
                <li className="w-[20%]"> Quantity</li>
                <li className="w-[20%]">total</li>
              </ul>
            </div>

            <div className="flex justify-between items-center  py-4">
              <div className="w-2/5 flex flex-col md:flex-row gap-2 ">
                <img src={CardImage1} alt="" className="bg-gray-300" />
                <div className="flex flex-col gap-1 justify-center">
                  <h2 className="text-sm md:text-xl">Ut diam consequat</h2>
                  <p className="text-sm">Color:Brown</p>
                  <p className="text-sm">Size:XL</p>
                </div>
              </div>
              <div className="w-[20%] flex items-center">
                <p>$32.44</p>
              </div>
              <div className="w-[20%] flex items-center">
                <div className="flex  gap-2 border-2 bg-gray-100">
                  <p className="border-2 bg-gray-100">-</p>
                  <p className="border-2 bg-gray-100">1</p>
                  <p className="border-2 bg-gray-100">+</p>
                </div>
              </div>
              <div className="w-[20%] flex items-center">
                <p>$219.00</p>
              </div>
            </div>
          </div>
          <div className="right md:w-[25%]">
            <div className="py-4">
              <h2 className="text-center text-2xl font-mono py-5">
                Card Totals
              </h2>
              <div className="bg-gray-300 py-6 px-5">
                <div className="flex justify-between border-b-2 py-5">
                  <h2 className="text-xl font-semibold font-serif">
                    Subtotals:
                  </h2>
                  <p>$449.3</p>
                </div>
                <div className="flex justify-between border-b-2 py-5">
                  <h2 className="text-xl font-semibold font-serif">Total</h2>
                  <p>$33.44</p>
                </div>
                <div className="flex items-center gap-4  py-5">
                  <input type="checkbox" />
                  <p>Shi;;ing & taxes Calculated at checkout</p>
                </div>
                <button className="bg-green-500 w-full py-2 text-center">
                  Proceed To Checkout
                </button>
              </div>
            </div>
            <div className="py-4">
              <h2 className="text-center text-2xl font-mono py-5">
                Calculate Shopping
              </h2>
              <div className="bg-gray-300 py-6 px-5">
                <div className="flex justify-between  py-5">
                  <input
                    type="text"
                    className="outline-none w-full border-b-2 py-2 px-2 bg-gray-300"
                    placeholder="Bangladesh"
                  />
                </div>
                <div className="flex justify-between  py-5">
                  <input
                    type="text"
                    className="outline-none w-full border-b-2 py-2 px-2 bg-gray-300"
                    placeholder="Mohammadpur Rayer Bazer"
                  />
                </div>
                <div className="flex items-center py-5">
                  <input
                    type="text"
                    className="outline-none w-full border-b-2 py-2 px-2 bg-gray-300"
                    placeholder="Post Code "
                  />
                </div>
                <button className="bg-buttom-bg  py-2 px-7 text-center">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardSection1
