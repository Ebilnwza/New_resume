import React from "react";
import { motion } from "framer-motion";
const resume_card = () => {
  const data = {
    name: "khanakorn",
    age: 22,
    Skill: ["JAVA", "Python", "JavaScript"],
    FrontEnd: ["react", "ejs"],
    BackEnd: ["ExpressJs", "NodeJs"],
    Database: "MongoDB",
    target: ["Web_Dev", "Data"],
    mail: "khanakorn01@gmail.com",
    tel: "0958456270",
  };
  return (
    <div className="bg-gray-100 font-sans  flex items-center justify-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto py-8 px-4"
      >
        <div className="bg-gray-100 font-sans">
          {" "}
          <div className="container mx-auto py-8 px-4">
            {" "}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {" "}
              <h1 className="text-3xl font-semibold">{data.name}</h1>{" "}
              {data.target.map((item, index) => (
                <h2 key={index}>{item}</h2>
              ))}
              <h2 className="text-xl font-semibold mt-4 mb-2">Skills</h2>{" "}
              <ul className="list-disc list-inside text-gray-700">
                {" "}
                {data.Skill.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>{" "}
              <h2 className="text-xl font-semibold mt-4 mb-2">Contact</h2>{" "}
              <p>Mail</p>
              <li>{data.mail}</li>
              <p>Tel.</p>
              <li>{data.tel}</li>
              <ul className="list-disc list-inside text-gray-700"> </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </motion.div>
    </div>
  );
};

export default resume_card;
