import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Discount_item1 from './Discount_item1';

const Discount_Item = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-4xl text-center py-5 font-josefin">
          Discount Item
        </h2>
        <Tabs>
          <TabList className="flex justify-center gap-5">
            <Tab>Wood Chair</Tab>
            <Tab>Plastic Chair</Tab>
            <Tab>Sofa Colletion</Tab>
          </TabList>

          <TabPanel>
            <Discount_item1 />
          </TabPanel>
          <TabPanel>
            <Discount_item1 />
          </TabPanel>
          <TabPanel>
            <Discount_item1 />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
}

export default Discount_Item
