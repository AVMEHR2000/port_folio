import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 h-max"
    >
      <div className="h-max">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Teaching Assistant</h2>
        </div  >
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 h-max">
          <ResumeCard
            title="Graph Theory"
            result="2020"
          />
          <ResumeCard
            title="Artificial Intelligence"
            result="2021"
          />
          <ResumeCard
            title="Logic and Set Theory"
            result="2023"
          />
          <ResumeCard
            title="Web Programming"
            result="2023"
          />
        </div>
      </div>
      <div className="h-max">
        <div className="flex flex-col gap-4 ">
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 h-max">
          <ResumeCard
            title="Edge Detection System "
            result="Machine Learning"
          />
            <ResumeCard
            title="Movie Recommender App"
            result="Artificial Intelligence"
          />
            <ResumeCard
            title="Library App"
            result="C++ Project"
          />
          <ResumeCard
            title="Speach Emotion Recognition"
            result="Deep Learning And Neural Network Project"
          />
          <ResumeCard
            title="2D top-down RPG Game Demo"
            result="Unity Project"
          />
          <ResumeCard
            title="Annomaly Detection system"
            result="Data Science Project - Time series"
          />
          <ResumeCard
            title="Tenzai Start Up Web Site"
            result="React-Django-GraphQL-SQL"
          />
          <ResumeCard
            title="Loghe peech Resturant Web App"
            result="React-Django-GraphQL-SQL"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
