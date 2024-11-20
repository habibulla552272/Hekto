
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";

const EndFooter = () => {
  return (
    <section className="bg-engFooter">
      <div className="container mx-auto px-5">
        <div className="flex justify-between py-4 items-center">
          <div>
            <p>©Webecy - All Rights Reserved</p>
          </div>
          <div className="flex gap-2">
            <FaFacebookF />
            <FaInstagram />
            <CiTwitter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndFooter;
