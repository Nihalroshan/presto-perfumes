import Image from "next/image";

const Banner = () => {
  return (
    <div id="contactus" className="w-full py-10 bg-[#1D1B18]">
      <div className="max-w-[80%] mx-auto h-full flex lg:flex-row flex-col">
        <div className="lg:w-1/2  flex flex-col justify-center items-center">
          <h1 className="text-[#8d7b3e] text-[40px] font-extrabold py-4">
            Presto Perfumes
          </h1>
          <p className="text-white text-center p-10 text-xl font-bold">
            Welcome to Presto, where the art of fragrance meets the essence of
            individuality. our mission is to craft exquisite perfumes
          </p>
          {/* <div className="py-4 flex text-white gap-3 items-center">
            <FaPhoneAlt color="#fff" />
            <p>+966 50 774 9957</p>
          </div> */}
          <div className="flex text-white gap-3 items-center"></div>
        </div>
        <div className="lg:w-1/2 p-4 flex justify-center">
          <img src="/images/slider/3.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
