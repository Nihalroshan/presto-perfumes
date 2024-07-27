import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div id="gallery" className="w-full  bg-[#1D1B18]">
      <div data-aos="zoom-in" className="max-w-[80%] mx-auto h-full">
        <div className="flex flex-col items-center pt-10">
          <h1 className="text-3xl font-bold text-[#8d7b3e]">Gallery</h1>
          <p className="text-md font-bold text-gray-500 ">
            Explore our products
          </p>
        </div>
        <div className="py-10">
          <Slider {...settings}>
            <div>
              <img
                src="/images/slider/4.jpg"
                alt="1"
                className="p-4"
                // className="w-[240px] h-[240px]"
              />
            </div>
            <div>
              <img
                src="/images/slider/5.jpg"
                alt="1"
                className="p-4"
                // className="w-[240px] h-[240px]"
              />
            </div>
            <div>
              <img
                src="/images/slider/7.jpg"
                alt="1"
                className="p-4"
                // className="w-[240px] h-[240px]"
              />
            </div>
            <div>
              <img
                src="/images/slider/8.jpg"
                alt="1"
                className="p-4"
                // className="w-[240px] h-[240px]"
              />
            </div>
            <div>
              <img
                src="/images/slider/9.jpg"
                alt="1"
                className="p-4"
                // className="w-[240px] h-[240px]"
              />
            </div>
            <div>
              <img
                src="/images/slider/10.jpg"
                alt="1"
                className="p-4"
                // className="w-[240px] h-[240px]"
              />
            </div>
            <div>
              <img
                src="/images/slider/11.jpg"
                alt="1"
                className="p-4"
                // className="w-[240px] h-[240px]"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
