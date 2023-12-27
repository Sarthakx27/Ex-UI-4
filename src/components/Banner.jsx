import React from "react";
import { FaPlay } from "react-icons/fa";
import { Partners } from "../utils/partners"
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div className=" font-display text-white">
      <div className="w-screen overflow-hidden lg:h-[600px] bg-black">
        <div
          style={{
            backgroundImage: `url("https://d1vwxdpzbgdqj.cloudfront.net/recruiters/banner.jpg")`,
          }}
          className=" overflow-hidden h-[400px] md:h-[400px] lg:h-[600px] bg-cover bg-no-repeat bg-center z-0 w-full "
        >
          <div className=" w-full h-full lg:bg-gradient-to-r from-blue-950 to-gray-500 z-10 opacity-80 flex">
            <div className="w-full lg:w-4/5 mx-auto grid lg:grid-cols-2 lg:bg-none place-items-end  lg:place-items-center ">
              <div className="w-11/12 hidden lg:block">
                <h1 className=" font-semibold text-5xl mb-7">
                  Hire job-ready professionals, faster.
                </h1>
                <p className=" text-lg w-4/5 tracking-wide mb-7">
                  Pick from our pool of qualified & pre-trained candidates.
                  Increase your interview-to-offer ratio.
                </p>
                <ul className=" text-lg w-4/5 flex list-disc justify-between mb-7  ">
                  Lateral Hiring<li>Off-Campus Hiring</li>
                  <li>Campus Hiring</li>
                </ul>
                <div className="lg:flex flex-col-2 gap-2 lg:gap-4 w-full md:w-1/2 md:mr-auto md:ml-auto lg:ml-0 lg:mr-auto lg:w-11/12 mb-5">
                  <button
                    className="rounded-lg lg:mb-0 mb-2 border-2 border-white text-blue-950  font-semibold w-full 
          tracking-wider py-3 hover:bg-transparent bg-white hover:text-white transition duration-500 lg:text-base text-xs  "
                  >
                    Request a callback
                  </button>
                  <button
                    className="rounded-lg border-2 border-amber-400 text-amber-400 font-semibold w-full 
          tracking-wider py-3 bg-transparent hover:bg-amber-400 hover:text-blue-800  transition duration-500 lg:text-base text-xs  "
                  >
                    Post a job for free
                  </button>
                </div>
              </div>
              <div className="grid tracking-widest grid-cols-3 place-items-center md:gap-10 lg:gap-10 gap-1 text-center w-11/12 mx-auto lg:w-full">
                <div className=" hidden md:block lg:block bg-black py-5 pl-7 pr-4 lg:py-0 lg:pr-0 lg:pl-0 rounded-full lg:bg-transparent col-span-3 mb-10">
                <a href="example.com">
                  <FaPlay size={"4em"} />
                  </a>
                </div>
                <div className=" block md:hidden lg:hidden bg-black py-[17px] pl-5 pr-4 lg:py-0 lg:pr-0 lg:pl-0 rounded-full lg:bg-transparent col-span-3 mb-10">
                <a href="example.com">
                  <FaPlay size={"1em"} />
                  </a>
                </div>
                <div className=" lg:bg-white bg-black rounded-lg bg-opacity-80 lg:bg-opacity-15 w-full grid place-content-center md:px-4 lg:px-4 px-1 h-[5rem] md:h-[6rem] lg:h-[8rem]">
                  <h1 className=" md:text-2xl lg:text-2xl text-md font-semibold lg:mb-7">9.2 Million+</h1>
                  <p className=" md:text-lg lg:text-lg">Learners</p>
                </div>
                <div className=" lg:bg-white bg-black rounded-lg bg-opacity-80 lg:bg-opacity-15 w-full h-full grid place-content-center">
                  <h1 className=" md:text-2xl lg:text-2xl text-md font-semibold lg:mb-7">Zero</h1>
                  <p className=" md:text-lg lg:text-lg">Hiring Cost</p>
                </div>
                <div className=" lg:bg-white bg-black rounded-lg bg-opacity-80 lg:bg-opacity-15 w-full h-full grid place-content-center">
                  <h1 className=" md:text-2xl lg:text-2xl text-md font-semibold lg:mb-7">3100+</h1>
                  <p className=" md:text-lg lg:text-lg">Hiring Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 block text-black text-center mx-auto mt-10 lg:hidden">
                <h1 className=" font-semibold text-3xl tracking-wider mb-7">
                  Hire job-ready professionals, faster.
                </h1>
                <p className=" text-sm px-5 mx-auto tracking-wider text-gray-600 mb-7">
                  Pick from our pool of qualified & pre-trained candidates.
                  Increase your interview-to-offer ratio.
                </p>
                <ul className=" text-sm px-20 mx-auto w-4/5  text-gray-600 flex list-disc justify-between mb-7  ">
                  Lateral Hiring<li>Off-Campus Hiring</li>
                  <li>Campus Hiring</li>
                </ul>
                <div className="lg:flex flex-col-2 gap-2 lg:gap-4 w-full md:w-1/2 md:mr-auto md:ml-auto lg:ml-0 lg:mr-auto lg:w-11/12 mb-5">
                  <button
                    className="rounded-lg lg:mb-0 mb-2 border-2 border-transparent text-white  font-semibold w-full 
          tracking-wider py-3 hover:bg-transparent bg-blue-600 hover:text-blue-600 hover:border-blue-600 transition duration-500 text-base  "
                  >
                    Request a callback
                  </button>
                  <button
                    className="rounded-lg border-2 border-amber-400 text-amber-400 font-semibold w-full 
          tracking-wider py-3 bg-transparent hover:bg-amber-400 hover:text-white  transition duration-500 text-base   "
                  >
                    Post a job for free
                  </button>
                </div>
              </div>

      <div className="text-black">
      <h1 className=" text-2xl tracking-wider font-semibold text-center my-10">Academic Collaborations</h1>
        <Marquee className="" pauseOnHover={true}>
              {Partners.map((partner, index) => (
                <div
                  key={index}
                  className="py-4 mx-5 d-flex flex-column justify-content-center h-[100px] align-items-center gap-2"
                >
                  <img className="w-full h-full"
                    src={partner.img}
                  />
                </div>
              ))}
            </Marquee>
      </div>
    </div>
  );
};

export default Banner;
