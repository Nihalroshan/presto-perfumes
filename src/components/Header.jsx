import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#343531] h-[100px] w-full  justify-center">
      <div className="max-w-[80%]  h-full mx-auto flex">
        <div className="w-1/2 h-full flex items-center pl-5 text-2xl text-[#8d7b3e] font-bold">
          <Link href="/"> Presto Perfumes</Link>
        </div>
        <div className="w-1/2 h-full hidden md:flex items-center justify-around">
          {/* <div className="cursor-pointer text-white hover:text-[#8d7b3e]">
            Home
          </div> */}
          <div className="cursor-pointer text-white hover:text-[#8d7b3e]">
            <Link href="/#about">About Us</Link>
          </div>
          <div className="cursor-pointer text-white hover:text-[#8d7b3e]">
            <Link href="/#gallery">Gallery</Link>
          </div>
          <div className="cursor-pointer text-white hover:text-[#8d7b3e]">
            <Link href="/#contactus"> Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
