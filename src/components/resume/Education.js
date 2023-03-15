import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 h-max"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-black tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Amirkabir University Of Technology(2019 - 2023)"
            result="18.3/20"
            des="Outstanding student top rank 1 in Computer science"
          />
          <ResumeCard
            title="BSc in Mathematics and Applications"
            subTitle="Amirkabir University Of Technology (2018 -2022)"
            result="18.25/20"
            des="Outstanding student rank 5 in Mathematics"
          />
          <ResumeCard
            title="High School Education"
            subTitle="National Organization for Development of Exceptional Talents (2014 - 2018)"
            result="Shahriari Qom"
            des="In High school I focoused on Physical and Mathematical Olympiad."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Full Marked In:</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-5 h-max">
          <ResumeCard
            title="Computer Workshop"
            result="2018"
          />
          <ResumeCard
            title="Graph Theory"
            result="2020"
          />
          <ResumeCard
            title="Dynamic systems"
            result="2020"
          />
          <ResumeCard
            title="General Topology"
            result="2021"
          />
          <ResumeCard
            title="Computer Simulation"
            result="2021"
          />
          <ResumeCard
            title="Data Structures &
            Algorithms"
            result="2020"
          />
          <ResumeCard
            title="Data Mining"
            result="2020"
          />
          <ResumeCard
            title="Artificial Intelligence"
            result="2020"
          />
          <ResumeCard
            title="Mathematical Software"
            result="2021"
          />
          <ResumeCard
            title="Operating Systems"
            result="2022"
          />
          <ResumeCard
            title="Data Base"
            result="2023"
          />
          <ResumeCard
            title="Web Development"
            result="2023"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education