
const Footer = () => {
  return (
    <section className="bg-footer-bg">
      <div className="container mx-auto py-20">
        <div className="px-10 md:px-0 md:flex md:justify-between">
          <div>
            <h3 className="text-3xl  font-semibold font-lato">Hekto</h3>
            <div className="border-2 rounded-md flex justify-between my-4">
              <input
                className=" px-5 py-2 outline-none w-full  h-fit"
                type="email"
                placeholder="Enter Email Address"
              />
              <button className="bg-buttom-bg w-36 py-2">Sign up</button>
            </div>

            <div className="py-3">
              <p className="text-xl py-1">Contact Info</p>
              <p>17 Princess Road,London,Greater London NW1 8JR,UK</p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl   font-lato">Catagories</h3>
            <ul className="space-y-2 py-3">
              <li>Laptops & Computer</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl   font-lato">Catagories</h3>
            <ul className="space-y-2 py-3">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl   font-lato">Pages</h3>
            <ul className="space-y-2 py-3">
              <li>Blog</li>
              <li>Browse the shop</li>
              <li>Category</li>
              <li>Per-Bullt Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
