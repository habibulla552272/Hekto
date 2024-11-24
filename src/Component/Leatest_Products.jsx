import React, { useContext } from "react";
import { apiData } from "./ContextApi";
import { Link } from "react-router-dom";
import Products from "./../Pages/Products";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import New_Arrival from "./New_Arrival";
import Best_Seller from "./Best_Seller";
import Special_Offer from "./Special_Offer";

const Leatest_Products = () => {
  let info = useContext(apiData);

  let filteritem = info.filter((item) => {
    return item.category === "laptops";
  });
  filteritem.map((item, index) => {
    item.No = index + 1;
  });

  // let lastFilter = filteritem.filter((item) => {
  //   return item.NO > 1 && item.No <= 5;
  // });

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center py-3">Latest Products</h2>
        <div className="flex gap-10 justify-center py-5">
          <Tabs>
            <TabList className="flex justify-center gap-10  ">
              <Tab>New_Arrival</Tab>
              <Tab>Best Seller</Tab>
              <Tab>Featured</Tab>
              <Tab>Special Offer</Tab>
            </TabList>
            <TabPanel>
              <New_Arrival />
            </TabPanel>
            <TabPanel>
              <Best_Seller />
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel>
              <Special_Offer />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Leatest_Products;
