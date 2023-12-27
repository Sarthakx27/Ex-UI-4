import React, { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Accordions = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      name: "Data Science",
      items: [
        "Python for Data Science",
        "Exploratory Data Analysis",
        "Supervised Learning",
        "Unsupervised Learning",
        "Visualization with Tableau",
      ],
    },
    {
      name: "Machine Learning",
      items: [
        "Introduction to Machine Learning",
        "Regression Models",
        "Classification Models",
        "Clustering",
        "Neural Networks",
      ],
    },
    // Add more categories as needed
  ];

  const handleCategoryClick = (index) => {
    setSelectedCategory(index === selectedCategory ? null : index);
  };
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className=" w-11/12  mx-auto ">
      <div className="grid grid-cols-3 ">
        <div className="bg-gray-200 rounded-xl">
          <Accordion
            className=" bg-gray-200  px-7 w-11/12 pt-2 mx-auto"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(1)}>
              <h1 className="text-base mt-2 font-normal md:font-semibold lg:font-semibold text-gray-800">
                Data Science
              </h1>
            </AccordionHeader>
            <AccordionBody>
              <ul className="border-t border-gray-800 pt-1 text-sm text-start leading-6 list-disc pl-3 text-gray-800">
                <li className="py-2 tracking-wide">Python for Data Science</li>
                <li className="py-2 tracking-wide">
                  Exploratory Data Analysis
                </li>
                <li className="py-2 tracking-wide">Supervised Learning</li>
                <li className="py-2 tracking-wide">Unsupervised Learning</li>
                <li className="py-2 tracking-wide">
                  Visualization with Tableau
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" bg-gray-200 border-t border-gray-600  px-7 w-11/12 mx-auto"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(2)}>
              <h1 className="text-base mt-2 font-normal md:font-semibold lg:font-semibold text-gray-800">
                Machine Learning
              </h1>
            </AccordionHeader>
            <AccordionBody>
              <ul className="border-t border-gray-800 pt-3 text-sm text-start leading-6 list-disc pl-3 text-gray-800">
                <li className="py-2 tracking-wide">Supervised Learning</li>
                <li className="py-2 tracking-wide">Ensemble Techniques</li>
                <li className="py-2 tracking-wide">Unsupervised Learning</li>
                <li className="py-2 tracking-wide">
                  Feature importance, Model selection and Tuning (FMST)
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" bg-gray-200 border-t border-gray-600 px-7 w-11/12 mx-auto"
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(3)}>
              <h1 className="text-base mt-2 font-normal md:font-semibold lg:font-semibold text-gray-800">
                Artificial Intelligence
              </h1>
            </AccordionHeader>
            <AccordionBody>
              <ul className="border-t border-gray-600 pt-3 text-sm text-start leading-6 list-disc pl-3 text-gray-800">
                <li className="py-2 tracking-wide">
                  Introduction to Machine Learning
                </li>
                <li className="py-2 tracking-wide">Unsupervised Learning</li>
                <li className="py-2 tracking-wide">Supervised Learning</li>
                <li className="py-2 tracking-wide">Computer Vision</li>
                <li className="py-2 tracking-wide">
                  Natural Language Processing
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" bg-gray-200 border-t border-gray-600 px-7 w-11/12 mx-auto"
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(4)}>
              <h1 className="text-base mt-2 font-normal md:font-semibold lg:font-semibold text-gray-800">
                Big Data
              </h1>
            </AccordionHeader>
            <AccordionBody>
              <ul className="border-t border-gray-600 pt-3 text-sm text-start leading-6 list-disc pl-3 text-gray-800">
                <li className="py-2 tracking-wide">Hadoop & Hadoop 3.0</li>
                <li className="py-2 tracking-wide">Hive - Big data SQL</li>
                <li className="py-2 tracking-wide">
                  Apache Spark and Spark streaming
                </li>
                <li className="py-2 tracking-wide">
                  Apache Kafka & Advanced Spark
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" bg-gray-200 border-t border-gray-600 px-7 w-11/12 mx-auto"
            open={open === 5}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(5)}>
              <h1 className="text-base mt-2 font-normal md:font-semibold lg:font-semibold text-gray-800">
                Deep Learning
              </h1>
            </AccordionHeader>
            <AccordionBody>
              <ul className="border-t border-gray-600 pt-3 text-sm text-start leading-6 list-disc pl-3 text-gray-800">
                <li className="py-2 tracking-wide">Introduction to Python</li>
                <li className="py-2 tracking-wide">Statistical Learning</li>
                <li className="py-2 tracking-wide">
                  Neural Network Basics & Computer Vision
                </li>
                <li className="py-2 tracking-wide">
                  Natural Language Processing
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" bg-gray-200 border-t border-gray-600 px-7 w-11/12 mx-auto"
            open={open === 6}
            icon={<Icon id={6} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(6)}>
              <h1 className="text-base mt-2 font-normal md:font-semibold lg:font-semibold text-gray-800">
                Data Visualisation
              </h1>
            </AccordionHeader>
            <AccordionBody>
              <ul className="border-t border-gray-600 pt-3 text-sm text-start leading-6 list-disc pl-3 text-gray-800">
                <li className="py-2 tracking-wide">
                  Data Visualization using Tableau
                </li>
                <li className="py-2 tracking-wide">
                  Logical Operations & Groups in Tableau
                </li>
                <li className="py-2 tracking-wide">
                  Introduction to Tableau Dashboards
                </li>
                <li className="py-2 tracking-wide">
                  Advanced Mapping Techniques
                </li>
                <li className="py-2 tracking-wide">
                  Exploratory Data analysis (EDA)
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
