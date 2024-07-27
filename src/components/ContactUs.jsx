import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div id="contactus" className="w-full py-10 bg-[#1D1B18]">
      <div className="max-w-[80%] mx-auto h-full flex md:flex-row flex-col-reverse">
        <div className="md:w-1/2  flex flex-col justify-center items-center">
          <h1 className="text-[#8d7b3e] text-3xl font-bold py-4">Contact Us</h1>
          {/* <div className="py-4 flex text-white gap-3 items-center">
            <FaPhoneAlt color="#fff" />
            <p>+966 50 774 9957</p>
          </div> */}
          <div className="flex text-white gap-3 items-center">
            <MdEmail color="#fff" className="w-4 h-4" />
            <p>prestoperfumes@gmail.com</p>
          </div>
        </div>
        <div className="md:w-1/2 p-4 hidden md:block">
          <img src="/images/slider/3.jpg" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
