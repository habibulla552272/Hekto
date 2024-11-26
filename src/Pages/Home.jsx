import React from 'react'
import Hero from '../Component/Hero';
import Featured from '../Component/Featured';
import Leatest_Products from '../Component/Leatest_Products';
import What_Shopex from '../Component/What_Shopex ';
import Unique_Features from '../Component/Unique_Features';
import Top_Categories from '../Component/Top_Categories';
import Discount_Item from '../Component/Discount_Item';
import Trending_Product from '../Component/Trending_Projucts';
import Subscribe_0ur_Newslater from '../Component/Subscribe_0ur_Newslater';
import Leatest_Blog from '../Component/Leatest_Blog';

const Home = () => {
  return (
    <>
    <Hero />
    <Featured />
    <Leatest_Products />
    <What_Shopex />
    <Unique_Features />
    <Trending_Product />
    <Discount_Item />
    <Top_Categories />
    <Subscribe_0ur_Newslater />
    <Leatest_Blog />
    </>
  );
}

export default Home
