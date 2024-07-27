import Image from "next/image";

const AboutUs = () => {
  return (
    <div id="about" className="w-full py-10 bg-[#1D1B18]">
      <div className="max-w-[80%] mx-auto h-full flex flex-col-reverse lg:flex-row">
        <div data-aos="fade-right" className="lg:w-1/2 p-4">
          {/* <Image
            src="/images/slider/6.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          /> */}
          <img src="/images/slider/6.jpg" />
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-1/2 flex flex-col items-center"
        >
          <h1 className="text-[#8d7b3e] text-3xl font-bold py-4">About Us</h1>
          <p className="text-white p-5 text-base lg:text-lg text-center lg:text-left">
            At Presto Perfumes, we are dedicated to the art of fragrance,
            believing that a great perfume can transform any moment into
            something extraordinary. Our curated collection features a wide
            range of exquisite scents, crafted from the finest ingredients to
            bring you a truly memorable experience.
            <br />
            <br /> Our passion for quality and elegance drives us to offer
            perfumes that cater to every taste and occasion. Whether you’re
            seeking a classic scent or a modern fragrance, we have something
            special just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
