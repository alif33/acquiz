import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#6f00ff] text-white">
      <div className="flex justify-center pt-7">
        <div className="border-t-4 border-[#FFF] w-20"></div>
      </div>
      <div className="w-11/12 grid grid-cols-1 lg:grid-cols-12 pt-12 pb-16">
        <div className="lg:col-span-4 flex justify-center">
          <div className="max-w-xs lg:max-w-[210px]">
            <Image height={41} width={439} src="/img/logo.png" alt="logo" />
          </div>
        </div>
        <div className="lg:col-span-8 px-4">
          <div className="">
            <ul className="flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-center pt-5 lg:pt-0">
              <li className="hover:underline cursor-pointer">Books</li>
              <li className="hover:underline cursor-pointer">Courses</li>
              <li className="hover:underline cursor-pointer">Media</li>
              <li className="hover:underline cursor-pointer">Partnership</li>
              <li className="hover:underline cursor-pointer">Speaking</li>
              <li className="hover:underline cursor-pointer">The Firm</li>
              <li className="hover:underline cursor-pointer">Careers</li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-start lg:items-center pt-5 lg:pt-7 lg:ps-20 text-xs">
            <span>Privacy Policy</span>
            <span className="ps-4">Terms of Service</span>
            <span className="ps-4">Do Not Sell My Info</span>
          </div>
          <div className="pt-5 lg:pt-2 text-center lg:text-start lg:ps-40 text-xs">
            <span>© 2023, by Acquisition.com LLC</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
