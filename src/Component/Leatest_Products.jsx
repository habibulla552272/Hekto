import React, { useContext } from 'react'
import { apiData } from './ContextApi';
import Products from './../Pages/Products';

const Leatest_Products = () => {

    let info =useContext(apiData)

   let filteritem= info.filter((item)=>{

        return item.category === "laptops"

    })
     filteritem.map((item,index)=>{
     
      
       
       item.No= index+1;

       
    
  })


  let lastFilter = filteritem.filter((item)=>{
    return item.NO > 1 && item.No <= 5;
  })

  return (
    <section>
      <div className="container mx-auto">
        <h2>Latest Products</h2>
        <div className='flex  justify-between overflow-hidden'> 
          {filteritem.map((item) => (
            <div className='w-11/12 md:w-[30%]'>
              <div>
                <img src={item.thumbnail} alt="" />
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leatest_Products
