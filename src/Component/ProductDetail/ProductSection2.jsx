import React from "react";
import "./Product.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ProductSection2 = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <Tabs>
            <TabList className="flex flex-col md:flex-row items-center justify-center gap-3  md:gap-10 px-2 py-2  md:px-0">
              <Tab>Description</Tab>
              <Tab>Additional Info</Tab>
              <Tab>Reviews</Tab>
              <Tab>Video</Tab>
            </TabList>
            <TabPanel>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt natus, obcaecati expedita ipsa accusamus iste eum
                molestiae aperiam vel voluptatem voluptate adipisci, quia ea
                sit, eius ullam quae omnis repudiandae.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                recusandae autem repudiandae molestiae nisi voluptatum
                consequuntur beatae amet cum sint.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque quod necessitatibus inventore explicabo itaque
                officiis, ipsam saepe numquam dolorem aspernatur?
              </p>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProductSection2;
