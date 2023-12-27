import { useState } from "react";
import "./flipcard.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const FlipCardList = () => {

  const imgAndData = {
      heading:"Data",
      img:"https://d1vwxdpzbgdqj.cloudfront.net/enterprise/data.svg",
  }
  const imgAndData2 = {
    heading:"Technology",
    img:"https://d1vwxdpzbgdqj.cloudfront.net/enterprise/technology.svg",
  }
  const imgAndData3 = {
    heading:"Business",
    img:"https://d1vwxdpzbgdqj.cloudfront.net/enterprise/business.svg",
  }

  const card1 = [
    {
      name: "Data Science",
      info: [
        "Python for Data Science",
        "Exploratory Data Analysis",
        "Supervised Learning",
        "Unsupervised Learning",
        "Visualization with Tableau",
      ],
    },
    {
      name: "Machine Learning",
      info: [
        "Supervised Learning",
        "Ensemble Techniques",
        "Unsupervised Learning",
        "Feature importance, Model selection and Tuning (FMST)",
      ],
    },
    {
      name: "Artificial Intelligence",
      info: [
        "Unsupervised Learning",
        "Supervised Learning",
        "Computer Vision",
        "Natural Language Processing",
      ],
    },
    {
      name: "Big Data",
      info: [
        "Hadoop & Hadoop 3.0",
        "Hive - Big data SQL",
        "Apache Spark and Spark streaming",
        "Apache Kafka & Advanced Spark",
      ],
    },
    {
      name: "Deep Learning",
      info: [
        "Introduction to Python",
        "Statistical Learning",
        "Neural Network Basics & Computer Vision",
        "Natural Language Processing",
      ],
    },
    {
      name: "Data Visualisation",
      info: [
        "Data Visualization using Tableau",
        "Logical Operations & Groups in Tableau",
        "Introduction to Tableau Dashboards",
        "Advanced Mapping Techniques",
        "Exploratory Data analysis (EDA)",
      ],
    },
  ];
  const card2 = [
    {
      name: "Front-end Development",
      info: [
        "HTML & CSS",
        "Machine Learning",
        "Introduction to Programming - Javascript",
        "Intermediate Javascript",
        "Advanced JavaScript",
        "Version Control",
      ],
    },
    {
      name: "Dev Ops",
      info: [
        "Dockers",
        "Introduction to DevOps",
        "DevOps Toolchain",
        "FCI/CD",
        "Ansible & Vagrant",
        "Git",
        "Jenkins",
        "Terraform",
        "DevOps on AWS",
        "Cloud Formation",
      ],
    },
    {
      name: "Cloud Computing",
      info: [
        "Cloud Foundations",
        "Cloud Computing on AWS",
        "Managed Services on AWS",
      ],
    },
    {
      name: "Cyber Security",
      info: [
        "Client-state manipulation",
        "SQL Injection, XSS",
        "Introduction to Cybersecurity",
        "Introduction to Cryptography",
        "Blockchain in Cybersecurity",
        "Ethical Hacking",
      ],
    },
  ];
  const card3 = [
    {
      name: "Business Analytics",
      info: [
        "Data wrangling using Excel",
        "Exploratory Data Analysis",
        "Linear Regression",
        "Application using SQLite",
        "Application using MySQL",
        "Advanced SQL & joining with Python",
      ],
    },
    {
      name: "Digital Marketing",
      info: [
        "Digital Marketing Framework",
        "Content Marketing",
        "Paid Marketing",
        "Social Media - Brand Management",
        "User retention and engagement",
        "Campaign planning and web analytics",
        "SE0 and email marketing",
      ],
    },
    {
      name: "Management",
      info: [
        "Marketing Management",
        "Data Science and Analytics",
        "Leadership and negotiation",
        "Strategic management",
        "Management foundations",
      ],
    },
  ];

  const [selectedList, setSelectedList] = useState(null);
  const [selectedList2, setSelectedList2] = useState(null);
  const [selectedList3, setSelectedList3] = useState(null);

  const handleListClick = (list) => {
    setSelectedList(list);
  };

  const handleBackClick = () => {
    setSelectedList(null);
  };
  const handleListClick2 = (list) => {
    setSelectedList2(list);
  };

  const handleBackClick2 = () => {
    setSelectedList2(null);
  };
  const handleListClick3 = (list) => {
    setSelectedList3(list);
  };

  const handleBackClick3 = () => {
    setSelectedList3(null);
  };

  return (
    <div className="flex w-[90%] mx-auto lg:flex-row flex-col align-middle items-center gap-10 justify-center mt-10">
      <FlipCard
        card={card1}
        imgAndData={imgAndData}
        selectedList={selectedList}
        onListClick={handleListClick}
        onBackClick={handleBackClick}
      />
      <FlipCard
        card={card2}
        imgAndData={imgAndData2}
        selectedList={selectedList2}
        onListClick={handleListClick2}
        onBackClick={handleBackClick2}
      />
      <FlipCard
        card={card3}
        imgAndData={imgAndData3}
        selectedList={selectedList3}
        onListClick={handleListClick3}
        onBackClick={handleBackClick3}
      />
    </div>
  );
};

const FlipCard = ({ card, selectedList, onListClick, onBackClick, imgAndData }) => {
  const isFlipped = selectedList !== null;

  return (
    <div className="w-96 h-[28rem] relative">
      <div
        className={`flip-card-inner ${
          isFlipped ? "flipped" : ""
        } w-full h-full`}
      >
        <div className="flip-card-front flex flex-col align-middle bg-white p-4 px-6 border border-gray-300 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center mt-5 mb-3 items-center h-1/4">
          <img className="" src={imgAndData.img} alt="" />
          <h2 className="text-2xl font-semibold mb-4 text-center">{imgAndData.heading}</h2>
          </div>
          <ul>
            {card.map((list) => (
              <li
                key={list.name}
                onClick={() => onListClick(list)}
                className="cursor-pointer text-gray-700 pr-3 items-center flex justify-between py-1 my-3 hover:bg-gray-200 duration-300 rounded-lg border-b border-gray-300 pl-2"
              >
                {list.name} <FaAngleRight/>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flip-card-back cursor-pointer overflow-auto flex flex-col align-middle gap-2 bg-white p-4 px-6 border border-gray-300 rounded-lg shadow-lg"
          onClick={onBackClick}
        >
          {selectedList && (
            <>
              <h2 className="text-xl flex items-center gap-3 font-semibold mb-4 mt-6">
              <FaAngleLeft /> {selectedList.name}
              </h2>
              <ul>
                {selectedList.info.map((item, index) => (
                  <li key={index} className="py-1 text-gray-700 rounded-lg my-3 border-b border-gray-300 pl-2">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCardList;