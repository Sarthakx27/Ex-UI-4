import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import Marquee from "react-fast-marquee";
import { HiringPartners } from "../utils/partners";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FlipCardList from "./FlipCardList";

const AllContent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dummyList = [
    { name: "Data Science", description: "Description for Item 1" },
    { name: "Item 2", description: "Description for Item 2" },
    { name: "Item 3", description: "Description for Item 3" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const handleCardClick = () => {
    setSelectedItem(null);
  };
  return (
    <>
      {/* Why hire from Great Learning */}

      <div className="text-black font-display mt-20 lg:w-4/5 mx-auto">
        <h1 className=" text-2xl text-gray-800 md:text-3xl tracking-wider lg:text-4xl font-semibold text-center my-10">
          Why hire from Great Learning
        </h1>
        <div>
          <div className="grid lg:grid-cols-2 mt-8 place-items-center">
            <img
              className=" w-full lg:px-0 px-5 lg:w-9/12 mx-auto"
              src="https://d1vwxdpzbgdqj.cloudfront.net/recruiters/why-hire-1.jpg"
              alt=""
            />
            <div className="flex mt-5 flex-col text-center lg:text-start place-content-center w-11/12 md:w-4/5 lg:w-4/5">
              <h1 className=" text-xl md:text-2xl lg:text-4xl tracking-wide ">
                Immediately deployable candidates, all year round
              </h1>
              <p className="lg:text-lg md:mt-7 lg:mt-7 mt-3 w-11/12 lg:mr-auto lg:ml-0 mr-auto ml-auto lg:w-4/5 tracking-wide text-gray-800">
                Hire candidates who’ve been trained in our industry-relevant
                programs, or with skills verified by industry experts.
              </p>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 mt-8 flex justify-center flex-col-reverse">
          <div className="flex mt-5 mx-auto flex-col text-center lg:text-start place-content-center w-11/12 md:w-4/5 lg:w-4/5">
            <h1 className=" text-xl md:text-2xl lg:text-4xl tracking-wide ">
                A talent pool to meet all your needs
              </h1>
              <p className="lg:text-lg md:mt-7 lg:mt-7 mt-3 w-11/12 lg:mr-auto lg:ml-0 mr-auto ml-auto lg:w-4/5 tracking-wide text-gray-800">
                Technology, data, and management - our candidates come with a
                wide range of experience and expertise, across skills and
                functions
              </p>
            </div>
            <img
              className=" w-full lg:px-0 px-5 lg:w-9/12 mx-auto"
              src="https://d1vwxdpzbgdqj.cloudfront.net/recruiters/why-hire-2.jpg"
              alt=""
            />
          </div>
          <div className="grid lg:grid-cols-2 mt-8 place-items-center">
            <img
              className=" w-full lg:px-0 px-5 lg:w-9/12 mx-auto"
              src="https://d1vwxdpzbgdqj.cloudfront.net/recruiters/why-hire-3.jpg"
              alt=""
            />
            <div className="flex mt-5 flex-col text-center lg:text-start place-content-center w-11/12 md:w-4/5 lg:w-4/5">
            <h1 className=" text-xl md:text-2xl lg:text-4xl tracking-wide ">
                Customised Hiring Modes to meet your exact requirements
              </h1>
              <div className="lg:text-lg text-start md:mt-7 lg:mt-7 mt-3 w-11/12 lg:mr-auto lg:ml-0 mr-auto ml-auto lg:w-4/5 tracking-wide text-gray-800">
                <ul>
                  <li className=" font-semibold  tracking-wide">
                    Job Board:{" "}
                    <span className=" font-normal text-gray-700">
                      Post your requirements and attract a qualified & trained
                      candidate pool.
                    </span>
                  </li>
                  <li className="pt-5 font-semibold  tracking-wide">
                    GL Excelerate Career Fair:{" "}
                    <span className=" font-normal text-gray-700">
                      Meet the best talent at our flagship career fairs
                      organized in all metro cities.
                    </span>
                  </li>
                  <li className="pt-5 font-semibold  tracking-wide">
                    Exclusive Hiring Drives:{" "}
                    <span className=" font-normal text-gray-700">
                      Conduct a recruitment drive exclusively for your
                      organization
                    </span>
                  </li>
                  <li className="pt-5 font-semibold  tracking-wide">
                    Hackathons & Projects:{" "}
                    <span className=" font-normal text-gray-700">
                      Showcase your organization as an Employer of Choice and
                      create a pipeline of hires.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* World-class professionals */}

      <div className="w-full font-display mt-16 pt-5 pb-16 lg:pb-6 bg-gray-100">
        <h1 className=" text-2xl md:text-3xl w-11/12 lg:text-4xl tracking-wider lg:w-1/2 mx-auto text-gray-900 font-semibold text-center my-5">
          World-class professionals with in-demand skills in top domains
        </h1>
        <div>
          <FlipCardList />
        </div>
      </div>

      {/* Hiring Partners */}

      <div className="text-black font-display">
        <h1 className=" tracking-wider text-3xl font-semibold text-center my-10">
          Hiring Partners
        </h1>
        <Marquee className="" pauseOnHover={true}>
          {HiringPartners.map((partner, index) => (
            <div
              key={index}
              className="py-4 mx-5 d-flex flex-column justify-content-center h-[100px] align-items-center gap-2"
            >
              <img className="w-full h-full" src={partner.img} />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Hiring Partners Testimonials */}

      <div className="text-black mt-16 font-display md:w-4/5 lg:w-4/5 mx-auto">
        <h1 className=" tracking-wider text-2xl w-4/5 mx-auto md:text-2xl lg:text-3xl md:mb-16 lg:mb-16 font-semibold text-center md:my-10 lg:my-10 my-5">
          Hiring Partners Testimonials
        </h1>
        <div className="lg:w-4/5 mx-auto mb-10">
          <Carousel
            responsive={responsive}
            arrows
            infinite
            autoPlay
            pauseOnHover
            autoPlaySpeed={3000}
          >
            <div className="mx-5 px-10 bg-indigo-100 rounded-lg h-[34rem] pb-12">
              <img
                className=" pt-10 pl-5 w-24 mr-auto"
                src="https://d1vwxdpzbgdqj.cloudfront.net/recruiters/crisil.png"
                alt="..."
              />
              <div className=" pt-8 text-sm md:text-lg lg:text-lg text-gray-700 text-start lg:pl-5 leading-6 tracking-wide">
                <p className="">
                  I would like to convey on behalf of the panellists that we
                  found most of the students very good at communication and
                  their technical skills were also at par with what is expected
                  based on the curriculum offered to them. All the students
                  seemed to be focussed about their career goals, had a pleasant
                  attitude to interact with and were open to learn new things{" "}
                  <br /> <br />
                  Looking forward to continuing this association Great Learning
                  to hire more such talented young minds.
                </p>
                <h6 className=" md:pt-20 lg:pt-20 pt-10 md:text-base lg:text-base font-semibold">
                  Pallavi Thaker
                </h6>
                <p className=" md:text-base lg:text-base">
                  Assistant Manager- Talent Acquisition
                </p>
              </div>
            </div>

            <div className="mx-5 px-10 bg-blue-100 rounded-lg h-[34rem] pb-12">
              <img
                className=" pt-10 pl-5 w-48 mr-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/recruiters/mathcompany.jpg"
                alt="..."
              />
              <div className=" pt-8 text-sm md:text-lg lg:text-lg text-gray-700 text-start lg:pl-5 leading-6 tracking-wide">
                <p className="">
                  When we decided to hire trained data scientists, our first
                  association was with Great Learning & we had continued success
                  with them. Some of the recruits from GL have scaled up very
                  well as Analysts & made huge differences to our projects &
                  products. The resources who are hired from their campus, are
                  indeed great additions to the system. They were able to fulfil
                  our varieties of requirements within no time. We look forward
                  to a long term relationship with Great Learning! Hoping to
                  hire more brilliant minds!
                </p>
               <h6 className=" md:pt-20 lg:pt-20 pt-10 md:text-base lg:text-base font-semibold">
                  Manjunath Hegde,
                </h6>
               <p className=" md:text-base lg:text-base">Manager – Talent Acquisition</p>
              </div>
            </div>

            <div className="mx-5 px-10 bg-violet-100 rounded-lg h-[34rem] pb-12">
              <img
                className=" pt-10 pl-5 w-16 mr-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/recruiters/zs_logo.png"
                alt="..."
              />
              <div className=" pt-8 text-sm md:text-lg lg:text-lg text-gray-700 text-start lg:pl-5 leading-6 tracking-wide">
                <p className="">
                  Journey with Great Learning has been enthralling and prolific
                  for ZS. Quality of candidates is really good. We look forward
                  to continuing working in close collaboration. I would want to
                  take this opportunity to thank the GL team for always being
                  proactive, responsive and having such great TATs. Been a
                  pleasure working with Great Learning <br /> <br /> <br /> <br />
                </p>
               <h6 className=" md:pt-20 lg:pt-20 pt-10 md:text-base lg:text-base font-semibold">Neha Yadav</h6>
               <p className=" md:text-base lg:text-base">
                  Human Resources Specialist - Recruiting
                </p>
              </div>
            </div>

            <div className="mx-5 px-10 bg-emerald-100 rounded-lg h-[34rem] pb-12">
              <img
                className=" pt-10 pl-5 w-24 mr-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/recruiters/Indus-OS.png"
                alt="..."
              />
              <div className=" pt-8 text-sm md:text-lg lg:text-lg text-gray-700 text-start lg:pl-5 leading-6 tracking-wide">
                <p className="">
                  It was our utmost pleasure to associate with the GL team.We
                  are so happy with the prompt response & prompt action from
                  sharing the profiles to scheduling each candidate. <br />
                  Also the pool for Data Science & Analytics was very great. We
                  are so happy with all the hires we made through Great Lakes.
                  Look forward to having such an association in future too. <br /> <br /> 
                </p>
                <h6 className=" md:pt-24 lg:pt-24 pt-10 md:text-base lg:text-base font-semibold">
                  GUNJAN RASTOGI
                </h6>
               <p className=" md:text-base lg:text-base">Manager- Talent Acquisition</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* CONTACT US */}
      <div className="w-full font-display pt-10 pb-5 lg:pb-6 bg-blue-200">
        <div className="lg:w-4/5 md:px-16 px-5 lg:px-20 mx-auto">
          <div className="grid lg:grid-cols-3 gap-3 place-items-center lg:ml-36 lg:place-items-start">
            <div>
              <h1 className=" text-3xl font-bold text-center lg:text-start my-3 ">
                Contact Us
              </h1>
              <div className="text-gray-700 text-center lg:text-start mt-5 lg:mb-0 mb-6">
                For any queries please share your contact details and the team
                will reach out to you soon.
                <p className="mt-5  text-blue-600">
                  <a
                    href="mailto:corporate@greatlearning.in"
                    className="flex items-center gap-2 justify-center lg:justify-start"
                  >
                    <CiMail size={"1.5em"} /> corporate@greatlearning.in
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="col-span-2 ml-5 lg:ml-10">
              <form className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 mb-8 place-items-center w-full gap-5">
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-sm md:text-base lg:text-base"
                  >
                    Full Name
                  </label>
                  <input
                    className="bg-gray-100 appearance-none border text-sm md:text-base lg:text-base border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-11/12 md:w-3/4 lg:w-full"
                    type="text"
                    name="name" //name should me matched to state's name && name given in schema
                    placeholder="Full Name"
                    id="name"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobilenumber"
                    className="block text-sm md:text-base lg:text-base"
                  >
                    Mobile Number
                  </label>
                  <input
                    className="bg-gray-100 appearance-none border text-sm md:text-base lg:text-base w-11/12 md:w-3/4 lg:w-full border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    name="mobilenumber"
                    placeholder="Mobile Number"
                    id="mobilenumber"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyname"
                    className="block text-sm md:text-base lg:text-base"
                  >
                    Company Name
                  </label>
                  <input
                    className="bg-gray-100 appearance-none border text-sm md:text-base lg:text-base w-11/12 md:w-3/4 lg:w-full border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    name="companyname"
                    placeholder="Company Name"
                    id="companyname"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-base lg:text-base"
                  >
                    Company Email
                  </label>
                  <input
                    className="bg-gray-100 appearance-none border text-sm md:text-base lg:text-base border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-11/12 md:w-3/4 lg:w-full"
                    type="text"
                    name="email"
                    placeholder="Company Email"
                    id="email"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="designation"
                    className="block text-sm md:text-base lg:text-base"
                  >
                    Designation
                  </label>
                  <input
                    className="bg-gray-100 appearance-none border text-sm md:text-base lg:text-base w-11/12 md:w-3/4 lg:w-full border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    name="designation"
                    placeholder="Designation"
                    id="designation"
                    required
                    autoComplete="off"
                  />
                </div>

                <p className=" col-span-2 md:text-sm lg:text-sm text-gray-700 text-center w-full text-xs">
                  By submitting the form, you agree to our Terms and Conditions
                  and our Privacy Policy.
                </p>
                <div className="lg:w-1/3 w-1/2 lg:mt-0 mt-4 col-span-2">
                  <button
                    className=" flex items-center text-sm lg:text-base text-center justify-center gap-2 py-3 rounded-lg border-2 border-transparent text-white hover:border-blue-700 
          font-semibold w-full ml-auto tracking-wider hover:bg-transparent bg-blue-700 hover:text-blue-700 transition duration-500   "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllContent;
